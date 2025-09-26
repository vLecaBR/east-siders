import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #fff;
  background: #0a0a0a;
  overflow-x: hidden;
`;

export const Hero = styled.section`
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1515923163041-fd0bf2eb0f38")
    no-repeat center/cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
`;

export const HeroContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  animation: ${fadeInUp} 1.2s ease-out;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffffffff, #6d6d6dff);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #e0e0e0;
`;

export const CTAButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(158, 74, 255, 0.71);
  }
`;

export const Services = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 6rem 2rem;
  flex-wrap: wrap;
  background: #111;
`;

export const ServiceCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 15px;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: linear-gradient(145deg, #1f1f1f, #2b2b2b);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accentAlt};
  margin-bottom: 1rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
`;

export const ServiceDesc = styled.p`
  font-size: 0.95rem;
  color: #bbb;
`;
