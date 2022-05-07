//Libs
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

//Components
import { CardDepositions } from "./CardDepositions";

//Styles
import { Container, Embla, EmblaContainer, EmblaSlide } from "./styles";
import { Title } from "@components/Title";

const props = [
  {
    name: "Bruno Bassan",
    content:
      "Super recomendo!!! Produto excelente, material de primeira qualidade, entrega rápida!!!",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Rodrigo Sampaio",
    content:
      "Excelente atendimento, adquiri o intercomunicador de 6 pontos para portaria de condomínio, funcionamento perfeito, melhorou imensamente a comunicação do porteiro além de otimizar o tempo utilizado.",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Gilbere de Oliveira",
    content: "Produto bom e funcional. Agilizou consideravelmente a velocidade do atendimento, aumentando a produtividade. Proprietário muito flexível nas negociações.",
    stars: "/components/Depoimentos/stars.png",
  },
];

export function Depositions() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: true,
  });

  return (
    <Container>
      <Title>Depoimentos</Title>

      <Embla ref={emblaRef}>
        <EmblaContainer>
          {props.map((card) => (
            <EmblaSlide key={card.name}>
              <CardDepositions props={card} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
    </Container>
  );
}
