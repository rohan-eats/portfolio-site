import React, { useState, useEffect } from 'react'

import Seo from '../components/seo';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'
import Contact from '../components/Contact';
import FeatureSlides from "../components/FeatureSlides";
import Footer from '../Footer';

import "../styles/home.scss";
import Testimonials from '../components/Testimonials';

export default function Index() {

  const [loader, setLoader] = useState(true);


  return loader ? <>Loading</> :
    (
      <div>
        <Seo />

        <CustomCursor />

        <div className="main-container" >

          <FeatureSlides />
          <Testimonials />
          <Contact />
          <Footer />
        </div>

      </div>

    )
}
