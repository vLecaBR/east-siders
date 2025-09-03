import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  background: ${({ theme }) => theme.colors.bg};
  padding: 60px 24px;
`;

export const SectionAlt = styled.section`
  text-align: center;
  background: ${({ theme }) => theme.colors.bgAlt};
  padding: 60px 24px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 700px;
  margin: 0 auto 32px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

export const GridWorks = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
