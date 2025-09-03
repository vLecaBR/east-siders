import React from "react";
import { HeroWrap, Left, Title, Subtitle, Actions, Right, HeroCard } from "./styles";
import { FaWrench } from "react-icons/fa";

export default function Hero() {
  return (
    <HeroWrap id="home">
      <Left>
        <Title>EastSiders</Title>
        <Subtitle>
          Manutenção, revisão completa e customizações com qualidade e transparência. Atendimento rápido e garantia.
        </Subtitle>
        <Actions>
          <a href="#services" className="btn-primary">Ver serviços</a>
          <a href="#contact" className="btn-ghost">Falar com a gente</a>
        </Actions>
      </Left>

      <Right>
        <HeroCard>
          <div className="icon"><FaWrench size={22} /></div>
          <div>
            <h4>Diagnóstico completo</h4>
            <p>Scanner OBD2, verificação de freios, suspensão e elétrica.</p>
          </div>
        </HeroCard>
      </Right>
    </HeroWrap>
  );
}
