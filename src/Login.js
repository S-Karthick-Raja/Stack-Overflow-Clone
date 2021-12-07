import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Switch, Route } from "react-router-dom";

export function LoginTopbar() {
  const history = useHistory();
return (
  <div className="LoginTopbar">
      <img onClick={ () => history.push("/Home")} className="Stackflow-Home" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
        alt="Stack-Overflow-LOGO" style={{ width: "120px", heigth: "50px", objectFit: "cover" }} />
      <p>About</p>
      <p>Product</p>
      <p>For Teams</p>
      <input placeholder="Search…" inputProps={{ ariaLabel: "search" }} style={{ width: "650px", height: "35px" }} />
      <Button onClick={ () => history.push("/Login")} variant="outlined" > LOGIN </Button>  
      <Button onClick={ () => history.push("/Login")} variant="contained" > SIGNUP </Button>  
  </div>
);
}

export function Login() {
  const history = useHistory();
  return (
    <div className="LoginPage">
       <FormControl variant="filled">
      <InputLabel shrink htmlFor="bootstrap-input">
          User Name
        </InputLabel>
      <TextField variant="filled" defaultValue="Karthick" />
      </FormControl>
      <FormControl variant="filled">
      <InputLabel shrink htmlFor="bootstrap-input">
         Password
        </InputLabel>
      <TextField variant="filled" type="password" defaultValue="react-reddit" />
      </FormControl>
      <Button onClick={ () => history.push("/Home")} variant="contained">Login</Button>
    </div>
  );
}
