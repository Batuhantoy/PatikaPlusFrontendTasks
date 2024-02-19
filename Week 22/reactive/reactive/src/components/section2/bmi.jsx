import React from 'react'

function bmi() {
    return (
        <div>
            <div className="bmi">
                <div className="bmi-textcontainer">
                    <h3>BMI Calculator</h3>
                    <p className="text5" style={{ color: "#5a5a5a" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita ad odit similique a aperiam repellendus fugiat, fugit i consequuntur, molestias repellendus.</p>
                    <p className="text5" style={{ color: "#5a5a5a" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita ad odit similique a aperiam repellendus fugiat, fugit i consequuntur, molestias repellendus.</p>

                    <div className="bmi-input-settings">
                        <div className="bmi-input">
                            <input type="text" id="boy" name="boy" placeholder="Your Height" className="bmi-input-element" />
                            <label htmlFor="boy">cm</label>
                        </div>
                        <div className="bmi-input">
                            <input type="text" id="kilo" name="kilo" placeholder="Your Weight" className="bmi-input-element" />
                            <label htmlFor="kilo">kg</label>
                        </div>
                    </div>
                </div>
                <div className="divdir">
                    <p className="bmi-image-p">Your BMI</p>
                    <img src="assets/bmi-index.jpg" alt="bmi" />
                    <div className="divdir2"></div>
                </div>
            </div>
        </div>
    )
}

export default bmi