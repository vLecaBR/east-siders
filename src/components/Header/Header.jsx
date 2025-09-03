import React, { useState } from "react";
import { HeaderContainer, Logo, Nav, NavToggle, NavList, NavItem, CTA } from "./styles";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo href="#home">Oficina<span>Pro</span></Logo>

      <Nav className={open ? "open" : ""}>
        <NavList>
          <NavItem><a href="#home">Início</a></NavItem>
          <NavItem><a href="#services">Serviços</a></NavItem>
          <NavItem><a href="#works">Trabalhos</a></NavItem>
          <NavItem><a href="#about">Sobre</a></NavItem>
          <NavItem><a href="#contact">Contato</a></NavItem>
        </NavList>
        <CTA href="#contact">Agendar</CTA>
      </Nav>

      <NavToggle onClick={() => setOpen(v => !v)} aria-label="menu">
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </NavToggle>
    </HeaderContainer>
  );
}
