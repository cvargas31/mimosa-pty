import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: white;
}

ul {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles