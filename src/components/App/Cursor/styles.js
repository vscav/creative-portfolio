import styled from "styled-components";

export const CursorInner = styled.div.attrs((props) => ({
  style: {
    height: `${props.size}px`,
    width: `${props.size}px`,
  },
}))`
  z-index: 10000000;
  display: block;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out, transform 0.25s ease-in-out;
  backface-visibility: hidden;
  will-change: transform;
  background-color: ${(props) => props.theme.colors.text};
`;

export const CursorOuter = styled.div.attrs((props) => ({
  style: {
    height: `${props.size}px`,
    width: `${props.size}px`,
  },
}))`
  z-index: 10000000;
  display: block;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  backface-visibility: hidden;
  will-change: transform;
  background-color: ${(props) => props.theme.colors.text};
  mix-blend-mode: difference;
`;
