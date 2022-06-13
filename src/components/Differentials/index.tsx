//Libs
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Components
import { CardDifferentials } from "@components/Differentials/CardDifferentials";
import { Title } from "@components/Title";

//Styles
import { Container, Description, GridCards, Carousel } from "./styles";

const props = [
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
];

export function Differentials() {
  return (
    <Container>
      <Title>Diferenciais</Title>

      <Description>
        Atuando no mercado a mais de 10 anos, conquistamos espaço e respeito no
        ramo de lotéricas e condôminios de todo o Brasil. Produto exclusivo e
        resistente é perfeito para a comunicação.
      </Description>

      <GridCards>
        {Object.values(props).map((card) => {
          return <CardDifferentials props={card} key={card.title} />;
        })}
      </GridCards>

      <Carousel>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {props.map((card, alt) => (
            <SwiperSlide key={alt}>
              <CardDifferentials props={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
}
