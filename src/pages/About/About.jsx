import React from "react";
import {
  Section,
  Banner,
  BannerTitle,
  BannerSubtitle,
  Content,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDesc
} from "./styles";

import { FaHistory, FaStar, FaCogs } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaHistory />,
      title: "Nossa História",
      desc: "Há mais de 10 anos, começamos com a missão de oferecer serviços automotivos confiáveis e de alta qualidade, conquistando a confiança dos clientes desde o primeiro dia."
    },
    {
      icon: <FaStar />,
      title: "Qualidade Garantida",
      desc: "Cada serviço é realizado com atenção aos detalhes, peças de alta qualidade e profissionais especializados, garantindo segurança e desempenho para seu veículo."
    },
    {
      icon: <FaCogs />,
      title: "Variedade de Serviços",
      desc: "Oferecemos revisões completas, trocas de óleo, customizações, upgrades de performance e diagnósticos avançados, atendendo todos os tipos de veículos."
    }
  ];

  return (
    <Section id="about">
      <Banner>
        <BannerTitle>👨‍🔧 Sobre a Nossa Oficina</BannerTitle>
        <BannerSubtitle>Paixão por carros, excelência em cada serviço</BannerSubtitle>
      </Banner>

      <Content>
        <CardGrid>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardIcon>{card.icon}</CardIcon>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </Card>
          ))}
        </CardGrid>
      </Content>
    </Section>
  );
}
