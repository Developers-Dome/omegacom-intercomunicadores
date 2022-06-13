import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.section`
  max-width: 700px;

  margin: 0 auto;
  padding: 0 5% 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    max-width: 1440px;
    gap: 80px;
  }
`;

export const ContentAndSlide = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    p {
      font-family: Montserrat, sans-serif;
      font-size: ${f.paragraphSmall.fontSize};
      line-height: ${f.paragraphSmall.lineHeight};
      color: ${c.neutral500};
      text-align: justify;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    ul li {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-family: Montserrat, sans-serif;
        font-size: ${f.paragraphSmall.fontSize};
        line-height: ${f.paragraphSmall.lineHeight};
        color: ${c.neutral500};
      }
    }
  }

  @media (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;

    > div {
      margin: 0;

      p {
        font-size: ${f.paragraphLarge.fontSize};
        line-height: ${f.paragraphLarge.lineHeight};
      }

      span {
        font-size: ${f.paragraphLarge.fontSize};
        line-height: ${f.paragraphLarge.lineHeight};
      }
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentSpecific = styled.div``;
