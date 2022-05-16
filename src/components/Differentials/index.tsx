//Libs
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

//Components
import { CardDifferentials } from "@components/Differentials/CardDifferentials";
import { Title } from "@components/Title";

//Styles
import {
  Container,
  Description,
  GridCards,
  Embla,
  EmblaContainer,
  EmblaSlide,
} from "./styles";

const prop = [
  {
    icon: "/components/CardDifferentials/Icon.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla magnam quis voluptate repellat nesciunt ea, dol.",
    primary: true,
  },
  {
    icon: "/components/CardDifferentials/Icon.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla magnam quis voluptate repellat nesciunt ea, dol.",
  },
  {
    icon: "/components/CardDifferentials/Icon.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla magnam quis voluptate repellat nesciunt ea, dol.",
  },
  {
    icon: "/components/CardDifferentials/Icon.png",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla magnam quis voluptate repellat nesciunt ea, dol.",
  },
];

export function Differentials() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: true,
  });

  return (
    <Container>
      <Title>Diferenciais</Title>

      <Description>
        Atuando no mercado a mais de 10 anos, conquistamos espaço e respeito no
        ramo de lotéricas e condôminios de todo o Brasil. Produto exclusivo e resistente é perfeito para a comunicação.
      </Description>

      {/* CARROSSEL DESKTOP */}
      <GridCards>
        {Object.values(prop).map((card) => {
          return <CardDifferentials props={card} key={card.title} />;
        })}
      </GridCards>

      {/* CARROSSEL MOBILE */}
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {Object.values(prop).map((card, index) => (
            <EmblaSlide key={index}>
              <CardDifferentials props={card} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
    </Container>
  );
}
