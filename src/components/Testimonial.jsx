import React from "react";
import "./Testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";

function Testimonial(props) {
  const [selected, setSelected] = useState(0);
  const transition = { type: "spring", duration: 3 };
  const tlength = testimonialsData.length;

  return (
    <div className="testimonial" key={selected}>
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          &nbsp;-&nbsp;{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((selected) => selected - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((selected) => selected + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
