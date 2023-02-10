import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loanDetail, workDetail } from "./redux/Actions/Actions";
import { useState } from "react";
import FormWrapper from "./component/Loanenquiry/FormWrapper";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingScren from "./component/LandingPage/LandingScren";
import LoanDetails from "./component/Loanenquiry/LoanDetails";
import Cardetails from "./component/Loanenquiry/CarDetails";
import Usages from "./component/Loanenquiry/Usages";
import axios from "axios";
import SelectCarDetail from "./component/Loanenquiry/SelectCarDetails";
import WorkDetails from "./component/Loanenquiry/WorkDetails";
import LoginDetails from "./component/Loanenquiry/LoginDetails";
import UserDetails from "./component/Loanenquiry/UserDetails";
import PersonalDetail from "./component/Loanenquiry/PersonalDetail";
import DrivingLicenceDetail from "./component/Loanenquiry/DrivingLicenceDetail";
import Income from "./component/Loanenquiry/Income";
import ExpensesDetails from "./component/Loanenquiry/ExpensesDetails";
import ResumeMyJourney from "./component/Loanenquiry/ResumeMyJourney";
import DashBoard from "./pages/DashBoard";
import Home from "./component/DashBoard/Home";
import Document from "./component/Loanenquiry/Document";
import Admin from "./pages/Admin";
import Agent from "./pages/Agent";
import PageNotFound from "./component/common/PageNotFound";

// import { Cardetails, LoanDetails } from "./component/Loanenquiry";
// axios.defaults.withCredentials = true;
function App() {
  const dispatch = useDispatch();
  const Authentication = useSelector((state) => state.Auth);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingScren} />
        <Route exact path="/leadRequest" component={LoanDetails} />
        <Route
          exact
          path="/leadRequest/choose-car"
          component={SelectCarDetail}
        />
        <Route exact path="/leadRequest/WorkDetails" component={WorkDetails} />
        <Route exact path="/leadRequest/log-in" component={LoginDetails} />

        <Route
          exact
          path="/leadRequest/resume-my-journey"
          component={ResumeMyJourney}
        />

        <Route
          exact
          path="/leadRequest/user-detail"
          render={(props) => <UserDetails Authentication={Authentication} />}
        />
        <Route
          exact
          path="/leadRequest/user-personal-detail"
          render={(props) => <PersonalDetail Authentication={Authentication} />}
        />
        <Route
          exact
          path="/leadRequest/user-driving-licence-detail"
          render={(props) => (
            <DrivingLicenceDetail Authentication={Authentication} />
          )}
        />
        <Route
          exact
          path="/leadRequest/income-details"
          render={(props) => <Income Authentication={Authentication} />}
        />
        <Route
          exact
          path="/leadRequest/expenses-details"
          render={(props) => (
            <ExpensesDetails Authentication={Authentication} />
          )}
        />
        <Route path="/dashboard">
          <DashBoard Authentication={Authentication} />
        </Route>

        <Route path="/leadRequest/document-verification">
          <Document Authentication={Authentication} />
        </Route>
        <Route path="/page-not-found">
          <PageNotFound />
        </Route>
        {/* Admin Routes */}
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/Agent">
          <Agent />
        </Route>
        {/* <Route exact path="/dashboard/Home" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
