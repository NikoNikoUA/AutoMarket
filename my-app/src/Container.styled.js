import styled from "styled-components";

export const Container = styled.div`
  min-width: 1440px;
  padding: 150px 128px;
  display: flex;
  justify-content: center;
`;

export const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
export const FavCarsContainer = styled.ul`
  width: 1184px;
  display: flex;
  column-gap: 29px;
  row-gap: 50px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NotFoundMessage = styled.div`
  color: red;
  font-size: 18px;
`;
