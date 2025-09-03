import React from "react";
import {
  Section,
  Hero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContactInfoWrapper,
  InfoItem,
  InfoIcon,
  InfoText,
  MapWrapper,
  FloatingButtons,
  FloatingButton
} from "./styles";

import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <Section>
      {/* Hero Banner */}
      <Hero>
        <HeroContent>
          <HeroTitle>📞 Faça seu orçamento</HeroTitle>
          <HeroSubtitle>
            Estamos prontos para atender você! Fale pelo WhatsApp, siga nosso Instagram ou venha nos visitar.
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      {/* Contato integrado */}
      <ContactInfoWrapper>
        <InfoItem href="https://wa.me/5511999999999" target="_blank">
          <InfoIcon><FaWhatsapp /></InfoIcon>
          <InfoText>
            WhatsApp<br />
            +55 11 99999-9999
          </InfoText>
        </InfoItem>

        <InfoItem href="https://instagram.com/sua_oficina" target="_blank">
          <InfoIcon><FaInstagram /></InfoIcon>
          <InfoText>
            Instagram<br />
            @sua_oficina
          </InfoText>
        </InfoItem>

        <InfoItem>
          <InfoIcon><FaPhone /></InfoIcon>
          <InfoText>
            Telefone<br />
            +55 11 3333-4444
          </InfoText>
        </InfoItem>

        <InfoItem>
          <InfoIcon><FaMapMarkerAlt /></InfoIcon>
          <InfoText>
            Endereço<br />
            Rua Exemplo, 123 - Bairro, Cidade - SP
          </InfoText>
        </InfoItem>
      </ContactInfoWrapper>

      {/* Mapa */}
      <MapWrapper>
        <iframe
          title="mapa-oficina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.429722!2d-47.799991!3d-21.158616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfae41f724dd%3A0xcceee1e2a4c6f269!2sR.%20S%C3%A3o%20Paulo%2C%201807%20-%20Campos%20El%C3%ADsios%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </MapWrapper>

      {/* Floating buttons */}
      <FloatingButtons>
        <FloatingButton href="https://wa.me/5511999999999" target="_blank">
          <FaWhatsapp />
        </FloatingButton>
        <FloatingButton href="https://instagram.com/sua_oficina" target="_blank">
          <FaInstagram />
        </FloatingButton>
      </FloatingButtons>
    </Section>
  );
}
