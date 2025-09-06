import React from "react";
import { HeroWrap, Left, Title, Subtitle, Actions, Right, HeroCard } from "./styles";
import { FaWrench } from "react-icons/fa";

export default function Hero() {
  return (
    <HeroWrap id="home">
      {/* Left mantido vazio por enquanto */}
      <Left >
        <Actions>
          <a href="#services" className="btn-ghost">Ver serviços</a>
          <a href="#contact" className="btn-ghost">Falar com a gente</a>
        </Actions>
      </Left>

{/* Right com título, subtítulo e botões */}

      <Right>
        <Title>EastSiders</Title>
        <Subtitle>
          Manutenção, revisão completa e customizações com qualidade e transparência. Atendimento rápido e garantia.
        </Subtitle>

      </Right>
    </HeroWrap>
  );
}
