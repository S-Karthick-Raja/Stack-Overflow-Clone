import "./App.css";
import { Switch } from "react-router-dom";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { Bottom_navbar } from "./Bottom_navbar";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <Bottom_navbar/>
      <Switch></Switch>
    </div>
  );
}

