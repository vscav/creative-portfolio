import { createGlobalStyle } from "styled-components";

import RespiraWoff from "./respira/Respira-Black.woff";
import RespiraWoff2 from "./respira/Respira-Black.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
        font-family: 'Respira';
        src: local('Respira'), local('Respira'),
        url(${RespiraWoff}) format('woff2'),
        url(${RespiraWoff2}) format('woff');
        font-style: normal;
    }
`;
