//Libs
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Components
import { CardDepositions } from "./CardDepositions";

//Styles
import { Container, GridCards, Carousel } from "./styles";
import { Title } from "@components/Title";

const props = [
  {
    name: "Bruno Bassan",
    content:
      "Super recomendo!!! Produto excelente, material de primeira qualidade, entrega rápida!!!",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Rodrigo Sampaio",
    content:
      "Excelente atendimento, adquiri o intercomunicador de 6 pontos para portaria de condomínio, funcionamento perfeito, melhorou imensamente a comunicação do porteiro além de otimizar o tempo utilizado.",
    stars: "/components/Depoimentos/stars.png",
  },
  {
    name: "Gilbere de Oliveira",
    content:
      "Produto bom e funcional. Agilizou consideravelmente a velocidade do atendimento, aumentando a produtividade. Proprietário muito flexível nas negociações.",
    stars: "/components/Depoimentos/stars.png",
  },
];

export function Depositions() {
  return (
    <Container>
      <Title>Depoimentos</Title>

      <GridCards>
        {props.map((card) => (
          <CardDepositions key={card.name} props={card} />
        ))}
      </GridCards>

      <Carousel>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {props.map((card) => (
            <SwiperSlide key={card.name}>
              <CardDepositions props={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Container>
  );
}
