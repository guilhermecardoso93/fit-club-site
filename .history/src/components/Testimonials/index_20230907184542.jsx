import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import "./style.css";

export function Testimonials() {
  const [ selected, setSelected ] = useState(0)
  const testimonialsLength = testimonialsData.length

  return (
    <div className="testimonials">
      <div className="left-testimonials">
        <span className="left-testimonials-title">Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span style={{ color: "var(--orange)" }}>{testimonialsData[selected].review}</span>
        <span>{testimonialsData[selected].name}</span>
        <span>{testimonialsData[selected].status}</span>
      </div>
      <div className="right-testimonials"></div>
    </div>
  );
}
