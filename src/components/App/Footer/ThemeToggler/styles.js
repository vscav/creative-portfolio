import styled from "styled-components";

export const ToggleContainer = styled.div`
  padding: 1.25rem;
`;

export const Toggle = styled.button`
  height: 12px;
  width: 12px;
  border: none;
  border-radius: 6px;
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
