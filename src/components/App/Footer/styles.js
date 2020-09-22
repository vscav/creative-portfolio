import styled from "styled-components";

export const FooterNav = styled.div`
  position: fixed;
  bottom: 0;
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
