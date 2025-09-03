import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.bg};
`;

export const Banner = styled.div`
  background: url("/assets/about/banner.jpg") center/cover no-repeat;
  padding: 10px 24px 80px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const BannerTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.gradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BannerSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: -60px auto 80px;
  padding: 0 24px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgAlt};
  padding: 32px 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

export const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.5;
`;
