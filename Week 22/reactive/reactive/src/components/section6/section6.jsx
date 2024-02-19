import React from 'react';
import Footer from './footer';

function Section6() {
    return (
        <section id="contact">
            <div className="contact-us">
                <h2> CONTACT US</h2>
                <div className="orangeLine"></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deseatae deleniti quibusdam magni temporibus</p>
                <div className="flex-container">
                    <div className="appointment-form">
                        <div className="info1">
                            <h3 style={{ fontSize: '20px' }}>Mobile Number</h3>
                            <h3 style={{ fontSize: '20px' }}>E-Mail Adress</h3>
                        </div>
                        <div className="info2">
                            <h3 style={{ fontSize: '15px' }}>089565656</h3>
                            <h3 style={{ fontSize: '15px' }}>info@info.com</h3>
                        </div>
                        <h3 className="makeAnAppointment">Make an Appointment</h3>
                        <form action="#" method="post" className="formClass">
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Name" style={{ backgroundColor: '#f1f8ff' }} required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email" style={{ backgroundColor: '#f1f8ff' }} required />
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" placeholder="Your Message" style={{ backgroundColor: '#f1f8ff' }} required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="map-container">
                        <div className="map-wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48192.21217049301!2d29.02185324082282!3d40.98119046371067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0xd2d24ea0437a7ee2!2zS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1706876044838!5m2!1str!2str" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}


export default Section6;