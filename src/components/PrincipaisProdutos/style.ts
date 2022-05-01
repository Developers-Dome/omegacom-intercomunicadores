import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 60px 5% 0;
  margin: auto;

  @media (min-width: 1024px) {
    padding: 100px 5% 0;
  }
`;

export const GridCards = styled.div`
  margin: 60px auto 0;

  display: flex;
  justify-content: space-between;
  grid-column-gap: 22px;
  grid-row-gap: 22px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: none;
  }
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

  margin-bottom: 35px;
  margin-top: 20px;
  padding-left: 10px;

  position: relative;

  overflow: hidden;

  @media (min-width: 1024px) {
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

export const Button = styled.div`
  width: 100%;

  margin-top: 40px;

  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-top: 60px;
  }
`