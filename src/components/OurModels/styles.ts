import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;

  margin: 0 auto;
  padding: 40px 5%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  row-gap: 2.5rem;
  column-gap: 1rem;

  @media (min-width: 1024px) {
    padding: 80px 5%;
  }
`