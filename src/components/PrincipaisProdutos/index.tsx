//Libs
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

//Components
import { CardProduto } from "@components/CardProduto";
import { Title } from "@components/Title";

//Styles
import {
  Container,
  GridCards,
  Embla,
  EmblaContainer,
  EmblaSlide,
} from "./style";

const prop = [
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador para Lotérica",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador para Condominio",
    link: "#",
  },
  {
    img: "/components/CardProduto/Image.png",
    model: "Intercomunicador para Bilheteria",
    link: "#",
  },
];

export function PrincipaisProdutos() {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: true,
  });

  return (
    <Container>
      <Title>Principais modelos</Title>

      {/* CARROSSEL DESKTOP */}
      <GridCards>
        {Object.values(prop).map((card) => {
          return <CardProduto props={card} key={card.model} />;
        })}
      </GridCards>

      {/* CARROSSEL MOBILE */}
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {Object.values(prop).map((card, index) => (
            <EmblaSlide key={index}>
              <CardProduto props={card} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
    </Container>
  );
}
