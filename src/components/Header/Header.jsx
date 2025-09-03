import React, { useState } from "react";
import { HeaderContainer, Logo, Nav, NavToggle, NavList, NavItem, CTA } from "./styles";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo href="#home">Oficina<span>Pro</span></Logo>

      <Nav className={open ? "open" : ""}>
      <NavList>
        <NavItem><Link to="/">Início</Link></NavItem>
        <NavItem><Link to="/servicos">Serviços</Link></NavItem>
        <NavItem><Link to="/galeria">Galeria</Link></NavItem>
        <NavItem><Link to="/sobre">Sobre</Link></NavItem>
        <NavItem><Link to="/contato">Contato</Link></NavItem>
      </NavList>
        <CTA href="#contact">Agendar</CTA>
      </Nav>

      <NavToggle onClick={() => setOpen(v => !v)} aria-label="menu">
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </NavToggle>
    </HeaderContainer>
  );
}
