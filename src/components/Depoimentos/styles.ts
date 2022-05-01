import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 60px 5%;
  margin: auto;

  @media (min-width: 1024px) {
    padding: 100px 5%;
  }
`;

export const GridCards = styled.div`
  margin: 60px auto 60px auto;

  display: flex;
  justify-content: space-between;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 230px;
  height: 204px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const Embla = styled.div`
  width: calc(100% + 15px);

  margin-top: 40px;
  padding-left: 10px;
  padding-top: 20px;

  position: relative;

  overflow: hidden;

  @media (min-width: 769px) {
    margin-top: 60px;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;

export const EmblaSlide = styled.div`
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
`;
