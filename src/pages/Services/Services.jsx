import React from "react";
import {
  Section,
  Title,
  Subtitle,
  Grid,
  Card,
  CardImage,
  CardContent,
  CardCategory,
  CardTitle,
  CardDesc
} from "./styles";

export default function Services() {
  const services = [
    {
      image: "/assets/services/revisao.jpg",
      category: "Manutenção",
      title: "Revisão Completa",
      desc: "Troca de óleo, filtros, verificação de freios, suspensão e alinhamento. Garantia de segurança e desempenho para seu carro."
    },
    {
      image: "/assets/services/oleo.jpg",
      category: "Óleo & Filtros",
      title: "Troca de Óleo",
      desc: "Óleos e filtros de alta qualidade com acompanhamento técnico, mantendo o motor sempre saudável."
    },
    {
      image: "/assets/services/performance.jpg",
      category: "Performance",
      title: "Custom & Performance",
      desc: "Melhorias no motor, suspensão e estética. Transforme seu carro com ajustes profissionais."
    },
    {
      image: "/assets/services/diagnostico.jpg",
      category: "Diagnóstico",
      title: "Diagnóstico Avançado",
      desc: "Scanner OBD2, testes de sensores e elétrica completa, detectando problemas antes que se tornem grandes."
    },
    {
      image: "/assets/services/bateria.jpg",
      category: "Elétrica",
      title: "Bateria & Elétrica",
      desc: "Verificação completa do sistema elétrico, alternador, bateria e fusíveis, garantindo funcionamento perfeito."
    },
  ];

  return (
    <Section id="services">
      <Title>🚀 Nossos Serviços</Title>
      <Subtitle>Profissionalismo, transparência e qualidade em cada detalhe</Subtitle>
      <Grid>
        {services.map((s, index) => (
          <Card key={index}>
            <CardImage src={s.image} alt={s.title} />
            <CardContent>
              <CardCategory>{s.category}</CardCategory>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
