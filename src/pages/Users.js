import MaterialTable from "material-table";
import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../redux/actions/usersActions";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import styled from "styled-components";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function Users() {
  const { users, loading, error } = useSelector((state) => state.users);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users) {
      dispatch(getAllUsersAction());
    }
  }, [dispatch, users]);
  return (
    <Container>
      {loading && <h1>Loading users...</h1>}
      {error && <h1>Error</h1>}
      {users && (
        <MaterialTable
          icons={tableIcons}
          title="Users"
          options={{
            headerStyle: {
              backgroundColor: theme.TABLE_HEADER_BACKGROUND_COLOR,
              color: theme.PRIMARY_TEXT_COLOR,
            },
            cellStyle: {
              backgroundColor: theme.TABLE_CELL_BACKGROUND_COLOR,
              color: theme.PRIMARY_TEXT_COLOR,
            },
            searchFieldStyle: {
              color: theme.PRIMARY_TEXT_COLOR,
              backgroundColor: theme.TABLE_HEADER_BACKGROUND_COLOR,
            },
          }}
          columns={[
            {
              title: "ID",
              field: "id",
              type: "numeric",
            },
            {
              title: "Name",
              field: "name",
            },
            {
              title: "Email",
              field: "email",
            },
            {
              title: "Phone",
              field: "phone",
            },
          ]}
          data={users}
          actions={[
            {
              icon: Edit,
              iconProps: { style: { color: "red" } },
              tooltip: "Edit user",
              onClick: (event, rowData) =>
                alert("Editando usuario con ID: " + rowData.id),
            },
          ]}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  .MuiPaper-root,
  .MuiPaper-root div,
  .MuiPaper-root ul,
  .MuiList-padding,
  .MuiPaper-root li {
    background-color: ${(props) => props.theme.TABLE_HEADER_BACKGROUND_COLOR}!important;
    color: ${(props) => props.theme.PRIMARY_TEXT_COLOR}!important;
  }

  .MuiPaper-root span {
    color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  }
`;
