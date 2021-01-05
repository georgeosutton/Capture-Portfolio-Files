import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

function ContactUs() {
  return (
    <StyledContact
      style={{ background: "white" }}
      exit={"exit"}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <TitleStyled>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </TitleStyled>
      <div>
        <Hide>
          <SocialStyled variants={titleAnimation}>
            <Circle />
            <h2>Send us a message</h2>
          </SocialStyled>
        </Hide>
        <Hide>
          <SocialStyled variants={titleAnimation}>
            <Circle />
            <h2>Send an Email</h2>
          </SocialStyled>
        </Hide>
        <Hide>
          <SocialStyled variants={titleAnimation}>
            <Circle />
            <h2>Social Media</h2>
          </SocialStyled>
        </Hide>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const TitleStyled = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const SocialStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUs;
