import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --bg: #071022;
  --card: #0b1220;
  --accent: #ff6b35;
  --muted: #9aa4b2;
  --white: #f8fafc;
}

*{box-sizing:border-box;margin:0;padding:0}
html,body,#root{height:100%}
body{
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg, #061226 0%, #071022 100%);
  color:var(--white);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.4;
}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
button{cursor:pointer}
`;

export default GlobalStyle;
