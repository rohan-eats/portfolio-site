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
    }, []);

    return (
        <section className="hero-container">
          
        </section>
    )
}

