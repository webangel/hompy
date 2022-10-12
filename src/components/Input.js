import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useSelector } from "react-redux";

export default function Input({
  placeholder,
  onChange,
  label,
  labelStyle,
  type,
  border,
}) {
  const theme = useSelector((state) => state.theme);
  const [passwordtype, setPasswordType] = useState("password");

  const eyeClickHandler = () => {
    setPasswordType(passwordtype === "password" ? "text" : "password");
  };

  return (
    <Container>
      {label && <Label style={labelStyle}>{label}</Label>}
      <InputContainer style={{ border: border ? "1px solid" : "" }}>
        <FormInput
          placeholder={placeholder}
          type={type === "password" ? passwordtype : type}
          onChange={onChange}
        ></FormInput>
        {type === "password" &&
          (passwordtype === "password" ? (
            <VisibilityIcon
              style={{ color: theme.PLACEHOLDER_TEXT_COLOR, cursor: "pointer" }}
              onClick={eyeClickHandler}
            />
          ) : (
            <VisibilityOffIcon
              style={{ color: theme.PLACEHOLDER_TEXT_COLOR, cursor: "pointer" }}
              onClick={eyeClickHandler}
            />
          ))}
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: ${(props) => props.theme.PRIMARY_TEXT_MENU_COLOR};
  font-weight: 500;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.INPUT_BACKGROUND_COLOR};
  border: solid;
  border-width: 0 0 3px 0;
  border-color: ${(props) => props.theme.PRIMARY_BORDER_COLOR};
  padding-right: 5px;
  border-radius: 5px;
  overflow: hidden;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 10px 5px;
  border: 0;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  background-color: ${(props) => props.theme.INPUT_BACKGROUND_COLOR};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.PLACEHOLDER_TEXT_COLOR};
  }
`;
