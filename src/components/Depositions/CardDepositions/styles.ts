import styled from "styled-components";

import f from "@styles/typograph.json";

export const Container = styled.section`
  width: 320px;
  /* max-width: 360px; */
  height: 300px;

  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  position: relative;

  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  div {
    width: 100%;
    max-width: 250px;
    height: 40px;

    display: block;

    position: absolute;
    top: -1.5rem;
  }

  p {
    font-size: ${f.h4.fontSize};
    line-height: ${f.h4.lineHeight};
    font-weight: 700;
    font-family: Montserrat, sans-serif;
  }

  span {
    height: 100%;

    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    font-family: Montserrat, sans-serif;
    text-align: justify;

    position: relative;
  }
`;
