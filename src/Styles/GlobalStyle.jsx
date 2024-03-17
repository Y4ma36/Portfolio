import { createGlobalStyle } from "styled-components";
import React from "react";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html body{
      font-family: "Nunito Sans", sans-serif;
     
    }
`;

export default GlobalStyle;
