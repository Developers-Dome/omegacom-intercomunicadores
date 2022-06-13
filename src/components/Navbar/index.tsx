//Libs
import React, { useState, useEffect } from "react";
import Link from "next/link";

//Styles
import {
  Container,
  Desk,
  Mobile,
  LinksContainer,
  NavLinks,
  NavButtons,
  IconContainer,
  MenuIcon,
  Menu,
  Button,
} from "./style";
import { BsWhatsapp } from "react-icons/bs";

interface NavbarProps {
  logo?: string;
  logo_mobile?: string;
  links: {
    [key: string]: {
      text?: string;
      link: string;
    };
  };
  button: {
    text: string;
    link: string;
  };
}

const prop: NavbarProps = {
  logo: "/components/Navbar/navbar_logo.png",
  logo_mobile: "/components/Navbar/navbar_logo.png",
  links: {
    link1: {
      text: "Início",
      link: "/",
    },
    link2: {
      text: "Produtos",
      link: "/produtos",
    },
    link3: {
      text: "Contato",
      link: "/contato",
    },
    link4: {
      text: "FAQ",
      link: "/faq",
    },
  },
  button: {
    text: "Peça já o seu",
    link: "/",
  },
};

export default function Navbar() {
  const [width, setwidth] = useState(0);
  useEffect(() => {
    setwidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
    });
  });

  const [active, setActive] = useState(false);
  const Toggle = () => {
    setActive(!active);
  };

  return (
    <Container>
      {width > 1023 ? (
        //Desk Version
        <Desk>
          {prop.logo ? (
            <Link href="/" passHref>
              <a>
                <img src={prop.logo} />
              </a>
            </Link>
          ) : null}
          <LinksContainer>
            <NavLinks>
              {Object.values(prop.links).map((value, index) => {
                return (
                  <>
                    <Link href={value.link} key={index}>
                      <a>{value.text}</a>
                    </Link>
                  </>
                );
              })}
            </NavLinks>
            <NavButtons>
              <Link href="https://api.whatsapp.com/send?phone=5511944431037&text=Oi%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20intercomunicadores." passHref>
                <Button>
                  {prop.button.text} <BsWhatsapp />
                </Button>
              </Link>
            </NavButtons>
          </LinksContainer>
        </Desk>
      ) : (
        //Mobile/Tablet Version
        <Mobile>
          <IconContainer>
            <Link href="/" passHref>
              <a>{prop.logo_mobile ? <img src={prop.logo_mobile} /> : null}</a>
            </Link>
            <MenuIcon className={active ? "open" : ""} onClick={Toggle} />
          </IconContainer>
          <Menu className={active ? "menuOpen" : ""}>
            <ul key="links-container">
              {Object.values(prop.links).map((value, index) => {
                return (
                  <>
                    <Link href={value.link} key={index} passHref>
                      <li>{value.text}</li>
                    </Link>
                  </>
                );
              })}
              <Link href={prop.button.link} passHref>
                <Button href={prop.button.link}>
                  {prop.button.text} <BsWhatsapp />
                </Button>
              </Link>
            </ul>
          </Menu>
        </Mobile>
      )}
    </Container>
  );
}
