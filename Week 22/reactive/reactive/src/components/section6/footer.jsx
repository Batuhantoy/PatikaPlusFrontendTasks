import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <img src="assets/logo.png" alt="Logo" />
                </div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, asperiores!orem ipsum dolor sit,
                        amet consectetur adipisicing elit. Tempore, amet consectetur adipisicing elit. Tempore, amet
                        consectetur adipisicing elit. Tempore, amet consectetur adipisicing elit. Tempore, asperiores!</p>
                </div>
                <div className="section-group">
                    <div className="sections">
                        <h3>Information</h3>
                        <ul className="titles">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Classes</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="sections">
                        <h3>Helpful Links</h3>
                        <ul className="titles">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;