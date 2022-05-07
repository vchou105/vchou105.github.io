import React from 'react';
import HannasCreamery from '../img/HannasCreameryPreview.png';


function Hannas() {
    return (
        <div className="caseStudy">
            <div className="caseStudy-hero">
                <img src={HannasCreamery} alt="Hanna's Creamery Project"/>
            </div>
            <section>
                <h2>Overview</h2>
                <h2>Introduction</h2>
                <h2>Problem</h2>
                <h2>Meeting Ali</h2>
                <h2>Anyone heard of Hanna's Creamery?</h2>
                <h2>What is the current state?</h2>
                <h2>User Flows</h2>
                <h2>Low-Fidelity Prototype</h2>
                <h2>User Testing & Challenges</h2>
                <h2>Hi-Fidelity Prototype</h2>
                <h2>Reflections</h2>
            </section>
        </div>
    )
}
export default Hannas;