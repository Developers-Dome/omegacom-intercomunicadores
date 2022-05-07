import React from "react";
import { Container, Content } from "./styles";

import { BsWhatsapp } from "react-icons/bs";
import LinkItem from "@components/Button";

export function Hero() {
  return (
    <Container>
      <Content>
        <h1>Agilize o atendimento do seu comércio</h1>
        <p>
          Economize tempo de filas gigantes e gritaria, com o nosso intercomunicador tudo fica mais rápido e fluido.
        </p>
        <LinkItem href="https://api.whatsapp.com/send?phone=5511944431037&text=Oi%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20intercomunicadores." icon={<BsWhatsapp />}>
          Compre agora mesmo
        </LinkItem>
      </Content>
    </Container>
  );
}
