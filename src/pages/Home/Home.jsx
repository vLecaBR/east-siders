import React from "react";
import Hero from "../../components/Hero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import WorkCard from "../../components/WorkCard/WorkCard";
import { FaCar, FaOilCan, FaCarSide } from "react-icons/fa";
import {
  Section,
  SectionAlt,
  Title,
  Subtitle,
  Grid,
  GridWorks,
  StreetBg,
} from "./styles";

export default function Home() {
  const services = [
    {
      icon: <FaCar />,
      title: "Revisão Completa",
      desc: "Troca de óleo, filtros, verificação de freios e suspensão.",
    },
    {
      icon: <FaOilCan />,
      title: "Troca de Óleo",
      desc: "Óleos e filtros de qualidade com acompanhamento técnico.",
    },
    {
      icon: <FaCarSide />,
      title: "Custom & Performance",
      desc: "Melhorias, instalação de peças e ajustes de performance.",
    },
  ];

  const works = [
    {
      image: "/assets/work1.jpg",
      title: "Instalação de escape",
      desc: "Ajuste e solda, final polido",
      tags: ["escape", "solda"],
    },
    {
      image: "/assets/work2.jpg",
      title: "Revisão completa",
      desc: "Cliente satisfeito",
      tags: ["revisão", "freios"],
    },
    {
      image: "/assets/work3.jpg",
      title: "Alinhamento e balanceamento",
      desc: "Correção de vibração",
      tags: ["alinhamento"],
    },
  ];

  return (
    <>
      <Hero />

      <StreetBg>
        <Section id="services">
          <Title>🚗 Serviços de Qualidade</Title>
          <Subtitle>Cuidamos do seu carro como se fosse nosso!</Subtitle>
          <Grid>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </Grid>
        </Section>
      </StreetBg>

      <SectionAlt id="works">
        <Title>🔧 Trabalhos Realizados</Title>
        <Subtitle>Alguns projetos que já passaram pela nossa oficina</Subtitle>
        <GridWorks>
          {works.map((w) => (
            <WorkCard key={w.title} {...w} />
          ))}
        </GridWorks>
      </SectionAlt>

      <StreetBg>
        <Section id="about">
          <Title>👨‍🔧 Sobre Nós</Title>
          <Subtitle>
            Somos apaixonados por carros e especialistas em manutenção. Há mais
            de 10 anos trazendo confiança e transparência para nossos clientes.
          </Subtitle>
        </Section>
      </StreetBg>
    </>
  );
}
