import React from "react";
import styled from "styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import { useSelector } from "react-redux";

export default function LateralMenu({
  setPage,
  history,
  setActiveButton,
  activeButton,
}) {
  const theme = useSelector((state) => state.theme);

  const onButtonClick = (page) => {
    setPage(page);
    setActiveButton(page);
    history.push(`/admin/${page}`);
  };

  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
          alt="Profile"
        />
      </ImageContainer>
      <Username onClick={() => onButtonClick("profile")}>
        Daniela Zapata
      </Username>
      <ButtonsContainer>
        <MenuButtonContainer
          onClick={() => onButtonClick("home")}
          className="hover"
        >
          <DashboardIcon
            style={{
              color:
                activeButton === "home"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          />
          <MenuButton
            style={{
              color:
                activeButton === "home"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          >
            Home
          </MenuButton>
        </MenuButtonContainer>

        <MenuButtonContainer
          onClick={() => onButtonClick("users")}
          className="hover"
        >
          <PeopleIcon
            style={{
              color:
                activeButton === "users"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          />
          <MenuButton
            style={{
              color:
                activeButton === "users"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          >
            Users
          </MenuButton>
        </MenuButtonContainer>

        <MenuButtonContainer
          onClick={() => onButtonClick("stores")}
          className="hover"
        >
          <StoreMallDirectoryIcon
            style={{
              color:
                activeButton === "stores"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          />
          <MenuButton
            style={{
              color:
                activeButton === "stores"
                  ? theme.PRIMARY_BUTTON_ACTIVE_COLOR
                  : theme.PRIMARY_BUTTON_NOT_ACTIVE_COLOR,
            }}
          >
            Stores
          </MenuButton>
        </MenuButtonContainer>
      </ButtonsContainer>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.PRIMARY_TEXT_MENU_COLOR};
  padding: 10px 0;
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_MENU_BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
`;

const ImageContainer = styled.div`
  padding-top: 10px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  object-fit: cover;
`;

const Username = styled.h2`
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
`;

const MenuButtonContainer = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const MenuButton = styled.div`
  margin-left: 5px;
  color: black;
`;
