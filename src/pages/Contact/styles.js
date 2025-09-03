import styled, { keyframes } from "styled-components";

/* Section Geral */
export const Section = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;

/* Hero Banner */
export const Hero = styled.div`
  width: 100%;
  height: 20vh;
  background: url("/assets/contact/banner.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
  max-width: 900px;
  padding: 0 24px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.gradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #fff;
`;

/* Contatos integrados */
export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 60px 24px;
`;

export const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: translateY(-4px);
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InfoIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const InfoText = styled.div`
  font-size: 1rem;
  line-height: 1.4;
`;

/* Mapa */
export const MapWrapper = styled.div`
  width: 100%;
  height: 450px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.md};
  margin: 0 auto 80px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: grayscale(10%) contrast(95%);
  }
`;

/* Floating buttons */
export const FloatingButtons = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 999;
`;

export const FloatingButton = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow.xl};
  }
`;
