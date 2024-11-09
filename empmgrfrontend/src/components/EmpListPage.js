import React from "react";
import axios from "axios";

/* Components */
import EmpList from "./EmpList";
import EmpListHeader from "./EmpListHeader";

/* Styles */
import { Container, Header, BodyWrapper } from "../styles/Common";

/* Utilities including Constants */
import { API_SERVER_URL, API_EMPLIST } from "../utils/Constants";

export default class EmpListPage extends React.Component {
  state = {
    emps: [],
  };

  componentDidMount() {
    axios
      .get(API_SERVER_URL + API_EMPLIST)
      .then((res) => {
        const emps = res.data;
        this.setState({ emps });
      })
      .catch((res) => {
        console.log("error");
      });
  }

  render() {
    const emps = this.state.emps;
    return (
      emps && (
        <Container>
          <BodyWrapper>
            <EmpListHeader count={emps.count} />
            <EmpList emps={emps.results} />
          </BodyWrapper>
        </Container>
      )
    );
  }
}
