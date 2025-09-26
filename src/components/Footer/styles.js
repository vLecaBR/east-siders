import styled from "styled-components";

export const FooterWrap = styled.footer`
  padding:28px 24px;
  text-align:center;
  color:var(--muted);
  background: ${({ theme }) => theme.colors.bg};
`;

export const Small = styled.small`
  span{ color:var(--accent); margin-left:6px; }
`;
