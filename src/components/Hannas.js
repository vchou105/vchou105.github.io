import React from 'react';
import HannasCreamery from '../img/HannasCreameryPreview.png';
import CateringPersona from '../img/HannasCreamery/CateringPersona.png';
import FamilyPersona from '../img/HannasCreamery/FamilyPersona.png';
import StudentPersona from '../img/HannasCreamery/StudentPersona.png';
import MoodboardA from '../img/HannasCreamery/MoodboardA.png';
import MoodboardB from '../img/HannasCreamery/MoodboardB.png';
import Sitemap from '../img/HannasCreamery/Sitemap.png';


function Hannas() {
    return (
        <div className="caseStudy">
            <div className="img-100">
                <img src={HannasCreamery} alt="Hanna's Creamery Project"/>
            </div>
            <section>
                <h2>Overview</h2>
                <h2>Introduction</h2>
                <h2>Problem</h2>
                <h2>Meeting Ali</h2>
                <h2>Anyone heard of Hanna's Creamery?</h2>
                <div className='persona img-100'>
                    <img src={StudentPersona} alt="Student persona"/>
                    <img src={FamilyPersona} alt="Family persona"/>
                    <img src={CateringPersona} alt="Catering persona"/>
                </div>
                <h2>What is the current state?</h2>
                <h2>User Flows</h2>
                <div className='img-100'>
                    <img src={Sitemap} alt="Sitemap"/>
                </div>
                <h2>Low-Fidelity Prototype</h2>
                <h2>User Testing & Challenges</h2>
                <h2>Hi-Fidelity Prototype</h2>
                <h2>Reflections</h2>
            </section>
        </div>
    )
}
export default Hannas;