import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 12px;
  background: ${({ theme }) => theme.colors.gradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 720px;
  margin: 0 auto 40px;
  font-size: 1.05rem;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-bottom: 50px;
`;

export const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.bgAlt};
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    text-decoration: none;
  }
`;

export const ContactIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ContactInfo = styled.div`
  text-align: left;
  p {
    font-weight: 600;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.md};

  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;
