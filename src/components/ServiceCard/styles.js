import styled from "styled-components";

export const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:18px;
  border-radius:12px;
  display:flex;
  gap:12px;
  align-items:flex-start;
  box-shadow:0 8px 20px rgba(2,6,23,0.5);
`;

export const IconWrap = styled.div`
  background: rgba(255,255,255,0.03);
  padding:10px;
  border-radius:8px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.h3`
  margin-bottom:6px;
`;

export const Desc = styled.p`
  color:var(--muted);
  font-size:14px;
`;
