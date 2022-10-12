import React, { useState } from "react";
import styled from "styled-components";
import DashboardContent from "../components/DashboardContent";
import LateralMenu from "../components/LateralMenu";
import MenuBar from "../components/MenuBar";

export default function Dashborad({ match, history }) {
  const {
    params: { page: argsPage },
  } = match;

  const [page, setPage] = useState(argsPage);
  const [activeButton, setActiveButton] = useState(argsPage);

  return (
    <Container>
      <LeftSubContainer>
        <LateralMenu
          setPage={setPage}
          history={history}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </LeftSubContainer>
      <RightSubContainer>
        <MenuBar
          setPage={setPage}
          history={history}
          setActiveButton={setActiveButton}
        />
        <DashboardContent page={page} history={history} setPage={setPage} />
      </RightSubContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_MENU_BACKGROUND_COLOR};
  height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
`;

const LeftSubContainer = styled.div`
  display: flex;
`;
const RightSubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
