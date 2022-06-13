import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

interface TitleProps {
  small?: boolean
}

export const Container = styled.h1<TitleProps>`
  width: fit-content;

  margin: 0 auto;

  font-family: Montserrat, sans-serif;
  font-size: ${props => props.small ? f.paragraphSmall.fontSize : f.paragraphLarge.fontSize};
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
      width: ${props => props.small ? "30px" : "50px"};

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
    font-size: ${props => props.small ? f.h4.fontSize : f.displaySmall.fontSize};
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
