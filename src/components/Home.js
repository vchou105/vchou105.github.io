import { Link, useNavigate } from 'react-router-dom';
import "../css/Home.css";

function Home() {

    return (
        <div className="landing">
            <h1>Welcome!👋</h1>
            <div className="intro content">
                <div className='cols'>
                    <p className="">I'm Vicky, a cognitive science student from <strong>UC San Diego</strong> ('23) interested in exploring the design and development behind meaningful user experiences.
                    <br/><br/>
                    I'm currently an <a href="https://beta.nsf.gov/funding/opportunities/research-experiences-undergraduates-reu">
                        REU</a> web developer intern at <a href="https://www.caida.org/" className='caida'>
                            Center for Applied Internet Data Analysis</a> (CAIDA).
                    </p>
                   
                </div>
                <p>Besides learning, working, and volunteering, I also love</p>
                    <ul>
                        <li>badminton🏸</li>
                        <li>cookie butter🤤🐽</li>
                        <li>eating too many sweets🥞🥐🍩🍰🍦</li>
                        <li>corgi butts! 🍞🐶</li>
                    </ul>
                    {/* <span>My hobbies summed up in 3 emojis:</span> */}                
            </div>
            <div className="experience">
                Featuring experiences: 
                <ul>
                    <li>CAIDA's <a href="https://catalog.caida.org" className='caida'>catalog</a></li>
                    <li><a href="https://cssa-ucsd.org/" className='cssa'>Cognitive Science Student Association</a></li>
                    <li>CodePath</li>
                    <li>Design for America...</li>
                </ul>
                <p className='content'>Coming Soon!! I would love to chat about my experiences - reach me at <a className="email" href="mailto:v2chou@ucsd.edu">v2chou@ucsd.edu</a> :)</p>
            </div>
        </div>
    )
}

export default Home;