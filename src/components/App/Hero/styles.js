import styled from "styled-components";

export const Section = styled.section``;

export const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  /* visibility: hidden; */
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  /* height: 720px; */
  position: relative;
  overflow: hidden;
  margin: auto;
  /* &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
    top: 0;
    right: 0;
  } */
`;

export const HeroImage = styled.img`
  width: 100%;
  margin: 0 auto;
  /* transform: scale(1.3); */
`;
