import React from "react";

/* Styles */
import { ListItem } from "../styles/Common";
import { EmpContacts, EmpName } from "../styles/ListPage";

export default class EmpDetails extends React.Component {
  render() {
    const emp = this.props.emp;
    return (
      emp && (
        <ListItem>
          <EmpName>
            {emp.first_name} {emp.last_name} {emp.role && "(admin)"}
          </EmpName>
          <EmpContacts>{emp.email}</EmpContacts>
          <EmpContacts>{emp.phone_number}</EmpContacts>
        </ListItem>
      )
    );
  }
}
