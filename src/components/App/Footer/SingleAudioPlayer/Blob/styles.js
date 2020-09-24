import styled, { keyframes } from "styled-components";

const defaultValues = [50, 50, 50, 50];

const rotate = keyframes`
0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

export const BlobShape = styled.button.attrs((props) => ({
  style: {
    height: `${props.size}px`,
    width: `${props.size}px`,
    borderTopLeftRadius: `${props.blob[0]}px`,
    borderTopRightRadius: `${props.blob[1]}px`,
    borderBottomLeftRadius: `${props.blob[2]}px`,
    borderBottomRightRadius: `${props.blob[3]}px`,
  },
}))`
  animation: ${rotate} 5s linear infinite;
  background-color: ${(props) => props.theme.colors.text};
  border-width: 0px;
  outline: none;
  position: relative;
  -webkit-transition: 0.3s linear, background-color 0.3s ease-in-out;
  transition: 0.3s linear, background-color 0.3s ease-in-out;

  &:hover + span {
    opacity: 1;
    transform: translate(10px, -50%);
    visibility: visible;
  }
`;

BlobShape.defaultProps = {
  blob: defaultValues,
};
