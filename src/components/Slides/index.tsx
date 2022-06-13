import React, { ReactNode } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SlideProps {
  children: ReactNode;
}

import { Container } from "./styles";

export function Slide({ children }: SlideProps) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        {/* Fazer um map de componentes (cards), não sei como ainda... */}
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </Container>
  );
}
