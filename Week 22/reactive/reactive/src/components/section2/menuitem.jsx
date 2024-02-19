
import React from 'react'

function menuitem() {
    return (
        <div>
            <div className="bg">
                <p style={{ height: "100px" }}></p>
                <h2> OUR CLASSES</h2>

                <div className="orangeLine"></div>

                <p style={{ textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Deserunt eaque beatae deleniti quibusdam magni temporibus recusandae
                    dolor expedita consequatur aperiam?</p>

                <div className="btn-container">
                    <button className="menuItem" onClick={() => selectButton(1)} data-id="Yoga" id="yoga">Yoga</button>
                    <button className="menuItem" onClick={() => selectButton(2)} data-id="Group" id="group">Group</button>
                    <button className="menuItem" onClick={() => selectButton(3)} data-id="Solo" id="solo">Solo</button>
                    <button className="menuItem" onClick={() => selectButton(4)} data-id="Streching" id="streching">Streching</button>
                </div>

                <div className="sport">
                    <div className="text-container"></div>
                    <div className="text-container-image-2"></div>
                </div>
            </div>
        </div>
    )
}

export default menuitem