import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.div`

  & h3 {
    font-family: Montserrat , sans-serif;
    font-size: ${f.h5.fontSize};
    line-height: ${f.h5.lineHeight};
    font-weight: ${f.h5.fontWeight.bold};
    color: ${c.white};
  }

  & p {
    font-family: Montserrat , sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    color: ${c.neutral500};
  }
`