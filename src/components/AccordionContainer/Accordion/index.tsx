import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import c from "@styles/colors.json";
import { Container } from "./styles";

const AccordionContainer = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.5rem", color: "white" }} />
    }
    {...props}
  />
))(() => ({
  backgroundColor: c.primary300,
  flexDirection: "row",
  borderRadius: "10px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "30px 20px",
  margin: "-6px 0",
  borderBottomRightRadius: "10px",
  borderBottomLeftRadius: "10px",
  border: `1px solid ${c.primary300}`,
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
}));

interface AccordionComponentProps {
  title: string;
  description: string;
}

export function Accordion({ title, description }: AccordionComponentProps) {
  return (
    <>
      <Container>
        <AccordionContainer>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h3>{title}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>{description}</p>
          </AccordionDetails>
        </AccordionContainer>
      </Container>
    </>
  );
}
