import styled from "styled-components";

export const Container = styled.section`
  max-width: 700px;

  margin: 0 auto;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 40px 0;
  }

  ul {
    margin: 40px 0;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 1023px) {
    max-width: 1440px;

    flex-direction: row;
    align-items: flex-start;
    gap: 60px;

    > div {
      margin: 0;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
