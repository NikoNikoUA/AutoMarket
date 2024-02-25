import styled from "styled-components";

// ====================== Home Page =======================

export const Background = styled.section`
  background-image: ${(props) => props.$url || "none"};
  overflow: hidden;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 85%;
`;

export const Text = styled.p`
  position: absolute;
  top: 80px;
  left: 100px;
  width: 700px;
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.mainColor};
  font-size: 25px;
  font-weight: bold;
`;

// =================== Catalog =========================

export const Container = styled.div`
  min-width: 1440px;
  padding: 100px 128px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

// =================== FAVORITE =======================

export const FavCarsContainer = styled.ul`
  width: 1184px;
  display: flex;
  column-gap: 29px;
  row-gap: 50px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NotFoundMessage = styled.div`
  color: red;
  font-size: 18px;
`;
