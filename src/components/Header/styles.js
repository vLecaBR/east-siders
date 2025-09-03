import styled from "styled-components";

export const HeaderContainer = styled.header`
  position:sticky;
  top:0;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 24px;
  background: linear-gradient(180deg, rgba(6,10,18,0.6), rgba(6,10,18,0.35));
  backdrop-filter: blur(6px);
`;

export const Logo = styled.a`
  font-weight:700;
  font-size:20px;
  letter-spacing:0.2px;
  span{ color:var(--accent); margin-left:6px; font-weight:800; }
`;

export const Nav = styled.nav`
  display:flex;
  align-items:center;
  gap:18px;

  @media(max-width:860px){
    position:fixed;
    right:0;
    top:64px;
    background:var(--card);
    padding:18px;
    border-radius:8px;
    box-shadow:0 10px 30px rgba(2,6,23,0.6);
    transform: translateX(110%);
    transition: transform .25s ease;
    &.open { transform: translateX(0%); }
    flex-direction:column;
    width:220px;
  }
`;

export const NavList = styled.ul`
  display:flex;
  gap:18px;
  list-style:none;
  align-items:center;
  @media(max-width:860px){ flex-direction:column; gap:12px; }
`;

export const NavItem = styled.li`
  a{ color:var(--muted); font-weight:600; padding:6px 8px; border-radius:6px; transition: all .15s; }
  a:hover{ color:var(--white); background: rgba(255,255,255,0.03); }
`;

export const CTA = styled.a`
  background: linear-gradient(135deg, #ff5315ff, #ff8a57);
  color: #071022;
  padding:8px 14px;
  border-radius:10px;
  font-weight:700;
  box-shadow:0 6px 18px rgba(255,107,53,0.14);
  @media(max-width:860px){ width:100%; text-align:center; }
`;

export const NavToggle = styled.button`
  display:none;
  background:transparent;
  border:0;
  color:var(--white);
  @media(max-width:860px){ display:block; }
`;
