import React from "react";
import Hero from "../../components/Hero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import WorkCard from "../../components/WorkCard/WorkCard";
import { FaCar, FaOilCan, FaCarSide } from "react-icons/fa";

export default function Home() {
  const services = [
    { icon: <FaCar />, title: "Revisão Completa", desc: "Troca de óleo, filtros, verificação de freios e suspensão." },
    { icon: <FaOilCan />, title: "Troca de óleo", desc: "Óleos e filtros de qualidade com acompanhamento técnico." },
    { icon: <FaCarSide />, title: "Custom & Performance", desc: "Melhorias, instalação de peças e ajustes de performance." },
  ];

  const works = [
    { image: "/assets/work1.jpg", title: "Instalação de escape", desc: "Ajuste e solda, final polido", tags: ["escape", "solda"] },
    { image: "/assets/work2.jpg", title: "Revisão completa", desc: "Cliente satisfeito", tags: ["revisão","freios"] },
    { image: "/assets/work3.jpg", title: "Alinhamento e balanceamento", desc: "Correção de vibração", tags: ["alinhamento"] },
  ];

  return (
    <>
      <Hero />
      <section id="services" style={{padding:"40px 24px", maxWidth:1200, margin:"0 auto"}}>
        <h2 style={{marginBottom:18}}>Serviços</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18}}>
          {services.map(s => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>

      <section id="works" style={{padding:"40px 24px", maxWidth:1200, margin:"0 auto"}}>
        <h2 style={{marginBottom:18}}>Trabalhos realizados</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18}}>
          {works.map(w => <WorkCard key={w.title} {...w} />)}
        </div>
      </section>
    </>
  );
}
