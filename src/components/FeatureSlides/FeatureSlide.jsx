import React, { useRef, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import SectionHeader from "../SectionHeader";

export default function FeatureSlide({
  title,
  description,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div ref={ref} className="feature-slide">
      <SectionHeader title={'products'} />
      <h3 className="feature-slide-title">{title}</h3>
    </div>
  );
}
