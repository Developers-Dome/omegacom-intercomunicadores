import styled from "styled-components";

import f from "@styles/typograph.json";

export const Container = styled.section`
  width: 320px;
  height: 300px;

  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  div {
    width: 250px;
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

    display: flex;
    align-items: center;

    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    font-family: Montserrat, sans-serif;
    text-align: justify;

    position: relative;
  }
`;
