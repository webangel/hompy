import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Button({
  insideForm,
  type = "primary",
  title,
  onClick,
}) {
  const theme = useSelector((state) => state.theme);

  return (
    <Container
      onClick={onClick}
      style={{
        margin: insideForm ? 10 : 0,
        backgroundColor:
          type === "secondary"
            ? theme.SECONDARY_BUTTON_ACTIVE_COLOR
            : theme.PRIMARY_BUTTON_COLOR,
      }}
    >
      {title}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.PRIMARY_BORDER_COLOR};
  border-radius: 5px;
  justify-content: center;
  color: ${(props) => props.theme.BUTTON_TEXT_ACTIVE_COLOR};
`;
