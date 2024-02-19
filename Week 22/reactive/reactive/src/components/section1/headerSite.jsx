import React from 'react'

function HeaderSite() {
    return (
        <div>
            <header>
                <div className="navbar" id="navbar">

                    <a href="#home">
                        <img className="site-logo" src="assets/logo.png" alt="logo" />
                    </a>
                    <nav>
                        <div className="nav-wrapper">
                            <div className="hamburger-menu" id="hamburger-menu">&#9776;</div>
                            <ul className="navLinks" id="menu">
                                <li><a href="#home" className="home">Home</a></li>
                                <li><a href="#classes" className="classes">Classes</a></li>
                                <li><a href="#trainer" className="trainer">Trainer</a></li>
                                <li><a href="#review" className="review">Review</a></li>
                                <li><a href="#contact" className="contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default HeaderSite;