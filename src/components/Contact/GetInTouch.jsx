import React, { useEffect, useRef, useState } from "react"
import cn from "classnames";
import gsap from "gsap"
import { useForm } from '@formcarry/react';

import useOnScreen from "../../hooks/useOnScreen"
import SplitText from "../../utils/Split3.min";

import "./style.scss"

export default function GetInTouch() {
    const ref = useRef(null);


    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref, 0.5);


    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);



    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#get-in-touch", {
                type: "lines",
                linesClass: "lineChildren",
            });

            gsap.fromTo(
                split.lines,
                { y: 200 },
                {
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    ease: "power2",
                }
            );
        }


    }, [reveal]);

    const { state, submit } = useForm({
        id: process.env.FORMCARRY_ID,
    });

    // Success messages
    if (state.submitted) {
        return (
            <p className="success-message">
                Thank you! <br /> We received your query. Our Team will
                contact you within 1-2 days.
            </p>
        );
    }

    return (
        <div className="get-in-touch-container" data-scroll-section>

            <h2 className="get-in-touch-header">Get in Touch</h2>
            <form
                className={cn("get-in-touch", { "is-reveal": reveal })}
                id="get-in-touch"
                ref={ref}
                autoComplete="off"
                onSubmit={submit}
            >

                <input type="text" className="input-field" placeholder="Full name" required autoComplete="off" />

                <input type="text" className="input-field" placeholder="Contact number" required autoComplete="off" />




                <input type="email" className="input-field" placeholder="Email" required autoComplete="off" />

                <textarea className="input-field" required placeholder="Message" type="text" label="Message" name="Message" rows="4" />


                <button type="submit">
                    {state.submitting ? <p>Sending... </p> : <p>Send</p>}
                </button>

            </form>


        </div>
    )
}

