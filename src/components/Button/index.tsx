import React, { ReactNode } from "react";
import { Container } from "./style";
import Link from "next/link";

interface LinkProps {
  children: string;
  href: string;
  transparent?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  transparent,
  icon,
  fullWidth
}: LinkProps) {
  return (
    <>
      <Link href={href} passHref>
        <Container background={transparent} fullWidth={fullWidth}>
          {children}
          {icon}
        </Container>
      </Link>
    </>
  );
}
