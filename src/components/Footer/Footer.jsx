import React from "react";
import { FooterWrap, Small } from "./styles";

export default function Footer() {
  return (
    <FooterWrap>
      <Small>© {new Date().getFullYear()} CliqZ | EastSiders - todos os direitos reservados.</Small>
    </FooterWrap>
  );
}
