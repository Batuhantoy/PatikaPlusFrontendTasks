import React from 'react'

function Trainers() {
    return (
        <div>

            <div className="bestTrainers">
                <h2> OUR BEST
                    TRAINERS</h2>
                <div className="orangeLine">
                </div>
                <p>Lorem ipsum dolor, sit
                    amet
                    consectetur adipisicing elit. Deserunt eaque beatae deleniti quibusdam magni temporibus
                </p>

                <div className="trainerImages">


                    <div className="trainers">
                        <img src="assets/trainer1.jpg" alt="" />

                        <div className="team-content">
                            <h3 className="title">Jane Doe</h3>
                            <span className="post">Cardio Trainer</span>
                        </div>
                    </div>


                    <div className="trainers">
                        <img src="assets/trainer2.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">David Zoe</h3>
                            <span className="post">Cardio Trainer</span>
                        </div>
                    </div>



                    <div className="trainers">
                        <img src="assets/trainer3.jpg" alt="" />
                        <div className="team-content">
                            <h3 className="title">Jane Koe</h3>
                            <span className="post">Lead Trainer</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Trainers