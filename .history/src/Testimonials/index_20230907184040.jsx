import { testimonialsData } from "../../data/testimonialsData";

import "./style.css";

export function Testimonials() {
  return (
    <div className="testimonials">
      <div className="left-testimonials">
        <span className="left-testimonials-title">Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[0].review}
        </span>
      </div>
      <div className="right-testimonials"></div>
    </div>
  );
}
