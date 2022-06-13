import React from "react";

import { SpecificProduct } from "@components/Slides/SpecificProduct";

import { Title } from "@components/Title";
import Button from "@components/Button";
import {
  Container,
  ContentAndSlide,
  ContainerButton,
  ContentSpecific,
} from "./styles";

interface PresentationProduct {
  props: {
    differentials: [string];
    images: [string];
    linkBuy: string;
    linkManual: string;
    description: string;
    specification: string;
  };
}

export function PresentationProduct({ props }: PresentationProduct) {
  return (
    <Container>
      <ContentAndSlide>
        <SpecificProduct images={props.images} />

        <div>
          <p>{props.description}</p>

          <ul>
            {props.differentials.map((dif) => (
              <li key={dif}>
                <img
                  src="/components/PresentationProduct/CheckIcon.svg"
                  alt=""
                />
                <span>{dif}</span>
              </li>
            ))}
          </ul>

          <ContainerButton>
            <Button href={props.linkBuy} fullWidth>
              COMPRE AGORA
            </Button>
            <Button href={props.linkManual} transparent fullWidth>
              Manual instalação
            </Button>
          </ContainerButton>
        </div>
      </ContentAndSlide>

      <ContentSpecific>
        <Title small>Especificações</Title>
        <p>{props.specification}</p>
      </ContentSpecific>
    </Container>
  );
}
