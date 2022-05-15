import Button from '@mui/material/Button';

export default function AuthBtn({navClose}) {
  return (
    <>
      <Button variant="outlined" sx={{ borderWidth: '.13rem' }} color="inherit" onClick={navClose}>Login</Button>
    </>
  );
}
