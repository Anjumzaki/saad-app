import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyNavbar from './MyNavbar'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import './App.css'
import DashBoard from './DashBoard'
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
      <MyNavbar/>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/DashBoard">
            <DashBoard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

// You can think of these components as "pages"
// in your app.
