import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

interface LinkProps {
  background?: boolean;
  fullWidth?: boolean;
}

export const Container = styled.a<LinkProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};

  padding: 0.5rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.fullWidth ? "center" : "space-between")};
  gap: 1rem;

  font-family: Montserrat, sans-serif;
  font-size: ${f.h5.fontSize};
  font-weight: 700;
  color: ${(props) => (props.background ? c.primary300 : c.white)};

  background: ${(props) => (props.background ? "transparent" : c.primary300)};
  border: ${(props) =>
    props.background ? `2px solid ${c.primary300}` : "none"};
  border-radius: 0.3rem;

  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.background ? c.primary300 : c.primary200)};
    color: ${(props) => (props.background ? c.white : c.white)};
  }
`;
