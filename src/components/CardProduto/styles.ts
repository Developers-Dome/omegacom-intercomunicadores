import c from "@styles/colors.json";
import f from "@styles/typograph.json";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.25rem;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  p {
    font-size: ${f.h4.fontSize};
    line-height: ${f.h4.lineHeight};
    font-family: Montserrat, sans-serif;
    text-align: center;
  }

  div {
    width: 100%;
    min-height: 290px;

    display: block;
    position: relative;

    &::after {
      content: "";
      display: block;
      position: absolute;

      bottom: 0;

      width: 100%;
      height: 3px;

      background: ${c.primary300};
    }
  }

  a:hover svg {
    transition: all 0.4s;
    animation: ArrowAnimation 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);

    @keyframes ArrowAnimation {
      0% {
        transform: translateX(0px);
      }
      50% {
        transform: translateX(20px);
      }
      100% {
        transform: translateX(0px);
      }
    }
  }
`;
