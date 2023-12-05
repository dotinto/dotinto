import React from 'react';
import './header.css'

import steam from "../assets/steam.png"
import xbox from "../assets/xbox.png"
import discord from "../assets/discord.png"
import github from "../assets/github.png"
import logo from "../assets/dxtintx_white_transparent.png"

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div>
                    <img src={logo} alt="logo" width="123" height="62" className="logo" />
                </div>
                <div className="navbar">
                    <div className="tabs">
                        <a href="./" className="tab">Working for</a>
                        <a href="./" className="tab">Hard skills</a>
                        <a href="./" className="tab">Roadmap</a>
                    </div>
                    <div className="socials">
                        <a><img src={github} alt="github" /></a>
                        <a><img src={discord} alt="discord" /></a>
                        <a><img src={steam} alt="steam" /></a>
                        <a><img src={xbox} alt="xbox" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;