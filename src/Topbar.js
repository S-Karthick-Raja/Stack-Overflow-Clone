import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/Inbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HelpIcon from "@mui/icons-material/Help";
import ViewListIcon from "@mui/icons-material/ViewList";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export function Topbar() {
  return (
    <div className="Topbar">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
          alt="Stack-Overflow-LOGO" style={{ width: "120px", heigth: "50px", objectFit: "cover" }} />
        <Button variant="contained">Product</Button>
        <input placeholder="Search…" inputProps={{ ariaLabel: "search" }} style={{ width: "650px", height: "35px" }} />
        <Button > <AccountBoxIcon/> </Button>
        <Button > <InboxIcon /> </Button>
        <Button > <EmojiEventsIcon /> </Button>
        <Button > <HelpIcon /> </Button>
        <Button > <ViewListIcon /> </Button>  
    </div>
  );
}
