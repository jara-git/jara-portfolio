import React, { useState } from "react";
import MonogramPT from "./MonogramPT";
import "./MonogramCard.scss";

const MonogramCard = () => {
    const [headX, setHeadX] = useState(140);
    const [headY, setHeadY] = useState(60);
    const [armRot, setArmRot] = useState(0);
    const [armCurve, setArmCurve] = useState(0);
    const [legRot, setLegRot] = useState(0);
    const [bodyX, setBodyX] = useState(138);
    const [bodyY, setBodyY] = useState(100);
    const [round, setRound] = useState(8);
    const [strokeWidth, setStrokeWidth] = useState(2);
    const [fillColor, setFillColor] = useState("#0a0a0a");
    const [strokeColor, setStrokeColor] = useState("#f0e8e6ff");
    const [fontVariant, setFontVariant] = useState("none");
    const [showControls, setShowControls] = useState(true);

    const randomize = () => {
        setHeadX(Math.floor(Math.random() * 101) + 100);
        setHeadY(Math.floor(Math.random() * 91) + 30);
        setArmRot(Math.floor(Math.random() * 41) - 20);
        setLegRot(Math.floor(Math.random() * 26) - 10);
        setBodyX(Math.floor(Math.random() * 101) + 100);
        setBodyY(Math.floor(Math.random() * 61) + 80);
        setRound(Math.floor(Math.random() * 31));
        setStrokeWidth(Math.floor(Math.random() * 6));
        setFillColor(
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
        );
        setStrokeColor(
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
        );
        setArmCurve(Math.floor(Math.random() * 51));
        setFontVariant(
            ["none", "futura", "oswald", "helvetica", "bodoni"][
            Math.floor(Math.random() * 5)
            ]
        );
    };

    return (
        <div className="monogram-pt">
            <div className="monogram-pt-container">
                {/* Bloque visual del monograma */}
                <div className="monogram-pt-visual">
                    <MonogramPT
                        headX={headX}
                        headY={headY}
                        armRot={armRot}
                        armCurve={armCurve}
                        legRot={legRot}
                        bodyX={bodyX}
                        bodyY={bodyY}
                        round={round}
                        strokeWidth={strokeWidth}
                        fillColor={fillColor}
                        strokeColor={strokeColor}
                        fontVariant={fontVariant}
                    />
                </div>

                {/* Bloque info: descripción, controles y botones */}
                <div className="monogram-pt-info">
                    <p className="monogram-desc">
                        This experiment is a <strong>dynamic monogram</strong> created for a{" "}
                        <em>flamenco and contemporary dancer</em> who combines her artistic
                        practice with experimental projects. The parameterised shapes (head,
                        arms, legs and body) allow us to explore movement, expressiveness and
                        continuous variation, as a metaphor for dancing in constant
                        transformation.
                    </p>

                    {showControls && (
                        <div className="monogram-controls">
                            <label>
                                Head X
                                <input
                                    type="range"
                                    min="100"
                                    max="200"
                                    value={headX}
                                    onChange={(e) => setHeadX(+e.target.value)}
                                />
                            </label>
                            <label>
                                Head Y
                                <input
                                    type="range"
                                    min="30"
                                    max="120"
                                    value={headY}
                                    onChange={(e) => setHeadY(+e.target.value)}
                                />
                            </label>
                            <label>
                                Arm bend
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value={armCurve}
                                    onChange={(e) => setArmCurve(+e.target.value)}
                                />
                            </label>
                            <label>
                                Arm rotation
                                <input
                                    type="range"
                                    min="-20"
                                    max="20"
                                    value={armRot}
                                    onChange={(e) => setArmRot(+e.target.value)}
                                />
                            </label>
                            <label>
                                Leg rotation
                                <input
                                    type="range"
                                    min="-10"
                                    max="15"
                                    value={legRot}
                                    onChange={(e) => setLegRot(+e.target.value)}
                                />
                            </label>
                            <label>
                                Body X
                                <input
                                    type="range"
                                    min="100"
                                    max="200"
                                    value={bodyX}
                                    onChange={(e) => setBodyX(+e.target.value)}
                                />
                            </label>
                            <label>
                                Body Y
                                <input
                                    type="range"
                                    min="80"
                                    max="140"
                                    value={bodyY}
                                    onChange={(e) => setBodyY(+e.target.value)}
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

