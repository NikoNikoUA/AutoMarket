import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const LogoText = styled.p`
  font-size: 50px;
  font-weight: bold;
  background-image: radial-gradient(
    circle at bottom left,
    ${(props) => props.theme.colors.mainColor} 50%,
    ${(props) => props.theme.colors.hoverColor} 50%
  );
  color: white;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const Li = styled.li`
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
`;

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.mainColor};
  transition: color 200ms ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.hoverColor};
  }

  &.active {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.hoverColor};
  }
`;
