import styled from "styled-components";

import c from "@styles/colors.json";
import t from "@styles/typograph.json";

export const Container = styled.h1`
  max-width: 1040px;

  margin: 40px auto 60px auto;

  color: ${c.neutral400};
  font-size: ${t.paragraphSmall.fontSize};
  font-weight: ${t.paragraphSmall.fontWeight.medium};
  line-height: ${t.paragraphSmall.lineHeight};
  text-align: center;
`;
