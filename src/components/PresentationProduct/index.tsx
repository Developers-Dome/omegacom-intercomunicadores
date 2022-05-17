import React from "react";

import { SpecificProduct } from "@components/Slides/SpecificProduct";

import { Container, ContainerButton } from "./styles";
import Button from "@components/Button";

export function PresentationProduct() {
  return (
    <Container>
      <SpecificProduct />

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien tortor
          lacus, augue integer feugiat. Id etiam sit urna nunc, ac. Tortor id
          vel felis iaculis quis Mattis interdum gravida lobortis: Lorem ipsum
          Lorem ipsum Lorem ipsu
          <ul>
            <li>- Lorem ipsum</li>
            <li>- Lorem ipsum</li>
          </ul>
        </p>

        <ul>
          <li>
            <img src="/components/PresentationProduct/CheckIcon.svg" alt="" />
            <span>Lorem ipsum</span>
          </li>
          <li>
            <img src="/components/PresentationProduct/CheckIcon.svg" alt="" />
            <span>Lorem ipsum</span>
          </li>
          <li>
            <img src="/components/PresentationProduct/CheckIcon.svg" alt="" />
            <span>Lorem ipsum</span>
          </li>
        </ul>

        <ContainerButton>
          <Button href="/" fullWidth>
            COMPRE AGORA
          </Button>
          <Button href="/" transparent fullWidth>
            Manual instalação
          </Button>
        </ContainerButton>
      </div>
    </Container>
  );
}
