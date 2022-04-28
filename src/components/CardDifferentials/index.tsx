// Libs
import React from "react";

// Styles
import {
  CardContainer,
  Icon,
  LineContainer,
  Line,
  CardContent,
  Title,
  Description,
} from "./style";

interface CardProps {
  props: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function CardDifferentials({ props }: CardProps) {
  return (
    <CardContainer>
      {props.icon && <Icon src={props.icon} />}
      <LineContainer>
        <Line />
      </LineContainer>
      <CardContent>
        {props.title && <Title>{props.title}</Title>}
        {props.description && <Description>{props.description}</Description>}
      </CardContent>
    </CardContainer>
  );
}
