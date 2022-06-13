//Libs
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Components
import { CardProduct } from "@components/CardProduct";

//Styles
import { Container, GridCards, Carousel } from "./style";

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
  return (
    <Container>
      <GridCards>
        {Object.values(prop).map((card) => {
          return <CardProduct props={card} key={card.model} />;
        })}
      </GridCards>

      <Carousel>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {Object.values(prop).map((card) => (
            <SwiperSlide key={card.model}>
              <CardProduct props={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
}
