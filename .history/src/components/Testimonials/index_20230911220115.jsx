import { useState } from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import "./style.css";

export function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span>What they</span>
        <span>say About us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      {/* Right Testimonial */}

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === testimonialsLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
