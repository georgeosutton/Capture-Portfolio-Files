import React from "react";
import athlete from "../imgs/athlete-small.png";
import theracer from "../imgs/theracer-small.png";
import goodtimes from "../imgs/goodtimes-small.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  scrollReveal,
} from "../animation";
import ScrollTop from "../components/ScrollTop";

import { useScroll } from "../components/useScroll";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      exit={"exit"}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <StyledMovie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={scrollReveal}
        animate={controls}
        ref={element}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        variants={scrollReveal}
        animate={controls2}
        ref={element2}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StyledMovie>
      <ScrollTop />
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  background: white;
  overflow: hidden;

  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled(motion.div)`
  padding: 2rem 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 80vh;

    @media (max-width: 1300px) {
      height: 100%;
    }
  }
  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
