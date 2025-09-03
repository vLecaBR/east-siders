import styled from "styled-components";

export const HeroWrap = styled.section`
  display:flex;
  align-items:center;
  gap:32px;
  padding:64px 24px;
  max-width:1200px;
  margin:0 auto;
  @media(max-width:860px){ flex-direction:column; padding:40px 18px; gap:18px; }
`;

export const Left = styled.div`
  flex:1;
  .btn-primary{ background:var(--accent); color:#071022; padding:12px 18px; border-radius:12px; font-weight:700; margin-right:12px; display:inline-block;}
  .btn-ghost{ border:1px solid rgba(255,255,255,0.06); padding:10px 16px; border-radius:10px; display:inline-block;}
`;

export const Title = styled.h1`
  font-size:clamp(28px, 4.5vw, 44px);
  margin-bottom:12px;
`;

export const Subtitle = styled.p`
  color:var(--muted);
  margin-bottom:18px;
  max-width:620px;
`;

export const Actions = styled.div` display:flex; align-items:center;`;

export const Right = styled.div` width:320px; @media(max-width:860px){ width:100%; } `;

export const HeroCard = styled.div`
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:14px;
  border-radius:12px;
  display:flex;
  gap:14px;
  align-items:center;
  box-shadow:0 10px 30px rgba(2,6,23,0.6);
  .icon{ background:rgba(255,107,53,0.12); padding:10px; border-radius:10px; display:flex; align-items:center; justify-content:center; }
  h4{ margin-bottom:6px; }
  p{ color:var(--muted); font-size:14px; }
`;
