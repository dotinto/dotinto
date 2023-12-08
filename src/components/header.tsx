import './header.css'
import '../keyframes.css'

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
                        <a href="./" className="tab">Skills</a>
                        <a href="./" className="tab">Roadmap</a>
                    </div>
                    <div className="socials">
                        <a href="https://github.com/dotinto" rel='noreferrer' target="_blank"><img src={github} alt="github" /></a>
                        <a href="https://discord.com/users/445565647653699594" rel='noreferrer' target="_blank"><img src={discord} alt="discord" /></a>
                        <a href="https://steamcommunity.com/id/dotinto/" rel='noreferrer' target="_blank"><img src={steam} alt="steam" /></a>
                        <a href="https://account.xbox.com/en-us/profile?gamertag=dotinto5775" rel='noreferrer' target="_blank"><img src={xbox} alt="xbox" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;