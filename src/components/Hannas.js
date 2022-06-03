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
                <p>How can we make use of the variety of products that Hanna's Creamery offers, from gelato to candies and to acai bowls, so that we create a more engaging website that attracts more site visitors for in-store stays and online order in a family-friendly and elegant manner?</p>

                <h2>Meeting Ali</h2>
                <p>We met with Ali, the owner of Hanna's Creamery, to learn more about what Hanna's Creamery provides, how they're unique, and what ideal environment he would like so that we could come up with a client list to work with as we redesign their website.</p>
                <p>Below are some of the priorities we came up with:</p>
                <ul>
                    <li>Align branding with family-friendly, quality product values</li>
                    <li>Spotlight store's values and mission on landing and about page</li>
                    <li>Increase online traffic by establishing a cohesive network of brand elements</li>
                </ul>
                <h2>Anyone heard of Hanna's Creamery?</h2>
                <p>After surveying in-store customers, we came up with 3 user groups: <span className="persona-highlight">student</span>, <span className='persona-highlight'>family</span>, and <span className='persona-highlight'>catering</span> persona. </p>
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
                <p>We focused on building the mobile version as users are more likely to be searching up store details like menu and pricings on the go. From our user research findings, people don't go out of their way to look up ice cream shops on their computer.</p>
                {/** Mobile */}
                <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEVPJ48hFVJAaGm5NIPvrng%2FCOGS-187B-Hanna's%3Fnode-id%3D137%253A3346%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D137%253A3346%26show-proto-sidebar%3D1"
                    allowfullscreen></iframe>
                {/** Desktop */}
                <p>Click <a href="https://www.figma.com/proto/EVPJ48hFVJAaGm5NIPvrng/COGS-187B-Hanna's?node-id=251%3A5889&scaling=scale-down&page-id=251%3A4414&starting-point-node-id=251%3A5889"> here</a> to
                    view the <i>desktop</i> version of our lo-fi prototype!
                </p>
                {/* <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" 
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEVPJ48hFVJAaGm5NIPvrng%2FCOGS-187B-Hanna's%3Fnode-id%3D251%253A5889%26scaling%3Dscale-down%26page-id%3D251%253A4414%26starting-point-node-id%3D251%253A5889" 
                    allowfullscreen></iframe> */}

                <h2>User Testing & Challenges</h2>
                <ul>
                    <li>Visual identity needs improvement</li>
                    <li>Moodboard of store images on landing page had varying opinions</li>
                    <li>Product page too congested - need to display menu in a digestible manner</li>
                    <li>Catering form is too bland</li>
                </ul>
                <h2>Hi-Fidelity Prototype</h2>
                <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FEVPJ48hFVJAaGm5NIPvrng%2FCOGS-187B-Hanna's%3Fnode-id%3D544%253A11844%26scaling%3Dscale-down%26page-id%3D544%253A10775%26starting-point-node-id%3D544%253A11844"
                    allowfullscreen></iframe>
                <p>Click <a href="https://www.figma.com/proto/EVPJ48hFVJAaGm5NIPvrng/COGS-187B-Hanna's?node-id=949%3A16563&scaling=scale-down&page-id=949%3A16563&starting-point-node-id=949%3A18750"> here</a> to
                    view the <i>desktop</i> version of our hi-fi prototype!</p>
                <h2>Reflections</h2>
                <ul>
                    <li>Since our client was very busy, we had to make decisions as a team in order to move forward. This was my first experience where I really felt that we, as a team, made <i>holistic decisions</i> that ultimately carried out well.</li>
                    <li>Though this was a class project, I learned to just take the <i>initiative</i> and do more than what may be required in our guidelines. Rather than waiting for our client to respond and see if we're going in the desired direction, we had to be proactive in sending updates and meeting to discuss how we could solve the pain points.</li>
                    <li>This was my first project reaching out to a local store ourselves and successfully communicating with the owner to make an impactful project.</li>
                    <li>It was a stressful yet memorable experience applying what we learned in real life. My most memorable takeaway:</li>
                    <ul>
                        <li>If we want to make changes to our surrouning environment, we really can do so! </li>
                        <li>It doesn't hurt reaching out to local entities and seeing if there's <i>anything</i> you can help with!!</li>
                        <li>By simply reaching out, we can form impactful connections with our limited skills and experiences :)</li>
                    </ul>
                </ul>
            </section>
        </div>
    )
}
export default Hannas;