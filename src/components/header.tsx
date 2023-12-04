import React from 'react';
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src="logo.png" className="logo" />
                <div className="navbar">
                    <div className="tabs">
                        <span className="tab">Stories</span>
                        <span className="tab">Wave</span>
                        <span className="tab">Contact</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;