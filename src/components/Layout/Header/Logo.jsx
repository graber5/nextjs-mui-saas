import Link from '../../Link';

export default function Logo({navClose}) {
  return (
    <>
      <Link sx={{ textDecoration: 'none', fontWeight: '500' }} color='inherit' href="/" onClick={navClose}>
        Logo
      </Link>
    </>
  );
}
