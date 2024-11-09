import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* Components */
import EmpListPage from "./components/EmpListPage";
import EmpAddPage from "./components/EmpAddPage";
import EmpEditPage from "./components/EmpEditPage";
import NavBar from "./components/NavBar";

/* Utilities */
import { HOME_ROUTE, ADD_EMP_ROUTE, EDIT_EMP_ROUTE } from "./utils/Routes";
import {
  PAGE_TITLE_ADD,
  PAGE_TITLE_EDIT,
  PAGE_TITLE_LIST,
} from "./utils/Constants";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState();

  // Update page title based on current route
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle(PAGE_TITLE_LIST);
        break;
      case "/add":
        setPageTitle(PAGE_TITLE_ADD);
        break;
      case "/edit":
        setPageTitle(PAGE_TITLE_EDIT);
        break;
      default:
        setPageTitle(PAGE_TITLE_LIST);
    }
  }, [location]);

  return (
    <div className="App">
      <NavBar title={pageTitle} />
      <Routes>
        <Route exact path={HOME_ROUTE} element={<EmpListPage />} />

        <Route exact path={ADD_EMP_ROUTE} element={<EmpAddPage />} />

        <Route exact path={EDIT_EMP_ROUTE} element={<EmpEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
