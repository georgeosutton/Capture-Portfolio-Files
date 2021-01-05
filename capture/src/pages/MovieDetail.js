import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // useEffect

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          exit={"exit"}
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <ImgDisplayStyled>
            <img src={movie.secondaryImg} alt="movie" />
          </ImgDisplayStyled>
        </StyledDetails>
      )}
    </>
  );
}

const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadline = styled.div`
  padding-bottom: 5rem;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    object-fit: cover;
  }
  img {
    width: 100%;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyled = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImgDisplayStyled = styled.div`
  padding: 1rem 0;
  img {
    width: 100%;
  }
`;

// Award Component

const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
