import React from "react";
import {
  Section,
  Title,
  Subtitle,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactInfo,
  MapWrapper
} from "./styles";

import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact">
      <Title>📞 Contato</Title>
      <Subtitle>Fale com a gente pelo WhatsApp ou siga nosso Instagram</Subtitle>

      <ContactGrid>
        <ContactCard>
          <ContactIcon><FaWhatsapp /></ContactIcon>
          <ContactInfo>
            <p>WhatsApp</p>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              +55 11 99999-9999
            </a>
          </ContactInfo>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaInstagram /></ContactIcon>
          <ContactInfo>
            <p>Instagram</p>
            <a href="https://instagram.com/sua_oficina" target="_blank" rel="noopener noreferrer">
              @sua_oficina
            </a>
          </ContactInfo>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaPhone /></ContactIcon>
          <ContactInfo>
            <p>Telefone</p>
            <span>+55 11 3333-4444</span>
          </ContactInfo>
        </ContactCard>

        <ContactCard>
          <ContactIcon><FaMapMarkerAlt /></ContactIcon>
          <ContactInfo>
            <p>Endereço</p>
            <span>Rua Exemplo, 123 - Bairro, Cidade - SP</span>
          </ContactInfo>
        </ContactCard>
      </ContactGrid>

      <MapWrapper>
        <iframe
          title="mapa-oficina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.999999!2d-46.645999!3d-23.566999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0a3e8c3d99%3A0x123456789abcdef!2sRua%20Exemplo%2C%20123%20-%20Cidade%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapWrapper>
    </Section>
  );
}
