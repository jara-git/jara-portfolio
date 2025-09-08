// MonogramPT.jsx
import React, { useRef, useEffect } from "react";

const MonogramPT = ({
    headX,
    headY,
    armRot,
    armCurve,
    legRot,
    bodyX,
    bodyY,
    round,
    strokeWidth,
    fillColor,
    strokeColor,
    fontVariant,
}) => {
    const headRef = useRef(null);
    const armRef = useRef(null);
    const legRef = useRef(null);
    const bodyRef = useRef(null);

    // Función que reproduce la lógica del CodePen
    const updateShapes = () => {
        const head = headRef.current;
        const arm = armRef.current;
        const leg = legRef.current;
        const body = bodyRef.current;

        if (!head || !arm || !leg || !body) return;

        // Cabeza
        head.setAttribute("cx", headX);
        head.setAttribute("cy", headY);
        head.setAttribute("fill", fillColor);
        head.setAttribute("stroke", strokeColor);
        head.setAttribute("stroke-width", strokeWidth);

        // Brazo curvable
        const x = 100;
        const y = 100;
        const width = parseInt(arm.getAttribute("data-width") || 120);
        const height = 18;
        const curve = armCurve;
        const cpY = curve;

        const armPath = `M${x},${y} 
        C${x + width / 3},${y + cpY} ${x + 2 * width / 3},${y + cpY} ${x + width},${y} 
        L${x + width},${y + height} 
        C${x + 2 * width / 3},${y + height + cpY} ${x + width / 3},${y + height + cpY} ${x},${y + height} Z`;

        arm.setAttribute("d", armPath);
        arm.setAttribute("transform", `rotate(${armRot},100,100)`);
        arm.setAttribute("fill", fillColor);
        arm.setAttribute("stroke", strokeColor);
        arm.setAttribute("stroke-width", strokeWidth);

        // Pierna
        leg.setAttribute("x", 120);
        leg.setAttribute("y", 100);
        leg.setAttribute("width", parseInt(leg.getAttribute("data-width") || 18));
        leg.setAttribute("height", 150);
        leg.setAttribute("rx", round);
        leg.setAttribute("transform", `rotate(${legRot},120,100)`);
        leg.setAttribute("fill", fillColor);
        leg.setAttribute("stroke", strokeColor);
        leg.setAttribute("stroke-width", strokeWidth);

        // Barriga (body)
        let bWidth = parseInt(body.getAttribute("data-width") || 60);
        let bRadius = parseInt(body.getAttribute("data-radius") || 30);
        body.setAttribute("d", `M ${bodyX} ${bodyY} h${bWidth} a${bRadius} ${bRadius} 0 0 1 0 60 h-${bWidth} z`);
        body.setAttribute("fill", fillColor);
        body.setAttribute("stroke", strokeColor);
        body.setAttribute("stroke-width", strokeWidth);

        // Tipografía base (simula ancho de elementos)
        switch (fontVariant) {
            case "futura":
                arm.setAttribute("data-width", 140);
                leg.setAttribute("data-width", 20);
                body.setAttribute("data-width", 70);
                body.setAttribute("data-radius", 35);
                break;
            case "oswald":
                arm.setAttribute("data-width", 110);
                leg.setAttribute("data-width", 14);
                body.setAttribute("data-width", 55);
                body.setAttribute("data-radius", 25);
                break;
            case "helvetica":
                arm.setAttribute("data-width", 128);
                leg.setAttribute("data-width", 18);
                body.setAttribute("data-width", 65);
                body.setAttribute("data-radius", 28);
                break;
            case "bodoni":
                arm.setAttribute("data-width", 150);
                leg.setAttribute("data-width", 10);
                body.setAttribute("data-width", 80);
                body.setAttribute("data-radius", 40);
                break;
            default:
                arm.setAttribute("data-width", 120);
                leg.setAttribute("data-width", 18);
                body.setAttribute("data-width", 60);
                body.setAttribute("data-radius", 30);
                break;
        }
    };

    useEffect(() => {
        updateShapes();
    }, [headX, headY, armRot, armCurve, legRot, bodyX, bodyY, round, strokeWidth, fillColor, strokeColor, fontVariant]);

    return (
        <svg viewBox="0 0 320 300">
            <g id="all">
                <circle ref={headRef} r="20" />
                <path ref={armRef} />
                <rect ref={legRef} height="150" />
                <path ref={bodyRef} />
            </g>
        </svg>
    );
};

export default MonogramPT;



