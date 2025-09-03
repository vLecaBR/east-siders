import styled from "styled-components";

export const FormWrap = styled.form`
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:18px;
  border-radius:12px;
  max-width:720px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:12px;
`;

export const Field = styled.div`
  display:flex;
  flex-direction:column;
  label{ font-size:13px; color:var(--muted); margin-bottom:6px; }
  input{ padding:10px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background:transparent; color:var(--white); }
`;

export const TextArea = styled.textarea`
  padding:10px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background:transparent; color:var(--white);
`;

export const Submit = styled.button`
  align-self:flex-start;
  background:var(--accent); color:#071022; padding:10px 16px; border-radius:10px; font-weight:700;
`;
