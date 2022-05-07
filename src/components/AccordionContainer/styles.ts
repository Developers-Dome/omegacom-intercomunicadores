import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;

  padding: 0 5% 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 40px;

    padding-bottom: 40px;
  }
`