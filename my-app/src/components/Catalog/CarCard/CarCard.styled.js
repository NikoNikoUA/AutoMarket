import styled from "styled-components";
import Modal from "react-modal";

export const CardContainer = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  /* fill: none; */
  stroke-width: 1.5px;
  /* stroke: rgba(255, 255, 255, 0.8); */

  fill: ${(props) =>
    props.isCarFavorite ? props.theme.colors.mainColor : "none"};
  stroke: ${(props) =>
    props.isCarFavorite
      ? props.theme.colors.mainColor
      : "rgba(255, 255, 255, 0.8)"};
`;

export const Span = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;

  line-height: 1.5;
  color: ${(props) => props.theme.colors.mainColor};
`;

export const FirstLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 6px;
  row-gap: 4px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  margin-bottom: 28px;
`;

export const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  border-radius: 12px;
  padding: 12px 99px;
  height: 44px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 1.42857;
  color: #fff;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }
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

export const CustomModal = styled(Modal)`
  position: relative;
  border-radius: 24px;
  width: 541px;
  height: 752px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 40px;
  border: 1px solid ${(props) => props.theme.colors.mainColor};
`;
