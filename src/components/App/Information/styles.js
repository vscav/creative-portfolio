import styled from "styled-components";

export const InformationList = styled.ul`
  margin: 1.25rem;
  padding: 0;
  list-style: none;
`;

export const InformationTitle = styled.li`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.grey};
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.1;
  margin-top: 8px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const InformationItem = styled.li`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 8px;
  text-transform: none;
`;
