import styled from "styled-components";

export const Forma = styled.div``;

export const Svg = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
`;

export const Span = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 18px;

  line-height: 1.5;
  color: ${(props) => props.theme.colors.mainColor};
`;

export const FirstLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const InfoContainer = styled.div`
  width: 277px;
  height: 40px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 6px;
  row-gap: 4px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 14px;
`;

export const Item = styled.p`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      content: "";
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
    }
  }
`;

export const Descr = styled.p`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
  margin-bottom: 24px;
`;

export const Accessories = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;

  margin-bottom: 8px;
`;

export const ListOfItems = styled.p`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      content: "";
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
    }
  }
`;

export const List = styled.ul`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  display: inline-flex;
  height: 18px;
  gap: 6px;
  white-space: nowrap;
  overflow-y: hidden;
`;

export const ContainerForItems = styled.div`
  margin-bottom: 24px;
  overflow: hidden;
`;

export const RentalHeading = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;

  margin-bottom: 8px;
`;

export const ListOfRentalInfo = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;

  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;

  margin-bottom: 24px;
`;

export const SpanColor = styled.span`
  color: ${(props) => props.theme.colors.mainColor};
`;

export const RentalLi = styled.li`
  display: flex;
  gap: 2px;

  &.age {
    border-radius: 35px;
    padding: 7px 14px;
    width: 133px;
    height: 32px;
    background-color: #f9f9f9;
  }

  &.license {
    border-radius: 35px;
    padding: 7px 14px;
    width: 138px;
    height: 32px;
    background-color: #f9f9f9;
  }
  &.proof {
    border-radius: 35px;
    padding: 7px 14px;
    width: 175px;
    height: 32px;
    background-color: #f9f9f9;
  }
  &.mileage {
    border-radius: 35px;
    padding: 7px 14px;
    width: 111px;
    height: 32px;
    background-color: #f9f9f9;
  }
  &.price {
    border-radius: 35px;
    padding: 7px 14px;
    width: 86px;
    height: 32px;
    background-color: #f9f9f9;
  }
`;

export const ButtonRental = styled.button`
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  background-color: ${(props) => props.theme.colors.mainColor};
  transition: background-color 250ms ease-in-out;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }
`;
