import React from 'react';
import './App.css';

const languages = "uk" || "en"
const language = (navigator.language !== languages) ? "en-US" : navigator.language
const languageFile = require(`./locales/${language}.js`);
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
            <img src="https://cdn.discordapp.com/attachments/1108726298915909633/1132016724066185246/Untitled106_20230721212653.png" alt="logo" />
        </div>
      </div>
      <div className="content">
        
        <div className="cards">
            <div className="card">
                <div className="card-title">
                    {languageFile.title.links}
                </div>
                <div className="card-body" >
                    <div className="icons">
                        <a href="https://github.com/dotinto">
                            <img src="https://moondust-starlight.dx-assets.pages.dev/github-mark-white.svg" alt="" />
                        </a>
                        <a href="https://discord.com/users/445565647653699594">
                            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@dedlispace?_t=8eCouOS4D4v&_r=1">
                            <img src="https://moondust-starlight.dx-assets.pages.dev/tiktok.png" alt="" />
                        </a>
                        <a href="https://steamcommunity.com/id/dotinto/">
                            <img src="https://moondust-starlight.dx-assets.pages.dev/steam-logo-white.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    {languageFile.title.occupation}
                </div>
                <div className="card-body">
                    {languageFile.value.occupation}
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    Specialization
                </div>
                <div className="card-body">
                    Fullstack Development
                </div>
            </div>
            <div className="card f">
                <div className="card-title">
                    Languages Spoken
                </div>
                <div className="card-body" >
                    <img src="https://moondust-starlight.dx-assets.pages.dev/ukraine.png"  alt="" />
                    <img src="https://moondust-starlight.dx-assets.pages.dev/russia.png" style={{marginLeft: "5%"}} alt="" />
                    <img src="https://moondust-starlight.dx-assets.pages.dev/united-states.png" style={{marginLeft: "5%"}} alt="" />
                    <img src="https://moondust-starlight.dx-assets.pages.dev/poland.png" style={{marginLeft: "5%"}} alt="" />
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    Birthday
                </div>
                <div className="card-body">
                    Dec 4
                </div>
            </div>
        </div>
        
      </div>
    <div className="footer">
        <div className="mobile">
            <div className="github-repo">
                <a href="https://github.com/dotinto/dotinto">
                    <img src="assets/github-mark-white.svg" alt="" />
                </a>
            </div>
        </div>
        <div className="desktop">
            <div className="github-repo">
                <a href="https://github.com/dotinto/dotinto">
                    <img src="assets/github-mark-white.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
