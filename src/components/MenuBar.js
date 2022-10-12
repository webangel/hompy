import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import logo from "../assets/images/logo-hompy.svg";
import { useSelector } from "react-redux";

export default function MenuBar({ setPage, history, setActiveButton }) {
  const theme = useSelector((state) => state.theme);

  const onButtonClick = (page) => {
    setPage(page);
    setActiveButton(page);
    history.push(`/admin/${page}`);
  };

  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <Container>
      <LogoContainer>
        <Image
          src={logo}
          onClick={() => onButtonClick("home")}
          style={{ filter: theme.mode === "dark" ? "brightness(0.9)" : "" }}
        />
      </LogoContainer>
      <LinksContainer>
        <MenuItem onClick={() => onButtonClick("profile")}>
          Daniela Zapata
        </MenuItem>
        <DropdownMenu className="dropdown-menu">
          <ExpandMoreIcon
            style={{ marginTop: 7, marginLeft: 10, marginRight: 20 }}
          />
          <DropdownContent className="dropdown-content">
            <li onClick={() => onButtonClick("change-password")}>
              Change password
            </li>
            <li onClick={() => onButtonClick("option2")}>Option 2</li>
            <li onClick={handleLogout}>Logout</li>
          </DropdownContent>
        </DropdownMenu>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.PRIMARY_TEXT_MENU_COLOR};
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: normal;
  background-color: ${(props) => props.theme.PRIMARY_MENU_BACKGROUND_COLOR};
  font-size: 1.1rem;
  user-select: none;
`;
const LogoContainer = styled.div``;

const Image = styled.img`
  cursor: pointer;
`;

const MenuItem = styled.div`
  align-self: center;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;

  text-decoration: none;
`;

const DropdownMenu = styled.div`
  align-self: center;
  cursor: pointer;
  transition: all ease 0.3s;
`;

const DropdownContent = styled.div`
  visibility: hidden;
  align-self: center;
  cursor: pointer;
  position: absolute;
  background-color: ${(props) => props.theme.PRIMARY_MENU_BACKGROUND_COLOR};
  right: 0px;
  min-width: 180px;
  padding: 20px 20px 0 20px;
  list-style: none;
  border-bottom-left-radius: 20px;
  font-size: 0.9rem;
  transition: all ease 0.3s;

  * {
    padding: 5px;
    margin-bottom: 20px;
    transition: padding 0.3s ease-in-out;
  }

  *:hover {
    padding-left: 15px;
  }
`;
