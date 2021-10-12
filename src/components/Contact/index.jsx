import React from 'react'
import GetInTouch from './GetInTouch'
// import ContactInfo from './ContactInfo'
import GoogleMap from '../GoogleMap/GoogleMap'

export default function Contact() {
    return (
        <>
            {/* <ContactInfo /> */}

            <section className="contact-container">

                <div className="google-map">
                    {/* <iframe
                        title="Hittites location - google map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d348.60623230981196!2d77.51465379408847!3d13.00478400817366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c54e8189057%3A0x91a638be14b14ad3!2sDoddanna%20Industrial%20estste%2C%20Hegganahalli%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1628531987815!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy">

                    </iframe> */}

                    <GoogleMap />
                </div>

                <GetInTouch />

            </section>
        </>
    )
}
