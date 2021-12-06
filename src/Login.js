import Input from '@mui/material/Input';
import Button from "@mui/material/Button";

export function Login() {
  return (
    <div className="LoginPage">
      <Input placeholder="UserName" />
      <Input placeholder="Password" />
      <Button variant="contained">Login</Button>
    </div>
  );
}
