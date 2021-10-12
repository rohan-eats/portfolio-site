import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#headline", { type: "lines" });

            gsap.to(split.lines, {
                duration: 1,
                y: -20,
                opacity: 1,
                stagger: 0.1,
                ease: "power4.out",
                // onComplete: () => split.revert(),
            });
        }
    }, [reveal]);

    return (
        <section
            className={cn("about-section", { "is-reveal": reveal })}
            data-scroll-section
        >

            <div>
                <SectionHeader title="about" />

                <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
                    <span className='highlight'>Hittites Technology India Limited </span>provides high quality products and services to the customers. What differentiates us from other businesses is our ability to truly connect with our customers, and provide them exceptional and compassionate service they deserve.
                </p>
            </div>
        </section>
    );
}
