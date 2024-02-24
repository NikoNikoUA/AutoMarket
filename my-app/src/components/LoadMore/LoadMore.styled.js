import styled from "styled-components";

export const ButtonLoadMore = styled.button`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;

  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(props) => props.theme.colors.mainColor};
  transition: color 250ms ease-in-out;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.hoverColor};
  }
`;
