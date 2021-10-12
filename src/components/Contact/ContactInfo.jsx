import React, { useEffect } from "react";
import "./style.scss"



import gsap from "gsap";


export default function ContactInfo() {

    useEffect(() => {

        gsap.to('.con',
            {
                xPercent: -50,
                ease: 'none',
                duration: 6,
                repeat: -1,
            }
        )

    }, [])
    return (

        <div className="contact-info-container">

            <div className="con">
                <div>
                    <p>email</p>
                    <span>
                        info@hittitestechnology.com
                    </span>
                    <p>email</p>

                </div>
                <div>
                    <p>email</p>
                    <span>
                        info@hittitestechnology.com
                    </span>
                    <p>email</p>

                </div> <div>
                    <p>email</p>
                    <span>
                        info@hittitestechnology.com
                    </span>
                    <p>email</p>

                </div>
            </div>



            <div className="con">
                <div>
                    <p>contact</p>
                    <span>
                        +91 962-001-8180
                    </span>
                    <p>contact</p>

                </div>
                <div>
                    <p>contact</p>
                    <span>
                        +91 962-001-8180
                    </span>
                    <p>contact</p>

                </div>
                <div>
                    <p>contact</p>
                    <span>
                        +91 962-001-8180
                    </span>
                    <p>contact</p>

                </div>
                <div>
                    <p>contact</p>
                    <span>
                        +91 962-001-8180
                    </span>
                    <p>contact</p>

                </div>
                <div>
                    <p>contact</p>
                    <span>
                        +91 962-001-8180
                    </span>
                    <p>contact</p>

                </div>
            </div>


        </div>

    )
}
