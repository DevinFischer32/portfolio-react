import React, { useState } from "react";
import { SliderOne, SliderTwo } from "./Wheelpic";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const SpSlider = () => {
  const [current, setcurrent] = useState(0);
  const length = SliderTwo.length;

  if (!Array.isArray(SliderOne) || SliderTwo.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className=" slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      {SliderTwo.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="wheel of fortune" className="image" />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default SpSlider;
