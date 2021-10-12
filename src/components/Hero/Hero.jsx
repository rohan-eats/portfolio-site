import React, { useEffect } from "react";
import Header from "../Header/Header";
import './style.scss';
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";


export default function Hero() {

    useEffect(() => {
        const split = new SplitText("#header-text", {
            type: "lines",
            linesClass: "lineChildren",
        });

        new SplitText("#header-text", {
            type: "lines",
            linesClass: "lineParent",
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        });
    }, []);

    return (
        <section className="hero-container">
            <Header />

            <h1 id="header-text">Hittites Technology India Limited</h1>


        </section>
    )
}

