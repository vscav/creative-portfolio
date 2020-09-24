import styled, { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap");

  ${normalize}

  * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar { width: 0 !important }
    }

    body {
        user-select: none;
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.background};
        overscroll-behavior: none;
        overflow: hidden;
        margin: 0;
        font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        letter-spacing: -.02em;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    a {
      color: ${(props) => props.theme.colors.text};
      -webkit-tap-highlight-color: transparent;
      -webkit-transition: color 0.3s ease-in-out;
      transition: color 0.3s ease-in-out;
    }

    #root {
      height: 100vh;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
    } 

    button:focus, button:focus:active {
    outline: none;
}
`;

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
  ${(props) =>
    props.flexColumn &&
    css`
      flex-direction: column;
    `};
`;
