import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{ margin:0; padding:0; box-sizing:border-box; }
html,body,#root{ height:100%; }
body{
  font-family: ${({ theme }) => theme.fonts.body};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  line-height:1.5;
}
h1,h2,h3,h4,h5,h6{
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight:700;
}
a{ text-decoration:none; color:inherit; }
img{ max-width:100%; display:block; }
button{ cursor:pointer; }
section{
  padding:60px 24px;
}
`;

export default GlobalStyle;
