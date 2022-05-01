import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.div`
  max-width: 1440px;
  padding: 60px 5% 0;
  margin: auto;

  @media (min-width: 1024px) {
    padding: 100px 5% 0;
  }
`;

export const Description = styled.p`
  max-width: 1000px;
  margin: 40px auto 0;

  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
  text-align: center;

  color: ${c.neutral400};
`;

export const GridCards = styled.div`
  margin: 60px auto 0;

  display: flex;
  justify-content: space-between;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Embla = styled.div`
  width: calc(100% + 15px);

  margin-bottom: 35px;
  margin-top: 20px;
  padding-left: 10px;

  position: relative;

  overflow: hidden;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 1 1 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
