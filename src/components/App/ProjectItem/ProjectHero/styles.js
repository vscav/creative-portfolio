import styled from "styled-components";

export const ProjectHeroContainer = styled.div`
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: #111111;
  color: #fafafa;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: -1;
`;

export const ProjectHeroParallax = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const ProjectHeroInfo = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  padding: 0 10vw;
  position: relative;
  width: 100%;
  z-index: 0;
  opacity: 1;
  transition: opacity 0.375s ease-in-out;
`;

export const ProjectHeroTitle = styled.h1`
  font-size: 5em;
  font-weight: 700;
  margin: 1.5rem 0;
  text-transform: uppercase;
`;

export const ProjectHeroCategory = styled.div`
  font-weight: 300;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;

  span {
    &:first-of-type {
      font-size: 1.1em;
      opacity: 0.7;
    }
    &:last-of-type {
      display: block;
      font-size: 1.3em;
      font-weight: 600;
      letter-spacing: 0;
      margin-top: 5px;
      text-transform: none;
    }
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 90px;
  width: 8px;
  opacity: 1;
  transition: opacity 0.375s ease-in-out;

  > svg {
    transform: rotate(90deg);

    path {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;
