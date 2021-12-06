import Button from "@mui/material/Button";
import PublicIcon from '@mui/icons-material/Public';

export function Sidebar() {
  return (
    <div className="sidebar ">
      <Button style={{ paddingLeft: "30px", paddingRight: "93px" }}>Home</Button>
      <Button style={{ paddingLeft: "30px", paddingRight: "85px" }}>PUBLIC</Button>
      <Button style={{ paddingLeft: "30px", paddingRight: "28px" }}> <PublicIcon />Questions</Button>
      <Button style={{ paddingLeft: "50px", paddingRight: "73px" }}>*Tags</Button>
      <Button style={{ paddingLeft: "50px", paddingRight: "62px" }}>*Users</Button>
      <Button style={{ paddingLeft: "30px", paddingRight: "37px" }}>COLLECTIVES</Button>
      <Button style={{ paddingLeft: "30px", paddingRight: "55px" }}>FIND A JOB</Button>
      <Button style={{ paddingLeft: "50px", paddingRight: "72px" }}>*Jobs</Button>
      <Button style={{ paddingLeft: "50px", paddingRight: "26px" }}>*Compaines</Button>
      <Button style={{ paddingLeft: "30px", paddingRight: "87px" }}>TEAMS</Button>
    </div>
  );
}
