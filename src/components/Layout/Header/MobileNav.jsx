import { useState } from 'react';
import Button from '@mui/material/Button';
import Link from '../../Link';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import NavLink from './NavLink'

export default function MobileNav({ item, navClose }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {item.childrens ? (
        <>
          <Button variant="link" sx={{ textTransform: 'none', fontSize: '1rem' }} onClick={handleClick}>
            {item.label}
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
