import React from "react";
import {
  Container,
  Hero,
  HeroContent,
  Title,
  Subtitle,
  CTAButton,
  Services,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDesc,
  Overlay,
} from "./styles";

import { FaTools, FaCarSide, FaCogs } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <Hero>
        <Overlay />
        <HeroContent>
          <Title>Leça Motors</Title>
          <Subtitle>
            Performance, confiança e estilo em cada reparo.
          </Subtitle>
          <CTAButton>Agende seu horário</CTAButton>
        </HeroContent>
      </Hero>

      <Services>
        <ServiceCard>
          <ServiceIcon>
            <FaTools />
          </ServiceIcon>
          <ServiceTitle>Manutenção Completa</ServiceTitle>
          <ServiceDesc>
            Do motor à estética, cuidamos de cada detalhe do seu carro.
          </ServiceDesc>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>
            <FaCarSide />
          </ServiceIcon>
          <ServiceTitle>Diagnóstico Avançado</ServiceTitle>
          <ServiceDesc>
            Tecnologia de ponta para identificar e resolver problemas rápido.
          </ServiceDesc>
        </ServiceCard>

        <ServiceCard>
          <ServiceIcon>
            <FaCogs />
          </ServiceIcon>
          <ServiceTitle>Peças Originais</ServiceTitle>
          <ServiceDesc>
            Garantia de qualidade e durabilidade para o seu veículo.
          </ServiceDesc>
        </ServiceCard>
      </Services>
    </Container>
  );
};

export default Home;
