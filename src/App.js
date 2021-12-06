import "./App.css";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { BottomNavbar } from "./BottomNavbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./Login";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Login/>
      <BottomNavbar/>
      <Switch>
      </Switch>
    </div>
  );
}


