import React from "react";
import { Container, Content } from "./styles";

import { LinkItem } from "../Link";
import { BsWhatsapp } from "react-icons/bs";

export function Hero() {
  return (
    <Container>
      <Content>
        <h1>Agilize o atendimento do seu comércio</h1>
        <p>
          Lorem ipongue. Eu tristique iaculis non, magna diam.Lorem ipongue. Eu
          tristique iaculis non, magna diam.iam.
        </p>
        <LinkItem href="/" icon={<BsWhatsapp />}>
          Peça já o seu
        </LinkItem>
      </Content>
    </Container>
  );
}
