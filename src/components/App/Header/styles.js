import styled from "styled-components";

export const HeaderNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  z-index: 5;
  background: transparent;
`;

export const Logo = styled.div`
  padding: 1.25rem;

  a {
    font-size: 1.25rem;
    letter-spacing: 0.5rem;
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FlipContainer = styled.span`
  display: block;
  -webkit-transition: all 0.5s cubic-bezier(0.4, 0.22, 0.21, 1.04);
  transition: all 0.5s cubic-bezier(0.4, 0.22, 0.21, 1.04);

  & > * {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;

  a {
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    line-height: 1.3;
    height: 1.3rem;
    -webkit-transition: all 0.3s cubic-bezier(0.44, 0.15, 0.2, 1);
    transition: all 0.3s cubic-bezier(0.44, 0.15, 0.2, 1);
    -webkit-transform: translateX(0);
    transform: translateX(0);

    &:hover ${FlipContainer} {
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }
`;