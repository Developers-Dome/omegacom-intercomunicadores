import styled from "styled-components";

import c from "@styles/colors.json";
import f from "@styles/typograph.json";

export const Container = styled.div`
  max-width: 1440px;
  padding: 60px 5% 0;
  margin: 0 auto 60px;

  @media (min-width: 1024px) {
    padding: 100px 5% 0;
  }
`;

export const Description = styled.p`
  max-width: 1000px;
  margin: 40px auto 0;

  font-size: ${f.paragraphSmall.fontSize};
  line-height: ${f.paragraphSmall.lineHeight};
  text-align: center;

  color: ${c.neutral400};
`;

export const GridCards = styled.div`
  display: none;

  @media (min-width: 1024px) {
    margin: 60px auto 0;

    display: flex;
    justify-content: space-between;
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    flex-wrap: wrap;
  }
`;

export const Carousel = styled.div`
  display: block;

  .swiper  {
    padding: 60px 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${c.primary500};

    top: auto;
    bottom: 0;
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

  .swiper-pagination {
    bottom: 10px;
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
    display: none;
  }
`;
