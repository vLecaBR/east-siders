import React from "react";
import { FooterWrap, Small } from "./styles";

export default function Footer() {
  return (
    <FooterWrap>
      <Small>© {new Date().getFullYear()} OficinaPro — serviço honesto. Feito com <span>❤</span></Small>
    </FooterWrap>
  );
}
