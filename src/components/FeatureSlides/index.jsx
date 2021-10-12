import React, { useRef, useState, useEffect } from "react";
import { productSlides } from "./data";
import FeatureSlide from "./FeatureSlide";
import { gsap } from "gsap";
import cn from 'classnames';
import "./style.scss"

function RenderImages({ activeFeatureIndex }) {
  return productSlides.map(({ imageUrl, title }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      alt={title}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}
export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  ;

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          // start: "top left",
          // end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, []);


  return (
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slides-left">
        {productSlides.map((feature, index) => (
          <FeatureSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
}
