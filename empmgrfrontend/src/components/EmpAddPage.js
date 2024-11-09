import React from "react";
import axios from "axios";

/* Components */
import withRouter from "./withRouter";

/* Styles */
import {
  Container,
  BodyWrapper,
  InputText,
  Label,
  Section,
  Button,
  ButtonSection,
  SaveButton,
} from "../styles/Common";
import { PageSubText, PageTitle } from "../styles/Common";
import RadioButton from "../styles/RadioButton";

/* Utilities */
import { API_EMPLIST, API_SERVER_URL } from "../utils/Constants";
import { HOME_ROUTE } from "../utils/Routes";

class EmpAddPage extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "regular",
  };

  handleRadioButtonChange = (event) => {
    this.setState({ role: event.target.value });
  };

  onSaveClick = (event) => {
    // Todo: Log API call Analytics
    // Todo: Validate the input fields before calling the API.
    // Prevent API call if the validation is failed.
    axios
      .post(API_SERVER_URL + API_EMPLIST + "/", {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        role: this.state.role == "admin",
      })
      .then((res) => {
        alert(
          "New team member " +
            this.state.first_name +
            " " +
            this.state.last_name +
            " added successfully!"
        );
        this.props.navigate(HOME_ROUTE);
      })
      .catch((res) => {
        alert("Error in adding a new team member");
        // Todo: Log error message for debugging
      });
  };

  onInputChanged = (event) => {
    this.setState({ [event.target.dataset.id]: event.target.value });
  };

  render() {
    return (
      <Container>
        <BodyWrapper>
          <PageTitle>Add a Team Member</PageTitle>
          <PageSubText>Set email, location and role.</PageSubText>
          <Section>
            <Label>Info</Label>
            <InputText
              name="first_name"
              data-id="first_name"
              placeholder={"Enter First name"}
              onChange={this.onInputChanged}
            />
            <InputText
              name="last_name"
              data-id="last_name"
              placeholder={"Enter Last name"}
              onChange={this.onInputChanged}
            />
            <InputText
              name="email"
              data-id="email"
              placeholder={"Enter you email id"}
              onChange={this.onInputChanged}
            />
            <InputText
              name="phone_number"
              data-id="phone_number"
              placeholder={"Enter your phone number"}
              onChange={this.onInputChanged}
            />
          </Section>
          <Section>
            <Label>Role</Label>
            <RadioButton
              label="Regular - Can't delete members"
              name="regular"
              value="regular"
              checked={this.state.role === "regular"}
              onChange={this.handleRadioButtonChange}
            />
            <RadioButton
              label="Admin - Can delete members"
              name="admin"
              value="admin"
              checked={this.state.role === "admin"}
              onChange={this.handleRadioButtonChange}
            />
          </Section>
          <ButtonSection>
            <SaveButton onClick={this.onSaveClick}>Save</SaveButton>
          </ButtonSection>
        </BodyWrapper>
      </Container>
    );
  }
}

export default withRouter(EmpAddPage);
