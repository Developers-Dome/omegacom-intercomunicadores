//Libs
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

//Components
import { CardProduct } from "@components/CardProduct";
import { Title } from "@components/Title";

//Styles
import {
  Container,
  GridCards,
  Embla,
  EmblaContainer,
  EmblaSlide,
  Button
} from "./style";
import LinkItem from "@components/Button";

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

export function MainModels() {
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
          return <CardProduct props={card} key={card.model} />;
        })}
      </GridCards>

      {/* CARROSSEL MOBILE */}
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {Object.values(prop).map((card, index) => (
            <EmblaSlide key={index}>
              <CardProduct props={card} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>

      <Button>
        <LinkItem href="/produtos">Ver todos produtos</LinkItem>
      </Button>
    </Container>
  );
}
