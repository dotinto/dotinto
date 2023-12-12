import './welcome-section.css'
import '../keyframes.css'

import { useEffect } from 'react'

import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'

function WelcomeSection() {
    useEffect(() => {
        const anchorToSkills: HTMLDivElement | null = document.querySelector(".welcome-section .container .main-labels button");
        (anchorToSkills !== null ) ? anchorToSkills.onclick = () => {
            (window.location.href.split("#")[1] === undefined) ? window.location.href = "#skills"
            : (window.location.href.split("#")[1] === "skills") ? window.location.href = window.location.href.split("#")[0] += "#roadmap"
            : window.location.href = window.location.href.split("#")[0]
        } : console.log(null);
    })
    return (
        <div className="welcome-section" id="welcome">
            <div className="container">
                <div className="main-labels">
                    <div className="title">
                        Welcome to my hub
                    </div>
                    <article>
                        Hey, I'm an indie developer. I write dynamic websites in <span className="react-glowing">React</span> and layout templates from <span className="figma-glowing">Figma</span>. Here you can see my Hard skills and projects from my <a rel="noreferrer" target="_blank" href="https://github.com/dotinto" className="github-glowing">GitHub</a>.
                    </article>
                    <button>scroll below</button>
                </div>
                <div className="skill-cards">
                    <div className="skill-card">
                        <img src={js} alt="js"/>
                    </div>
                    <div className="skill-card">
                        <img src={react} alt="react"/>
                    </div>
                    <div className="skill-card">
                        <img src={ts} alt="ts"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;