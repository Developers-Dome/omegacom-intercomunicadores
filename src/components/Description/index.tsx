import React from "react";
import { Container } from "./style";

interface DescriptionProps {
  children: string;
}

export default function Description({ children }: DescriptionProps) {
  return <Container>{children}</Container>;
}
