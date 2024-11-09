import React from "react";

/* Components */
import withRouter from "./withRouter";
import EmpDetails from "./EmpDetails";

/* Styles */
import { ListRow } from "../styles/Common";

/* Images */
import EmpPhotoIcon from "../img/EmpPhotoIcon";

/* Utilities */
import { EDIT_EMP_ROUTE } from "../utils/Routes";

class Emp extends React.Component {
  onClick = () => {
    const emp = this.props.emp;
    this.props.navigate(EDIT_EMP_ROUTE, { state: emp });
  };

  render() {
    const emp = this.props.emp;
    return (
      <ListRow onClick={this.onClick}>
        <EmpPhotoIcon />
        <EmpDetails key={this.props.id} emp={emp} />
      </ListRow>
    );
  }
}
export default withRouter(Emp);
