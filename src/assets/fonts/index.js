import { createGlobalStyle } from "styled-components";

import RespiraWoff from "./respira/Respira-Black.woff";
import RespiraWoff2 from "./respira/Respira-Black.woff2";

import IntegralFCWoff from "./integral/Integral-CF-Bold.woff";
import IntegralFCWoff2 from "./integral/Integral-CF-Bold.woff2";

import GilroyWoff from "./gildoy/Gilroy-Regular.woff";
import GilroyWoff2 from "./gildoy/Gilroy-Regular.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Respira';
    src: local('Respira'), local('Respira'),
    url(${RespiraWoff}) format('woff'),
    url(${RespiraWoff2}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'IntegralCF';
    src: local('IntegralCF'), local('IntegralCF'),
    url(${IntegralFCWoff}) format('woff');
    url(${IntegralFCWoff2}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'), local('Gilroy'),
    url(${GilroyWoff}) format('woff');
    url(${GilroyWoff2}) format('wof2');
    font-style: normal;
  }
`;
