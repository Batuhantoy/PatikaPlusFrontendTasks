import React from 'react'

function Cards() {
    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>325</b></h4>
                        <p>Course</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>405</b></h4>
                        <p>Work Out</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>305</b></h4>
                        <p>Working Hour</p>
                    </div>
                </div>
                <div className="card">
                    <div style={{ textAlign: 'center' }}>
                        <h4><b>705</b></h4>
                        <p>Happy Client</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards