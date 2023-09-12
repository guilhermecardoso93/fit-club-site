import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

import "./style.css";

export function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-testimonials">
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
      <div className="right-testimonials">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            srcset=""
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img src={rightArrow} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
