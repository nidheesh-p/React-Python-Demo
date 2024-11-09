import React from "react";
import { ListView } from "../styles/Common";
import Emp from "./Emp";

export default class EmpList extends React.Component {
  render() {
    const emps = this.props.emps;
    return (
      <ListView>
        {emps && emps.map((emp, index) => <Emp key={index} emp={emp} />)}
      </ListView>
    );
  }
}
