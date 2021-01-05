import React from "react";
// Import Icons
import clock from "../imgs/clock.svg";
import diaphragm from "../imgs/diaphragm.svg";
import money from "../imgs/money.svg";
import teamwork from "../imgs/teamwork.svg";
import home2 from "../imgs/home2.png";
//Styled
import styled from "styled-components";
import { StyledLayout, StyledDescription, StyledImage } from "../style";

import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <StyledDescription>
        <h2>
          High <span>quality</span>services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="Clock Icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm Icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="Money Icon" />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="Teamwork Icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServicesSection;
