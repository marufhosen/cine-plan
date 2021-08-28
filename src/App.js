import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader/NavHeader";
import Login from "./components/Login/Login";
import { useState } from "react";
import { createContext } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import BuyTicket from "./components/BuyTicket/BuyTicket";
import TicketPrice from "./components/TicketPrice/TicketPrice";
import Career from "./components/Career/Career";
import Profile from "./components/Profile/Profile";

export const userContext = createContext();

function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <Router>
        <NavHeader></NavHeader>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/ticketprice">
            <TicketPrice></TicketPrice>
          </Route>
          <Route path="/career">
            <Career></Career>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <PrivateRoute path="/buyticket">
            <BuyTicket></BuyTicket>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
