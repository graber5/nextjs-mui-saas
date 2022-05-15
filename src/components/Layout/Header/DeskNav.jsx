import { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import NavLink from './NavLink'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DeskNav({ item, navClose }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      {item.childrens ? (
        <>
          <Button aria-describedby={id} sx={{ textTransform: 'none', fontSize: '1rem'}} variant="text" color="inherit" onClick={handleClick}>
            {item.label}
            <ExpandMoreIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <List  sx={{ minWidth: '10rem' }} disablePadding>
              {item.childrens.map((child, index) => (
                <DeskNav key={index} item={child} navClose={handleClose} />
              ))}
            </List>
          </Popover>
        </>
      ) : (
        <NavLink item={item} navClose={navClose} />
      )}
    </>
  );
}
