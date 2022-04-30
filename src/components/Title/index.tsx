import React from "react";
import { Container } from "./style";

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return <Container>{children}</Container>;
}
