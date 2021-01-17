import styled from "styled-components";

export const ToggleContainer = styled.div`
  padding: 1.25rem;
`;

export const Toggle = styled.button`
  height: 0.75rem;
  width: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  background: ${(props) => props.theme.colors.text};
  -webkit-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);

    + span {
      opacity: 1;
      transform: translate(10px, -50%);
      visibility: visible;
    }
  }
`;
