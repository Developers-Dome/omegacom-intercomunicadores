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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra porta
        pellentesque amet, amet, commodo enim. Lectus imperdiet morbi morbi
        pharetra eu ipsum aliquam id sit. Vestibulum auctor risus fusce leo.
        Molestie sit condimentum ut pellentesque tortor.
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
