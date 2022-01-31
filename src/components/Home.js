import { Link, useNavigate } from 'react-router-dom';
import "../css/Home.css";

function Home() {

    return (
        <div className="landing">
            <h1>Welcome!👋</h1>
            <div className="intro">
                <div className='cols'>
                    <p className="">I'm Vicky, a cognitive science student from <strong>UC San Diego</strong> ('23) interested in exploring the design and development behind meaningful user experiences.
                    <br/><br/>
                    I'm currently an <a href="https://beta.nsf.gov/funding/opportunities/research-experiences-undergraduates-reu">
                        REU</a> web developer intern at <a href="https://www.caida.org/" className='caida'>
                            <strong>Center for Applied Internet Data Analysis</strong></a> (CAIDA).
                    </p>
                   
                </div>
                <p>Besides learning, working, and volunteering, I also love:
                    <ul>
                        <li>badminton🏸</li>
                        <li>cookie butter🤤🐽</li>
                        <li>eating too many sweets🥞🥐🍩🍰🍦</li>
                        <li>corgi butts! 🍞🐶</li>
                    </ul>
                    {/* <span>My hobbies summed up in 3 emojis:</span> */}
                </p>
            </div>
            <div className="experience">
                Experiences: CAIDA, CodePath, Design for America, Latinas Contra Cancer
                
            </div>
        </div>
    )
}

export default Home;