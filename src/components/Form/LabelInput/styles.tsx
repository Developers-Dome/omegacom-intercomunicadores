import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    margin-right: 2.5px;

    font-size: ${f.paragraphLarge.fontSize};
    color: red;
  }

  label {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphLarge.fontSize};
    line-height: ${f.paragraphLarge.lineHeight};
    color: ${c.neutral600};
  }

  input {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    line-height: ${f.paragraphSmall.lineHeight};
    color: ${c.neutral600};

    border: 0;
    padding: 5px 15px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4));
    border-radius: 5px;
  }

  textarea {
    border: 0;
    padding: 15px 20px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4));
    border-radius: 5px;
  }

  input::placeholder {
    font-family: Montserrat, sans-serif;
    font-size: ${f.paragraphSmall.fontSize};
    color: ${c.neutral400};
  }
`;
