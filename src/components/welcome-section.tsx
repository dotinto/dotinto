import React, {useEffect} from 'react'
import './welcome-section.css'
import '../keyframes.css'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'

function WelcomeSection() {
    useEffect(() => {
        const phrase_view = document.querySelector("#phrase-view")
        const phrases = [
            "&lt;span&gt;Hello, world!&lt;/span&gt;",
            "content: 'Hello, world!'",
            "console.log('Hello, world!')",
            "return (&lt;div&gt;Hello, world!&lt;/div&gt;)"
        ]
        let i = 0
        function phrases_loop() {
            (phrase_view !== null) ? phrase_view.innerHTML = phrases[i] : console.log("");
            (i == phrases.length - 1) ? i = 0 : i++;
        }
        phrases_loop();
        setInterval(phrases_loop, 1000)
    })
    return (
        <div className="welcome-section">
            <div className="container">
                <div className="main-label">
                    <span id="phrase-view">Hello, world!</span>
                </div>
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