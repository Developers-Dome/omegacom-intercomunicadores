import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.main`
  position: relative;

  @media (min-width: 1024px) {
    background: ${c.primary300};
  }
`;

export const Content = styled.div`
  max-width: 1440px;

  margin: 0 auto;
  padding: 20px 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  z-index: 1;

  > div {
    width: 100%;

    h2 {
      width: 100%;
      max-width: 600px;

      font-family: Montserrat, sans-serif;
      font-size: ${f.displaySmall.fontSize};
      line-height: ${f.displaySmall.lineHeight};
      font-weight: ${f.displaySmall.fontWeight.bold};
      color: ${c.white};
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 524px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border: none;
  background: ${c.white};

  @media (min-width: 1024px) {
    padding: 20px;

    border: 2px solid ${c.primary300};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  button {
    width: 100%;

    padding: 0.8rem 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: Montserrat, sans-serif;
    font-size: ${f.h5.fontSize};
    font-weight: 700;
    color: ${c.white};

    background: ${c.primary300};
    border-radius: 0.3rem;

    transition: 0.2s;

    &:hover {
      background: ${c.primary200};
    }
  }
`;
