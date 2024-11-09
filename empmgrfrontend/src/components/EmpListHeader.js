import React from "react";

/* Components */
import withRouter from "./withRouter";

/* Styles */
import { EmpListHeaderStyle, EmpListHeaderText } from "../styles/ListPage";
import { PageSubText, PageTitle, ButtonWrapper } from "../styles/Common";

/* Images */
import PlusIcon from "../img/PlusIcon";

/* Utilities */
import { ADD_EMP_ROUTE } from "../utils/Routes";

class EmpListHeader extends React.Component {
  handleClick = () => {
    this.props.navigate(ADD_EMP_ROUTE);
  };

  render() {
    const { count } = this.props;
    return (
      <EmpListHeaderStyle>
        <EmpListHeaderText>
          <PageTitle>Team Members</PageTitle>
          <PageSubText>You have {count} team Members!</PageSubText>
        </EmpListHeaderText>
        <ButtonWrapper onClick={this.handleClick}>
          <PlusIcon />
        </ButtonWrapper>
      </EmpListHeaderStyle>
    );
  }
}

export default withRouter(EmpListHeader);
