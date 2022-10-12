import React from "react";
import styled from "styled-components";

import logo from "../assets/images/logo-hompy.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { useSelector } from "react-redux";

export default function Login({ history }) {
  const theme = useSelector((state) => state.theme);
  const onLoginClick = () => {
    history.push("/admin/home");
  };

  return (
    <Container>
      <div style={{ width: 400 }}>
        <LogoContainer>
          <Image
            src={logo}
            style={{ filter: theme.mode === "dark" ? "brightness(0.1)" : "" }}
          />
        </LogoContainer>
        <Input placeholder="Username" label="Username" />
        <Input placeholder="Password" label="Password" type="password" />
        <Button
          insideForm
          type="secondary"
          title="Login"
          onClick={onLoginClick}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-image: radial-gradient(
    circle,
    ${(props) => props.theme.GRADIENT_COLORS.themed} 0%,
    ${(props) => props.theme.GRADIENT_COLORS.normal} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
`;
