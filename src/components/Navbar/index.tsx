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
} from "./style";
import Button from "@components/Link";
import { BsWhatsapp } from "react-icons/Bs";

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
  logo: "./components/Navbar/navbar_logo.png",
  logo_mobile: "./components/Navbar/navbar_logo.png",
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
    text: "PEÇA JÁ O SEU",
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

  console.log(prop);
  return (
    <Container>
      {width > 1023 ? (
        //Desk Version
        <Desk>
          {prop.logo ? (
            <Link href="/">
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
              <Button href={prop.button.link} icon={<BsWhatsapp />}>
                {prop.button.text}
              </Button>
            </NavButtons>
          </LinksContainer>
        </Desk>
      ) : (
        //Mobile/Tablet Version
        <Mobile>
          <IconContainer>
            <Link href="/">
              <a>{prop.logo_mobile ? <img src={prop.logo_mobile} /> : null}</a>
            </Link>
            <MenuIcon className={active ? "open" : ""} onClick={Toggle} />
          </IconContainer>
          <Menu className={active ? "menuOpen" : ""}>
            <ul>
              {Object.values(prop.links).map((value, index) => {
                return (
                  <>
                    <Link href={value.link} key={index}>
                      <li>{value.text}</li>
                    </Link>
                  </>
                );
              })}

              <Button href={prop.button.link} icon={<BsWhatsapp />}>
                {prop.button.text}
              </Button>
            </ul>
          </Menu>
        </Mobile>
      )}
    </Container>
  );
}
