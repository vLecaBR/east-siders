import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 24px;
  text-align: center;
  background: ${({ theme }) => theme.colors.bg};
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.md};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

export const CardCategory = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 6px;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const CardDesc = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.4;
`;
