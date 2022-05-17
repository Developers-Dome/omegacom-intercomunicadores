import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container } from "./styles";

const images = [
  "/components/CardProduto/Image.png",
  "/components/CardProduto/Image.png",
  "/components/CardProduto/Image.png",
];

export function SpecificProduct() {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        {images.map((image, key) => (
          <SwiperSlide key={key}>
            <img src={image} alt="Imagem demonstração" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
