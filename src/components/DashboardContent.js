import React from "react";
import styled from "styled-components";
import ChangePassword from "../pages/ChangePassword";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Stores from "../pages/Stores";
import Users from "../pages/Users";

export default function DashboardContent({ page = "home", history, setPage }) {
  return (
    <Container>
      {page === "home" ? (
        <Home />
      ) : page === "users" ? (
        <Users />
      ) : page === "stores" ? (
        <Stores />
      ) : page === "profile" ? (
        <Profile />
      ) : page === "change-password" ? (
        <ChangePassword history={history} setPage={setPage} />
      ) : (
        <h2 style={{ textAlign: "center" }}>There is no content to show</h2>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
  padding: 20px;
  border-top-left-radius: 20px;
`;
