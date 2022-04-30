import styled from "styled-components"
import c from "../../styles/colors.json"
import t from "../../styles/typograph.json"

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 400px;
  padding:  48px 30px;

  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

export const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 10px 0;
`;

export const Line = styled.span`
  position: absolute;
  top: 150px;

  width: 230px;
  height: 3px;

  background: linear-gradient(90deg, rgba(54, 62, 135, 0) 17.34%, #363E87 39.96%, #363E87 58.96%, rgba(54, 62, 135, 0) 85.21%);
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${t.paragraphLarge.fontSize};
  font-weight: ${t.paragraphLarge.fontWeight.bold};
  line-height: ${t.paragraphLarge.lineHeight};
`;

export const Description = styled.span`
  padding-top: 10px;

  color: ${c.neutral500};
  font-size: ${t.paragraphSmall.fontSize};
  font-weight: ${t.paragraphSmall.fontWeight.medium};
  line-height: ${t.paragraphSmall.lineHeight};
`;