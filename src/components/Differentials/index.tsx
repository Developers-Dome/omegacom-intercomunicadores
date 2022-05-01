// Libs
import React from "react";

// Components
import Card from "../CardDifferentials";

// Styles
import { CardsContainer } from "./style";
import Title from "../Title";
import Description from "../Description";

interface DifferentialsProps {
  title: string;
  description: string;
  cards: {
    card1: {
      icon: string;
      title: string;
      description: string;
    };
    card2: {
      icon: string;
      title: string;
      description: string;
    };
    card3: {
      icon: string;
      title: string;
      description: string;
    };
    card4: {
      icon: string;
      title: string;
      description: string;
    };
  };
}

const prop: DifferentialsProps = {
  title: "Diferenciais",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra porta pellentesque amet, amet, commodo enim. Lectus imperdiet morbi morbi pharetra eu ipsum aliquam id sit. Vestibulum auctor risus fusce leo. Molestie sit condimentum ut pellentesque tortor.",
  cards: {
    card1: {
      icon: "./components/CardDifferentials/icon.png",
      title: "Lorem ipsum",
      description:
        "Lor risus fusce leo.  ut pellentesque tortor.Lor risus fusce leo.  ut pellentesque tortor.",
    },
    card2: {
      icon: "./components/CardDifferentials/icon.png",
      title: "Lorem ipsum",
      description:
        "Lor risus fusce leo.  ut pellentesque tortor.Lor risus fusce leo.  ut pellentesque tortor.",
    },
    card3: {
      icon: "./components/CardDifferentials/icon.png",
      title: "Lorem ipsum",
      description:
        "Lor risus fusce leo.  ut pellentesque tortor.Lor risus fusce leo.  ut pellentesque tortor.",
    },
    card4: {
      icon: "./components/CardDifferentials/icon.png",
      title: "Lorem ipsum",
      description:
        "Lor risus fusce leo.  ut pellentesque tortor.Lor risus fusce leo.  ut pellentesque tortor.",
    },
  },
};

export default function Differentials() {
  return (
    <div className="container">
      <Title>Diferenciais</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra porta
        pellentesque amet, amet, commodo enim. Lectus imperdiet morbi morbi
        pharetra eu ipsum aliquam id sit. Vestibulum auctor leo. Molestie sit
        condimentum ut pellentesque tortor.
      </Description>
      <CardsContainer>
        {Object.values(prop.cards)
          .filter((card) => card.title)
          .map((value) => {
            return (
              <>
                <Card props={value} />
              </>
            );
          })}
      </CardsContainer>
    </div>
  );
}
