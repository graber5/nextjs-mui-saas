import Link from '../../Link';
import ListItem from '@mui/material/ListItem';

export default function NavLink({ item, navClose }) {
  return (
    <>
      <ListItem>
        <Link
          sx={{ textDecoration: 'none', fontWeight: '500', flex: '1' }}
          color="inherit"
          href={item.href}
          onClick={navClose}
        >
          {item.label}
        </Link>
      </ListItem>
    </>
  );
}
