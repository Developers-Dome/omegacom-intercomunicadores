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
        </p>

        <ul>
          <li>
            <img src="/components/PresentationProduct/CheckIcon.svg" alt="" />
            <span>Lorem ipsum</span>
          </li>
        </ul>

        <ContainerButton>
          <Button href="/" transparent fullWidth>
            Manual instalação
          </Button>
          <Button href="/" fullWidth>
            COMPRE AGORA
          </Button>
        </ContainerButton>
      </div>
    </Container>
  );
}
