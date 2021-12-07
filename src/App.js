import "./App.css";
import { Topbar, Sidebar } from "./Home";
import { BottomNavbar } from "./BottomNavbar";
import { Switch, Route } from "react-router-dom";
import { Question } from "./Question";
import {LoginTopbar,Login} from "./Login"

export default function App() {
  return (
    <div className="App">
      {/* <Topbar /> */}
      <Switch>
      <Route exact path="/">
          <Topbar /> <Sidebar /> <BottomNavbar />
        </Route>
        <Route exact path="/login">
         <LoginTopbar /> <Login />
        </Route>
        <Route exact path="/question/ask">
          <Topbar /> <Question /> <BottomNavbar />
        </Route>
        <Route exact path="/home">
          <Topbar /> <Sidebar /> <BottomNavbar />
        </Route>
      </Switch>
      {/* <Sidebar /> */}
      {/* <BottomNavbar /> */}
    </div>
  );
}
