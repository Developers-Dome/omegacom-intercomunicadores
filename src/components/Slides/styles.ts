import styled from "styled-components";

import c from "@styles/colors.json";

export const Container = styled.section`
  max-width: 360px;

  padding: 10px 20px;
  box-sizing: border-box!important;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${c.primary500};

    top: auto;
    bottom: 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    z-index: 9999 !important;
  }

  .swiper-button-prev::after {
    padding: 10px;
    font-size: 0;
    content: url("/components/Slides/arrow-left.svg");
  }

  .swiper-button-next::after {
    padding: 10px;
    font-size: 0;
    content: url("/components/Slides/arrow-right.svg");
  }

  .swiper-pagination-bullet {
    height: 13px;
    width: 13px;

    margin: 0 6px !important;

    background: white;
    border: 1px solid ${c.primary500};
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: ${c.primary500};
  }

  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;
