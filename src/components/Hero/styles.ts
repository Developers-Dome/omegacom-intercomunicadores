import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.section`
  min-height: 100vh;
  background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0) 9.95%,
      rgba(0, 0, 0, 0.63) 45.35%
    ),
    url("./components/Hero/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1023px) {
    background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0) 38%,
        rgba(0, 0, 0, 0.6) 50%
      ),
      url("./components/Hero/bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  max-width: 1440px;
  min-height: 100vh;

  margin: 0 auto;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-family: Montserrat, sans-serif;
    font-size: ${f.h1.fontSize};
    line-height: ${f.h1.lineHeight};
    font-weight: 700;
    color: ${c.white};
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    color: ${c.white};
  }

  a {
    margin-top: 2.5rem;
  }

  @media (min-width: 1023px) {
    align-items: start;

    text-align: start;

    h1 {
      max-width: 650px;

      font-size: ${f.displayLarge.fontSize};
      line-height: ${f.displayLarge.lineHeight};
    }

    p {
      max-width: 550px;
    }
  }
`;
