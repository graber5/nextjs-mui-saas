import { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import NavLink from './NavLink';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MobileNav({ item, navClose }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {item.childrens ? (
        <>
          <Button
            variant="link"
            sx={{ textTransform: 'none', fontSize: '1rem', justifyContent: 'space-between', width: '100%' }}
            onClick={handleClick}
          >
            {item.label}
            <ExpandMoreIcon
              sx={{
                transition: '0.3s',
                transform: open ? 'rotate(180deg)' : 'rotate(0)',
              }}
            />
          </Button>
          <Collapse in={open} animateOpacity>
            <List sx={{ pl: 2 }} disablePadding>
              {item.childrens.map((child, index) => (
                <MobileNav key={index} navClose={navClose} item={child} />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <NavLink item={item} navClose={navClose} />
      )}
    </>
  );
}
