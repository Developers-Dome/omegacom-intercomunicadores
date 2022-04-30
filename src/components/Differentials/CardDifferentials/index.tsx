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
    primary?: boolean;
  };
}

export function CardDifferentials({ props }: CardProps) {
  return (
    <CardContainer primary={props.primary}>
      {props.icon && <Icon src={props.icon} primary={props.primary} />}
      <LineContainer>
        <Line />
      </LineContainer>
      <CardContent>
        {props.title && <Title primary={props.primary}>{props.title}</Title>}
        {props.description && (
          <Description primary={props.primary}>{props.description}</Description>
        )}
      </CardContent>
    </CardContainer>
  );
}
