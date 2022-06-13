// Libs
import React from "react";
import Link from "next/link";
// Styles
import {
  FooterContainer,
  Title,
  FooterLinks,
  ContactContainer,
  Contact,
  LogoContainer,
  Copyright,
} from "./style";
// Components

interface FooterProps {
  logo?: string;
  logo_mobile?: string;
  links: {
    [key: string]: {
      text?: string;
      link: string;
    };
  };
  contact: {
    [key: string]: {
      icon: string;
      text?: string;
      link?: string;
    };
  };
}

const prop: FooterProps = {
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
  contact: {
    address: {
      icon: "/components/Footer/location.png",
      text: "Sorocaba - SP",
    },
    email: {
      icon: "/components/Footer/email.png",
      text: "omegacom@gmail.com",
      link: "mailto:omegacom@gmail.com",
    },
    tel: {
      icon: "/components/Footer/wpp_small.png",
      text: "(11) 94443-1037",
      link: "tel:11944431037",
    },
  },
};

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <LogoContainer>
          <Link href="/" passHref>
            <a>
              <img src={prop.logo} />
            </a>
          </Link>
        </LogoContainer>
        <div>
          <div>
            <Title>ONDE ESTAMOS</Title>
            <ContactContainer>
              {Object.values(prop.contact).map((value, index) => {
                return (
                  <Contact key={index}>
                    {value.icon && <img src={value.icon} />}{" "}
                    {value.text && <a href={value.link}>{value.text}</a>}
                  </Contact>
                );
              })}
            </ContactContainer>
          </div>
          <div>
            <Title>NAVEGUE PELO SITE</Title>
            <ul>
              {Object.values(prop.links).map((value, index) => {
                return (
                  <>
                    <FooterLinks key={index}>
                      <Link href={value.link} passHref>
                        {value.text && <a>{value.text}</a>}
                      </Link>
                    </FooterLinks>
                  </>
                );
              })}
            </ul>
          </div>
          <div>
            <Title style={{ marginBottom: "20px" }}>COMPRE CONOSCO</Title>
            <Link
              href="https://lista.mercadolivre.com.br/_CustId_226656936?item_id=MLB1424047684&category_id=MLB7075&seller_id=226656936&client=recoview-selleritems&recos_listing=true"
              passHref
            >
              <a target="_blank">
                <img
                  style={{ cursor: "pointer", width: "100%" }}
                  src="/components/Footer/mercado-livre.png"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Copyright>Copyright © 2022 | OmegaCom Intercomunicadores</Copyright>
    </FooterContainer>
  );
}
