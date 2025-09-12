import React, { useRef, useEffect } from "react";
import p5 from "p5";

const GenerativeMonogramPT = ({
    armRot,
    legRot,
    headRot,
    armBend,      // flexión de brazos
    strokeWidth,
    fillColor,
    strokeColor,
}) => {
    const sketchRef = useRef();

    useEffect(() => {
        let yOffset = 0; // para la respiración

        const sketch = (p) => {
            // Paths del SVG
            const armsPath =
                "M111.12,0c23,80.54-24.91,146.91-93.84,129.92C61.3,105.89,91.71,63.79,111.12,0Z";
            const legsPath =
                "M105.75,207.61a.87.87,0,0,1-1.71.09c-5.9-19.21-7.9-25.21-10.9-39.21-6.62-30.92-7.8-55.2,13-76,9-9,18-16,33-16,14,0,30.53,9.3,38,23,4.47,8.2,4.22,21.56,0,30-7,14-18.63,20.74-30,25-16,6-25,6-37,6-1,5-.76,8-1,12-1,17,0,4-3,32Zm31.39-104.12c-9,3-20,12-26,29-2.08,5.9-1,10-1,23,10-5,17-8,27-13,5.14-2.57,13-10,18-20C158,116.83,156.14,101.49,137.14,103.49Z";
            const headPath = "M0,54.44C28.93,21.24,52.31,25.5,76.51,68.2Z";

            // Pivotes
            const pivotX = 111;
            const pivotY = 130;
            const headPivotX = 76;
            const headPivotY = 68;

            const drawSVGPath = (path) => {
                const path2D = new Path2D(path);
                p.stroke(strokeColor);
                p.strokeWeight(strokeWidth);
                p.fill(fillColor);
                p.drawingContext.fill(path2D);
                p.drawingContext.stroke(path2D);
            };

            p.setup = () => {
                // 🔹 evitar canvas duplicados
                sketchRef.current.innerHTML = "";
                p.createCanvas(320, 320).parent(sketchRef.current);
            };

            p.draw = () => {
                p.background(255);

                // Efecto respiración
                yOffset = Math.sin(p.frameCount * 0.05) * 2;

                // Centrar monograma
                const centerOffsetX = -pivotX + 160;
                const centerOffsetY = -pivotY + 160 + yOffset;

                // Piernas
                p.push();
                p.translate(pivotX + centerOffsetX, pivotY + centerOffsetY);
                p.rotate(p.radians(legRot));
                p.translate(-pivotX, -pivotY);
                drawSVGPath(legsPath);
                p.pop();

                // Brazos con rotación + flexión
                p.push();
                p.translate(pivotX + centerOffsetX, pivotY + centerOffsetY);
                p.rotate(p.radians(armRot));
                p.shearY(p.radians(armBend));
                p.translate(-pivotX, -pivotY);
                drawSVGPath(armsPath);
                p.pop();

                // Cabeza
                p.push();
                p.translate(headPivotX + centerOffsetX, headPivotY + centerOffsetY);
                p.rotate(p.radians(headRot));
                p.translate(-headPivotX, -headPivotY);
                drawSVGPath(headPath);
                p.pop();
            };
        };

        const p5Instance = new p5(sketch);
        return () => p5Instance.remove();
    }, [armRot, legRot, headRot, armBend, strokeWidth, fillColor, strokeColor]);

    return <div ref={sketchRef}></div>;
};

export default GenerativeMonogramPT;


