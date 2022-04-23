import React, { ReactNode } from "react";
import { Container } from "./style";
import Link from "next/link";

interface LinkProps {
  children: string;
  href: string;
  transparent?: boolean;
  icon?: ReactNode;
}

export function LinkItem({ children, href, transparent, icon }: LinkProps) {
  return (
    <>
      <Link href={href} passHref>
        <Container background={transparent}>
          {children}
          {icon}
        </Container>
      </Link>
    </>
  );
}
