//Libs
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

//Components
import { CardDepoimento } from "./CardDepoimento";
import { Title } from "@components/Title";

//Styles
import { Container, Embla, EmblaContainer, EmblaSlide } from "./styles";

const props = [
  {
    name: "Paulo Silveira",
    content:
      "Lorem ipsum dolor sit,nus corrupti! Accusantium eaque itaque quam. Explicabo excepturi culpa animi veritatis earum commodi sed error.",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Diego Fernandes",
    content:
      "Lorem ipsum dolor sit,nus corrupti! Accusantium eaque itaque quam. Explicabo em commodi sed error.",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Mayk Brito",
    content: "Lorem ipsum dolor sit,nodi sed error.",
    stars: "/components/Depoimentos/stars.png",
  },
];

export function Depoimentos() {
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
              <CardDepoimento props={card} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
    </Container>
  );
}
