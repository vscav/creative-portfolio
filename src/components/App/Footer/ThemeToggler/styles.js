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
  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(1.15);

    + span {
      opacity: 1;
      transform: translate(10px, -50%);
      visibility: visible;
    }
  }
`;
