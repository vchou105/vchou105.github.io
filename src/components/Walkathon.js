import React from 'react';
import VirtualWalkathon from '../img/VirtualWalkathonPreview.png';
import finalPrototype from '../img/VirtualWalkathon/WalkathonFinal.png';
import "../css/Project.css";

function Walkathon() {
    return (
        <div className="caseStudy">
            <div className="img-100">
                <img src={VirtualWalkathon} alt="Virtual Walkathon Project" />
            </div>
            <h2>Overview</h2>
            <div>
                <p>Under Design for America at UCSD, my team and I structured a virtual walkathon iternary and website for <a href="https://latinascontracancer.org/" className='caida'>Latinas Contra Cancer</a>.</p>
                <ul>
                    <li>w/ Julia Chu, Kazuha Miyoshi, Rainee Pei, Megna Anand</li>
                    <li>Oct - Dec 2020 (7 weeks)</li>
                </ul>
            </div>
            
            <h2>Introduction</h2>
            <div>
                <p>Creating an inclusive health care system around cancer issues for the underserved Latino population, Latinas Contra Cancer is a non-profit organization that hosts an annual walkathon on Mother’s Day where the community walks <em>in memory for their loved ones, for equity, for health, and for each other</em>.</p>
            </div>
            
            <h2>Problem</h2>
            <p>How might we design a virtual walkathon that fosters more support and awareness in our community?</p>
            
            <h2>Solution</h2>
            <p>A one-day virtual event with workshops and speakers sharing topics on inequality, racism, and support to create a welcoming community while fundraising through registration packages.</p>
            
            <h2>Background</h2>
            
            <h2>So... How do virtual walkathons work?</h2>
            <p>With no clue to how virtual walkathons engage with participants, we referenced the few virtual events we were able to find, such as <i>UCSD’s Triton 5K</i> and <a href="https://www.baa.org/124th-boston-marathon-be-held-virtually"><i>Boston Marathon</i></a>, which was held through an app that allows participants to be updated with the marathon schedule and notices.</p>
            
            <h2>Understanding our audience</h2>
            <p>To even understand people's experiences in <i>virtual environments</i>, we:</p>
            <ul>
                <li>Surveyed <b>70+</b> respondents who have attended events in a virtual setting with ages ranging from <b>{"\<"} 18 to 50+</b></li>
                <li>Interviewed <b>1 primary stakeholder</b>, Nora, who has attended the walkathon in the past and heavily involved in the organization</li>
            </ul>
            
            <h2>We learned to...</h2>
            <ul>
                <li>Focus on the <i>collectiveness of community</i> → getting to know and hear stories from the community + seeing the impact of the walk</li>
                <li>Raise awareness for LCC and injustices in the health system, specifically in San Jose</li>
                <li>Incentives may encourage outside participation</li>
                <li>Although virtual, want to still feel a sense of community and interaction with others</li>
            </ul>
            
            <h2>How exactly will our virtual walkathon work? 3-Day vs 1-Day Itineraries</h2>
            <p>To design a virtual walkathon that allows our target audience to make the most out of this opportunity while feeling a sense of community, we ideated a 3-day version and a 1-day version event</p>
            <h3>3-Day Itinerary</h3>
            <h3>1-Day Itinerary</h3>
            
            <h3>Itinerary Feedback</h3>
            
            <h2>Gotta make use of this big event to fundraise!</h2>
            <p>In light of our research takeaways, we wanted to raise awareness of LCC’s mission while raising participation incentives through:</p>
            <ul>
                <li>Participation packages</li>
                <li>Raffle tickets</li>
                <li>General Fundraising</li>
            </ul>

            <h2>Low/Mid-Fidelity Prototype</h2>
            <ul>
                <li>We each wireframed our own versions of the virtual walkathon page and consolidated features and layouts we liked from our prototypes to compose a slightly more polished mid-fidelity prototype</li>
                <li>Since we weren’t sure what combination of features work better, we made two different versions to test out</li>
            </ul>
            <a></a>

            <h2>A/B Testing</h2>
            <ul>
                <li>Prototype B with clear sections has a cleaner look and might be easier to follow</li>
                <li>Color separations on prototype B were more enjoyable</li>
                <li>Better to have donate button at the top since they rely on donation</li>
                <li>Liked the event information laid out horizontally and the bundles laid out vertically</li>
            </ul>

            <h2>Final Prototype</h2>
            <img src={finalPrototype} alt="Virtual Walkathon Website Final Prototype" />
            
            <h2>Reflection</h2>
            <ul>
                <li>This was my first exposure to the design process and I had previously not known A/B testing was even a thing! It was very cool testing the comparisons and I had a lot of fun seeing what user testing is actually like!</li>
                <li>I found it interesting how we not only designed a digital experience but also a program for a non-profit organization.</li>
                <li> Even though this was our first design project for 3/5 teammates, I learned a lot about prototyping and wireframing from our varying skill levels, especially being motivated by my skilled teammate!</li>
                <li>Unlike most UI/UX design projects, I’m glad this was my first project as I was able to see how design thinking can really be applied anywhere in our lives</li>
                <li>Despite challenges maintaining contact with our stakeholder, our team was able to adapt our decisions to stay on schedule </li>
            </ul>

        </div>
    )
}
export default Walkathon;