import React from "react";
import home1 from "../imgs/home1.png";
import { Link } from "react-router-dom";
//Styled Components
import { StyledLayout, StyledDescription, StyledImage, Hide } from "../style";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} variants={titleAnimation}>
              true
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeAnimation} variants={fadeAnimation}>
            Contact Us
          </motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera"
        />
      </StyledImage>
      <Wave />
    </StyledLayout>
  );
};

export default AboutSection;
