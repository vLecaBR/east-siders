import styled from "styled-components";

export const Card = styled.article`
  background:var(--card);
  border-radius:12px;
  overflow:hidden;
  box-shadow:0 8px 24px rgba(2,6,23,0.6);
`;

export const Img = styled.div`
  height:160px;
  background-size:cover;
  background-position:center;
`;

export const Info = styled.div`
  padding:12px;
  h4{ margin-bottom:6px; }
  p{ color:var(--muted); font-size:14px; margin-bottom:8px; }
`;

export const Tags = styled.div`
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  span{ font-size:12px; color:var(--muted); background:rgba(255,255,255,0.02); padding:6px 8px; border-radius:8px; }
`;
