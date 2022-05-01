import styled from "styled-components";
import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const FooterContainer = styled.div`
  div:first-child {
    display: flex;

  }

  background: ${c.neutral100};
`;

export const FooterLinks = styled.li`
  padding: 10px 0;

  font-size: ${f.h5.fontSize};
  font-weight: ${f.h5.fontWeight.medium};
  line-height: ${f.h5.lineHeight};
`;

export const ContactContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;

  font-size: ${f.h5.fontSize};
  font-weight: ${f.h5.fontWeight.medium};
  line-height: ${f.h5.lineHeight};

  span {
    margin-left: 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 20px;
`;

export const Title = styled.h3`
  width: fit-content;
  margin: 40px 0 0 30px;
  padding-left: 10px;
  font-size: ${f.paragraphLarge.fontSize};
  line-height: ${f.paragraphLarge.lineHeight};
  text-align: center;

  position: relative;

  &::after {
      content: "";
      display: block;
      position: absolute;

      height: 2px;
      width: 30px;

      background: ${c.primary300};
    }

    &::after {
      left: -30px;
      top: 50%;
    }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;

  background: ${c.primary500};
  color: white;
`;