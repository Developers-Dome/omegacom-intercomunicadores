import React from "react";
import { Container } from "./style";

interface TitleProps {
  children: string;
  small?: boolean
}

export function Title({ children, small }: TitleProps) {
  return <Container small={small}>{children}</Container>;
}
