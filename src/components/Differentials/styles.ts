import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 5%;
  margin: auto;
`;

export const GridCards = styled.div`
  margin: 60px auto 60px auto;

  display: flex;
  justify-content: center;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Embla = styled.div`
  width: calc(100% + 15px);

  margin-bottom: 35px;
  margin-top: 20px;
  padding-left: 10px;

  position: relative;

  overflow: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const EmblaSlide = styled.div`
  position: relative;
  flex: 1 1 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
