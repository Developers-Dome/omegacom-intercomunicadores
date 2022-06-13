import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

const Container = styled.main`
  padding: 110px 0 60px 0;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > h1 {
    font-family: Montserrat, sans-serif;
    font-size: ${f.h3.fontSize};
    line-height: ${f.h3.lineHeight};
    color: ${c.neutral500};
    text-align: center;
  }
  > p {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    color: ${c.neutral500};
    text-align: justify;
  }

  @media (min-width: 1023px) {
    p {
      font-size: ${f.paragraphLarge.fontSize};
      line-height: ${f.paragraphLarge.lineHeight};
    }
  }
`;

export default Container;
