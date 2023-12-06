import './welcome-section.css'
import '../keyframes.css'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <div className="container">
                <div className="skill-cards">
                    <div className="skill-card">
                        <img src={html} alt="html"/>
                    </div>
                    <div className="skill-card">
                        <img src={js} alt="js"/>
                    </div>
                    <div className="skill-card">
                        <img src={react} alt="react"/>
                    </div>
                    <div className="skill-card">
                        <img src={ts} alt="ts"/>
                    </div>
                    <div className="skill-card">
                        <img src={css} alt="css"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;