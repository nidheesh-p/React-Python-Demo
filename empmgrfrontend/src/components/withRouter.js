import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// This HOC is created to support navigation between pages
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        location={location}
        navigate={(to, options) => navigate(to, options)}
        params={params}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
