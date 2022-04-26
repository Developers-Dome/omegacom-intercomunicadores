import styled, {keyframes} from "styled-components"
import c from "../../styles/colors.json"
import t from "../../styles/typograph.json"

export const Container = styled.header`
  @media (min-width: 1024px) {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 80px;

    background: white;
    box-shadow: 3px 3px 12px 0px #00000026;
    z-index: 6;

    transition: all .5s;
    &.background {
      background: transparent;
      box-shadow: none;

      span {
        color: white;

        &:hover {
          color: ${c.primary500};
        }
      }

      a:last-child {
        border: 1px solid white;
        color: white;
      }
    }
  }
`;

export const Desk = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;

  height: 80px;
  width: 100%;

  padding: 0 5%;
`;

export const Mobile = styled.div`
  @media(max-width: 1023px){
    padding-bottom: 80px;
    display: block;

  }
  display: none;
`;


export const NavLinks = styled.div`
  a {
    position: relative;


    cursor: pointer;

    font-size: ${t.h4.fontSize};
    font-weight: ${t.h4.fontWeight.medium};
    line-height: ${t.h4.lineHeight};
    color: ${c.neutral500};

    &::after {
        position: absolute;

        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        content: "";

        background: ${c.neutral600};
        transition: 0.2s;
      }
    &:hover::after {
      width: 100%;
    }
  }

  @media(min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;

    width: 100%;
  }
`;

export const NavButtons = styled.div`
  display: flex;
`;

export const LinksContainer = styled.nav`
  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 880px;

    padding: 1.25rem 0;

    ${NavLinks} {
      display: flex;
      justify-content: space-evenly;

      width: 100%;
    }

    ${NavButtons} {
      display: flex;
    }
  }
`;

export const MenuIcon = styled.div`
  position: absolute;
  z-index: 5;
  right: 5%;
  top: 45%;

  width: 28px;
  height: 4px;

  cursor: pointer;

  transition: 0.5s;

  border-radius: 3px;

  background: ${c.neutral600};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);


  &::before {
    position: absolute;
    top: -8px;

    width: 28px;
    height: 4px;
    border-radius: 3px;
    content: "";

    background: ${c.neutral600};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    transition: 0.5s;
  }

  &::after {
    position: absolute;
    top: 8px;

    width: 28px;
    height: 4px;
    border-radius: 3px;
    content: "";

    background: ${c.neutral600};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    transition: all 0.5s;
  }

  &.open {
    background: transparent;
    box-shadow: 0 2px 5px transparent;

    &::after {
      position: absolute;
      top: 0;
      background: ${c.neutral600};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(225deg);
      content: "";
      width: 28px;
      height: 4px;
      border-radius: 3px;
    }

    &::before {
      position: absolute;
      top: 0;
      background: ${c.neutral600};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transform: rotate(135deg);
      content: "";
      width: 28px;
      height: 4px;
      border-radius: 3px;
    }
  }
`;

const slide = keyframes`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 5%;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    top: 5%;
    opacity: 1;
  }
  100% {
    top: -100%;
    opacity: 0;
  }
`;

export const Menu = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  height: 100%;

  top: -100%;
  z-index: 4;

  font-size: ${t.h3.fontSize};
  font-weight: ${t.h3.fontWeight.medium};
  line-height: ${t.h3.lineHeight};
  color: ${c.neutral500};


  li {
    margin: 20px 0;

    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 80%;
    min-height: 100%;
  }


  animation: ${slideOut} 0.5s linear;
  background: white;

  @media (orientation: landscape) {
    top: -200%;
  }

  &.menuOpen {
    display: flex;
    align-items: center;

    width: 100vw;
    height: 100vh;
    padding: 40px 0;
    z-index: 4;
    top: 5%;
    overflow: auto;

    animation: ${slide} 0.5s linear;


    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 80%;

      z-index: 5;

      padding-bottom: 40px;
    }
  }
`;

export const IconContainer = styled.div`
  position: fixed;
  display: flex;

  width: 100%;
  height: 80px;
  background: white;
  z-index: 5;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);

  img {
    margin: 6px 0 6px 5%;
  }
`;