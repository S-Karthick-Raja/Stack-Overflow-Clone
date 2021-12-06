import "./App.css";
import { Switch } from "react-router-dom";
import { Topbar } from "./Topbar";

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Switch></Switch>
    </div>
  );
}
