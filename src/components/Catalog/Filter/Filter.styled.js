import styled from "styled-components";
import { Form } from "formik";

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;
  color: white;

  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  border: none;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.mainColor};

  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }
`;

export const Label = styled.label`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 14px;

  line-height: 1.28571;
  color: #8a8a89;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
`;

export const Forma = styled(Form)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 18px;
`;

export const InputField = styled.input`
  border-radius: 14px;
  width: 224px;
  height: 48px;
  background-color: #f7f7fb;
  border: none;

  font-weight: 500;
  font-size: 18px;

  line-height: 1.11111;
  color: #121417;

  &.inputPrice {
    padding: 14px 18px;
    width: 125px;
    height: 48px;
  }

  &.inputFrom {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0 0 14px;
    width: 160px;
    height: 48px;
    padding: 14px 18px;
  }

  &.inputTo {
    border-radius: 0 14px 14px 0;
    width: 160px;
    height: 48px;
  }
`;

export const MilageInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
