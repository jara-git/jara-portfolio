import React, { useState } from "react";
import "./MonogramCard.scss";
import GenerativeMonogramPT from "./GenerativeMonogramPT";

const MonogramCard = () => {
    const [armRot, setArmRot] = useState(0);
    const [armBend, setArmBend] = useState(0);   // 👈 rango -30 a 10, valor inicial 0
    const [legRot, setLegRot] = useState(0);
    const [headRot, setHeadRot] = useState(0);
    const [round, setRound] = useState(8);
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [fillColor, setFillColor] = useState("#0a0a0a");
    const [strokeColor, setStrokeColor] = useState("#f0e8e6ff");
    const [fontVariant, setFontVariant] = useState("none");
    const [showControls, setShowControls] = useState(true);

    const randomize = () => {
        setArmRot(Math.floor(Math.random() * 51) - 20);
        setLegRot(Math.floor(Math.random() * 56) - 50);
        setArmBend(Math.floor(Math.random() * 41) - 30); // rango -30 a 10
        setHeadRot(Math.floor(Math.random() * 61) - 30);
        setRound(Math.floor(Math.random() * 31));
        setStrokeWidth(Math.floor(Math.random() * 6));
        setFillColor(
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
        );
        setStrokeColor(
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
        );
        setFontVariant(
            ["none", "futura", "oswald", "helvetica", "bodoni"][
            Math.floor(Math.random() * 5)
            ]
        );
    };

    return (
        <div className="monogram-pt">
            <div className="monogram-pt-container">
                <div className="monogram-pt-visual">
                    <GenerativeMonogramPT
                        armRot={armRot}
                        armBend={armBend}
                        legRot={legRot}
                        headRot={headRot}
                        strokeWidth={strokeWidth}
                        fillColor={fillColor}
                        strokeColor={strokeColor}
                    />
                </div>

                <div className="monogram-pt-info">
                    <p className="monogram-desc">
                        This experiment is a <strong>dynamic monogram</strong> created for a{" "}
                        <em>flamenco and contemporary dancer</em> who combines her artistic
                        practice with experimental projects. The parameterised shapes (head,
                        arms, legs) allow us to explore movement, expressiveness and
                        continuous variation, as a metaphor for dancing in constant
                        transformation.
                    </p>

                    {showControls && (
                        <div className="monogram-controls">
                            <label>
                                Arm bend
                                <input
                                    type="range"
                                    min="-30"
                                    max="15"
                                    value={armBend}
                                    onChange={(e) => setArmBend(+e.target.value)}
                                />
                            </label>

                            <label>
                                Arm rotation
                                <input
                                    type="range"
                                    min="-60"
                                    max="50"
                                    value={armRot}
                                    onChange={(e) => setArmRot(+e.target.value)}
                                />
                            </label>

                            <label>
                                Leg rotation
                                <input
                                    type="range"
                                    min="-45"
                                    max="45"
                                    value={legRot}
                                    onChange={(e) => setLegRot(+e.target.value)}
                                />
                            </label>

                            <label>
                                Head rotation
                                <input
                                    type="range"
                                    min="-30"
                                    max="30"
                                    value={headRot}
                                    onChange={(e) => setHeadRot(+e.target.value)}
                                />
                            </label>

                            <label>
                                Rounding (0–30%)
                                <input
                                    type="range"
                                    min="0"
                                    max="30"
                                    value={round}
                                    onChange={(e) => setRound(+e.target.value)}
                                />
                            </label>

                            <label>
                                Stroke thickness
                                <input
                                    type="range"
                                    min="0"
                                    max="6"
                                    value={strokeWidth}
                                    onChange={(e) => setStrokeWidth(+e.target.value)}
                                />
                            </label>

                            <label>
                                Fill color
                                <input
                                    type="color"
                                    value={fillColor}
                                    onChange={(e) => setFillColor(e.target.value)}
                                />
                            </label>

                            <label>
                                Stroke color
                                <input
                                    type="color"
                                    value={strokeColor}
                                    onChange={(e) => setStrokeColor(e.target.value)}
                                />
                            </label>

                            <label>
                                Typography
                                <select
                                    value={fontVariant}
                                    onChange={(e) => setFontVariant(e.target.value)}
                                >
                                    <option value="none">No Typography</option>
                                    <option value="futura">Futura</option>
                                    <option value="oswald">Oswald</option>
                                    <option value="helvetica">Helvetica</option>
                                    <option value="bodoni">Bodoni</option>
                                </select>
                            </label>
                        </div>
                    )}

                    <div className="monogram-actions">
                        <button className="button button--primary" onClick={randomize}>
                            Random generate
                        </button>
                        <button
                            className="button button--secondary"
                            onClick={() => setShowControls((prev) => !prev)}
                        >
                            {showControls ? "Hide controls" : "Show controls"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonogramCard;

