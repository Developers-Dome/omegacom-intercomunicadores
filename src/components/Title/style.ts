import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.h1`
  width: fit-content;

  margin: 0 auto;

  font-family: Montserrat, sans-serif;
  font-size: ${f.h3.fontSize};
  line-height: ${f.h3.lineHeight};
  color: ${c.neutral500};
  text-align: center;

  position: relative;

  @media (min-width: 450px) {
    &::after,
    ::before {
      content: "";
      display: block;
      position: absolute;

      height: 2px;
      width: 50px;

      background: ${c.primary300};
    }

    &::after {
      left: -60px;
      top: 50%;
    }

    &::before {
      right: -60px;
      top: 50%;
    }
  }

  @media (min-width: 1023px) {
    font-size: ${f.displaySmall.fontSize};
    line-height: ${f.displaySmall.lineHeight};

    &::after,
    ::before {
      width: 150px;
    }

    &::after {
      left: -160px;
      top: 50%;
    }

    &::before {
      right: -160px;
      top: 50%;
    }
  }
`;
