import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/Inbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpIcon from "@mui/icons-material/Help";
import ViewListIcon from "@mui/icons-material/ViewList";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import PublicIcon from '@mui/icons-material/Public';
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import EditIcon from '@mui/icons-material/Edit';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

export function Topbar() {
    const history = useHistory();
  return (
    <div className="Topbar">
        <img onClick={ () => history.push("/Home")} className="Stackflow-Home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
          alt="Stack-Overflow-LOGO" style={{ width: "120px", heigth: "50px", objectFit: "cover" }} />
        <Button variant="contained">Product</Button>
        <input placeholder="Search…" inputProps={{ ariaLabel: "search" }} style={{ width: "650px", height: "35px" }} />
        <Button > <AccountBoxIcon/> </Button>
        <Button > <InboxIcon /> </Button>
        <Button > <EmojiEventsIcon /> </Button>
        <Button > <HelpIcon /> </Button>
        <Button > <ViewListIcon /> </Button>  
        <Button onClick={ () => history.push("/Login")} variant="outlined" > LOGIN </Button>  
            <Switch>
            <Route exact path="/Login"> <Login /> </Route>
            </Switch>
    </div>
  );
}

export function Sidebar() {
    const history = useHistory();
    return (
    <div className="BelowNavbar">
      <div className="sidebar">
            <Button className="SidebarBttn" style={{ paddingLeft: "30px", paddingRight: "93px" , color:"rgb(24,24,24)"}}>Home</Button>
            <Button style={{ paddingLeft: "30px", paddingRight: "28px", color:"rgb(24,24,24)" }}> <PublicIcon />Questions</Button>
            <Button style={{ paddingLeft: "30px", paddingRight: "85px", color:"rgb(24,24,24)" }}>PUBLIC</Button>
            <Button style={{ paddingLeft: "50px", paddingRight: "73px", color:"rgb(24,24,24)" }}>*Tags</Button>
            <Button style={{ paddingLeft: "50px", paddingRight: "62px", color:"rgb(24,24,24)" }}>*Users</Button>
            <Button style={{ paddingLeft: "30px", paddingRight: "37px", color:"rgb(24,24,24)" }}>COLLECTIVES</Button>
            <Button style={{ paddingLeft: "30px", paddingRight: "55px", color:"rgb(24,24,24)" }}>FIND A JOB</Button>
            <Button style={{ paddingLeft: "50px", paddingRight: "72px", color:"rgb(24,24,24)" }}>*Jobs</Button>
            <Button style={{ paddingLeft: "50px", paddingRight: "26px", color:"rgb(24,24,24)" }}>*Compaines</Button>
            <Button style={{ paddingLeft: "30px", paddingRight: "87px", color:"rgb(24,24,24)" }}>TEAMS</Button>
        </div>
        <div className="maincontent">
            <h1 className="text">Top Questions</h1>
            <Button variant="contained" onClick={ () => history.push("/question/ask")}>Ask Question</Button>
        </div>
        <div className="sidebarRight">
            <h5 className="highlights">  The Overflow Blog</h5>
            <p><EditIcon/>Podcast 397: Is crypto the key to a democratizing the metaverse?</p>
            <h5 className="highlights">Featured on Meta</h5>
            <p><StackedLineChartIcon /> Reducing the weight of our footer</p>
            <p><StackedLineChartIcon />Upcoming responsive Activity page</p>
            <p><StackedBarChartIcon /> Two B or not two B - Farewell, BoltClock and Bhargav!</p>
            <p><StackedBarChartIcon />Community input needed: The rules for collectives articles</p>
            <h5 className="highlights">Hot Meta Posts</h5>
            <p>Is this question really not close worthy?</p>
            <h5 className="highlights">Hot Network Questions</h5>
        </div>
    </div>
    );
  }


