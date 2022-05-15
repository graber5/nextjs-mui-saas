import { useState } from 'react';
import MobileNav from './MobileNav';
import NavData from './NavData';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import DeskNav from './DeskNav';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AuthBtn from './AuthBtn'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo'
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [nav, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!nav);
  };

  const navClose = () => {
    setNavOpen(false);
  };

  return (
    <Box
      component="nav"
      sx={{
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo navClose={navClose} />
      {matches ? (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 'auto' }}
            onClick={navToggle}
          >
            { nav ? <CloseIcon /> : <MenuIcon /> }
          </IconButton>
          <List
            sx={{
              position: 'fixed',
              top: '3.1rem',
              left: '0',
              right: '0',
              background: '#fff',
              boxShadow: 'rgb(170 180 190 / 30%) 0px 4px 20px',
            }}
            disablePadding
          >
            <Collapse in={nav} timeout="auto" unmountOnExit>
              {NavData.map((item, index) => (
                <MobileNav key={index} item={item} navClose={navClose} />
              ))}
            </Collapse>
          </List>
        </>
      ) : (
        <>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
            disablePadding
          >
            {NavData.map((item, index) => (
              <DeskNav key={index} item={item} />
            ))}
          </List>
        </>
      )}
      <AuthBtn navClose={navClose} />
    </Box>
  );
}
