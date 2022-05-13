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
                <img src={HannasCreamery} alt="Hanna's Creamery Project" />
            </div>
            <section>
                <h2>Overview</h2>
                <div>
                    <p>Reaching out to Hanna's Creamery & Cafe for our web design course, we redesigned their products to emulate a family-friendly and quality vibe for their variety of services.</p>
                    <ul>
                        <li>w/ Michelle Tenin, Junhee Chung, Yumei Feng</li>
                        <li>Jan - Mar 2022 (10 weeks)</li>
                    </ul>
                </div>
                <h2>Introduction</h2>
                <div>
                    <p>Hanna's Creamery & Cafe is a sweet shop located in the UTC mall in La Jolla, San Diego. The shop sells a variety of products including freshly made gelato, ice cream, blended treats, cookies, candy, coffee, and baked goods.</p>
                    <p>The owner named the shop after his daughter, Hanna - this was one of our sources of inspirations for any future branding work.</p>
                </div>
                <h2>Problem</h2>
                <p>Most gelato or ice-cream stores only offer a few different types of products.</p>
                <p>How can we make use of the variety of prodcuts that Hanna's Creamery offers, from gelato to candies and to acai bowls, so that we create a more engaging website that attracts more site visitors for in-store stays and online order in a family-friendly and elegant manner?</p>
                
                <h2>Meeting Ali</h2>
                <h2>Anyone heard of Hanna's Creamery?</h2>
                <p>After surveying in-store customers, we came up with 3 user groups: student, family, and catering persona. </p>
                <div className='persona img-100'>
                    <img src={StudentPersona} alt="Student persona" />
                    <img src={FamilyPersona} alt="Family persona" />
                    <img src={CateringPersona} alt="Catering persona" />
                </div>
                <h2>What is the current state?</h2>
                <p>We interviewed around 10 people, roughly 3 per persona, asking how and why they go to dessert shops, whether they know about Hanna's Creamery, and their opinions on Hanna's Creamery's current website.</p>
                <h2>User Flows</h2>
                <div className='img-100'>
                    <img src={Sitemap} alt="Sitemap" />
                </div>
                <h2>Low-Fidelity Prototype</h2>
                <h2>User Testing & Challenges</h2>
                <ul>
                    <li>Visual identity needs improvement</li>
                    <li>Moodboard of store images on landing page had varying opinions</li>
                    <li>Product page too congested - need to display menu in a digestible manner</li>
                    <li>Catering form is too bland</li>
                </ul>
                <h2>Hi-Fidelity Prototype</h2>
                <h2>Reflections</h2>
            </section>
        </div>
    )
}
export default Hannas;