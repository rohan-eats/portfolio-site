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

  

    return (
        <div className="get-in-touch-container" data-scroll-section>

        

               <button type="submit">
                    {state.submitting ? <p>Sending... </p> : <p>Send</p>}
                </button>


        </div>
    )
}

