import React from "react";
import Header from "./Header";
import "./Hero.css";
import heart from "../assets/heart.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

function Hero(props) {
  const transition = { type: "spring", duration: 3 };
  return (
    <div>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="hero-left">
          <Header />
          <div className="the-best-ad">
            <motion.div
              initial={{ left: "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>The Best Fitness Club in the Town</span>
          </div>
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape</span>
              <span> Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
          <div className="figure">
            <div className="figure-out">
              <span>
                <NumberCounter
                  end={140}
                  delay={4}
                  className="increment"
                  preFix="+"
                />
              </span>
              <span>EXPERT COACHES</span>
            </div>
            <div className="figure-out">
              <span>
                <NumberCounter
                  end={978}
                  delay={2}
                  className="increment"
                  preFix="+"
                />
              </span>
              <span>MEMBERS JOINED</span>
            </div>
            <div className="figure-out">
              <span>
                <NumberCounter
                  end={50}
                  delay={4}
                  className="increment"
                  preFix="+"
                />
              </span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          <div className="hero-button">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="hero-right">
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={heart} alt="" />
            <span>Heart Rate</span>
            <span> 116 bpm </span>
          </motion.div>
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back"
          />

          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="calories"
          >
            <img src={calories} alt="" />
            <div>
              <span>calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
