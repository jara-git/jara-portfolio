import React from "react";
import MonogramCard from "./components/MonogramCard";
import "./Playground.scss";

const Playground = () => {
    return (
        <div className="playground-page">
            <h1>Playground – Experiments</h1>

            <div className="playground-grid">
                {/* Each experiment is a "card" */}
                <MonogramCard />
                {/* more experiments to come... */}
            </div>
        </div>
    );
};

export default Playground;

