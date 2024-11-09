import React from "react";

/* Styles */
import { Header } from "../styles/Common";

export default class NavBar extends React.Component {
  render() {
    const { title } = this.props;
    return <Header>{title}</Header>;
  }
}
