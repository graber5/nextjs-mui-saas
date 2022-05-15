import NavBar from './NavBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <Box sx={{ borderBottom: '.1rem solid #ddd' }}>
      <Container maxWidth="md">
        <NavBar />
      </Container>
    </Box>
  );
}
