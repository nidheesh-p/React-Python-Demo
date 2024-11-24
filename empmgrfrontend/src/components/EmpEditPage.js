import React from "react";
import axios from "axios";
import validator from 'validator';

/* Components */
import withRouter from "./withRouter";

/* Styles */
import RadioButton from "../styles/RadioButton";
import {
  Container,
  BodyWrapper,
  PageSubText,
  PageTitle,
  InputText,
  Label,
  Section,
  ButtonSection,
  SaveButton,
} from "../styles/Common";
import { DeleteButton } from "../styles/EditPage";

/* Utilities */
import { API_EMPLIST, API_SERVER_URL } from "../utils/Constants";
import { HOME_ROUTE } from "../utils/Routes";

class EmpEditPage extends React.Component {
  constructor(props) {
    super(props);
    // {first_name, last_name, email, phone_number, role } = props.location.state;
    this.state = props.location.state;
  }

  handleRadioButtonChange = (event) => {
    this.setState({ role: event.target.value == "admin" });
  };

  onSaveClick = () => {
    // Todo: Log API call Analytics
    // Todo: Validate the input fields before calling the API
    // Prevent API call if the validation is failed.
    if (validator.isEmpty(this.state.first_name) 
      || validator.isEmpty(this.state.last_name)
      || validator.isEmpty(this.state.email)
      || validator.isEmpty(this.state.phone_number)) {
        alert("Please enter valid data. All fields are mandatory!");
    } else if(!validator.isEmail(this.state.email)) {
      alert("Please enter valid email address");
    } else if(!validator.isMobilePhone(this.state.phone_number)) {
      alert("Please enter valid phone number");
    } else {
      axios
        .put(API_SERVER_URL + API_EMPLIST + "/" + this.state.id + "/", {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          phone_number: this.state.phone_number,
          role: this.state.role,
        })
        .then((res) => {
          alert("Team member details updated successfully");
          this.props.navigate(HOME_ROUTE);
        })
        .catch((res) => {
          alert("Error in updating the details");
          // Todo: Log error message for debugging
        });
    }
  };

  onDeleteClick = () => {
    // Todo: Log API call for Analytics
    axios
      .delete(API_SERVER_URL + API_EMPLIST + "/" + this.state.id + "/")
      .then((res) => {
        alert("Team member details deleted successfully!");
        this.props.navigate(HOME_ROUTE);
      })
      .catch((res) => {
        alert("Error in deleting the details");
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
          <PageTitle>Edit Team Member</PageTitle>
          <PageSubText>Edit contact info, location and role.</PageSubText>
          <Section>
            <Label>Info</Label>
            <InputText
              name="first_name"
              data-id="first_name"
              placeholder={"Enter First name"}
              value={this.state.first_name}
              onChange={this.onInputChanged}
            />
            <InputText
              name="last_name"
              data-id="last_name"
              placeholder={"Enter Last name"}
              value={this.state.last_name}
              onChange={this.onInputChanged}
            />
            <InputText
              name="email"
              data-id="email"
              placeholder={"Enter you email id"}
              value={this.state.email}
              onChange={this.onInputChanged}
            />
            <InputText
              name="phone_number"
              data-id="phone_number"
              placeholder={"Enter your phone number"}
              value={this.state.phone_number}
              onChange={this.onInputChanged}
            />
          </Section>
          <Section>
            <Label>Role</Label>
            <RadioButton
              label="Regular - Can't delete members"
              name="regular"
              value="regular"
              checked={this.state.role == false}
              onChange={this.handleRadioButtonChange}
            />
            <RadioButton
              label="Admin - Can delete members"
              name="admin"
              value="admin"
              checked={this.state.role == true}
              onChange={this.handleRadioButtonChange}
            />
          </Section>
          <ButtonSection>
            <DeleteButton onClick={this.onDeleteClick}>Delete</DeleteButton>
            <SaveButton onClick={this.onSaveClick}>Save</SaveButton>
          </ButtonSection>
        </BodyWrapper>
      </Container>
    );
  }
}

export default withRouter(EmpEditPage);
