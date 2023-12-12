import './skills-section.css'
import '../index.css'

import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import ts from '../assets/ts.png'
import js from '../assets/js.png'
import electron from '../assets/electron.png'

function SkillsSection() {
    return (
        <div id="skills" className="skills-section">
            <div className='title'>
                <h1 className="title">
                    Skills
                </h1>
            </div>
            <div className="container">
                <div className="box">
                    <div><img src={html} alt="" /></div>
                </div>
                <div className="box">
                    <div><img src={css} alt="" /></div>
                </div>
                <div className="box">
                    <div><img src={js} alt="" /></div>
                </div>
                <div className="box">
                    <div><img src={ts} alt="" /></div>
                </div>
                <div className="box">
                    <div><img src={electron} alt="" /></div>
                </div>
                <div className="box">
                    <div><img src={react} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;