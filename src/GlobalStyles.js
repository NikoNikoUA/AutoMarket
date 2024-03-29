import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: white;
  margin: 0;
  font-family: "Manrope", sans-serif;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}


img {
  display: block;
}

a{
  text-decoration: none;
}
`;
