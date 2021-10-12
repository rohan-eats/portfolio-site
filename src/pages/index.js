import React, { useState, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import CustomCursor from '../components/CustomCursor';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Seo from '../components/seo';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'
import FeatureSlides from "../components/FeatureSlides";
import Footer from '../Footer';

import "../styles/home.scss";

export default function Index() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


  }, [])


  return loader ? <>Loading</> :
    (
      <div>
        <Seo />

        <CustomCursor />

        <div className="main-container"
          id="main-container"
        >
          <Hero />
          <About />
          <FeatureSlides />
          <Footer />
        </div>

      </div>

    )
}
