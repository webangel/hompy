import React from "react";
import styled from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";

export default function ChangePassword({ history, setPage }) {
  const handleChangePassword = () => {
    history.push("/admin/home");
    setPage("home");
  };

  return (
    <Container>
      <div style={{ width: 400 }}>
        <Input placeholder="Old password" type="password" />
        <Input placeholder="New password" type="password" />
        <Input placeholder="Repeat new password" type="password" />
        <Button
          insideForm
          type="secondary"
          title="Change Password"
          onClick={handleChangePassword}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
