import React from 'react';
import VirtualWalkathon from '../img/VirtualWalkathonPreview.png';
import finalPrototype from '../img/VirtualWalkathon/WalkathonFinal.png';
import "../css/Project.css";

function Walkathon() {
    return (
        <div className="caseStudy">
            <div className="caseStudy-hero">
                <img src={VirtualWalkathon} alt="Virtual Walkathon Project"/>
                {/* <img src={finalPrototype} /> */}
            </div>
            <h2>Overview</h2>
            <h2>Introduction</h2>
            <h2>Problem</h2>
            <h2>Solution</h2>
            <h2>Background</h2>
            <h2>So... How do virtual walkathons work?</h2>
            <h2>Understanding our users</h2>
            <h2>We learned to...</h2>
            <h2>How exactly will our virtual walkathon work? 3-Day vs 1-Day Itineraries</h2>
            <h3>3-Day Itinerary</h3>
            <h3>1-Day Itinerary</h3>
            <h3>Itinerary Feedback</h3>
            <h2>Gotta make use of this big event to fundraise!</h2>
            <h2>Mid-Fidelity Prototype</h2>
            <h2>A/B Testing</h2>
            <h2>Final Prototype</h2>
            <h2>Reflection</h2>
        </div>
    )
}
export default Walkathon;