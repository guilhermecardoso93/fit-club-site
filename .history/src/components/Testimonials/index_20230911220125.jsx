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
    <div className="testimonials" id='testimonials'>
      <div className="left-testimonials">
        <span>Testimonials</span>
        <span>What they</span>
        <span>say About us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, exit: -100 }}
          transition={{ transition }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-testimonials">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, exit: -100 }}
          transition={{ transition }}
        />
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
          <img
            src={rightArrow}
            alt=""
            srcset=""
            onClick={() => {
              selected === testimonialsLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
