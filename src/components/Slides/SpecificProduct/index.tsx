import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SpecificProductProps {
  images: [string];
}

import { Container } from "./styles";

export function SpecificProduct({ images }: SpecificProductProps) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        {images.map((image, alt) => (
          <SwiperSlide key={alt}>
            <img src={image} alt="Intercomunicador" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
