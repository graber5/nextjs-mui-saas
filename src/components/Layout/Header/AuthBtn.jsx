import Button from '@mui/material/Button';

export default function AuthBtn({navClose}) {
  return (
    <>
      <Button variant="contained" color="inherit" onClick={navClose}>Login</Button>
    </>
  );
}
