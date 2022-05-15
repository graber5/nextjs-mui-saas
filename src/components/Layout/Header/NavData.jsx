export const NavData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Contact',
    childrens: [
      {
        label: 'Phone',
        href: '/phone',
      },
      {
        label: 'Email',
        href: '/email',
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
]

export default NavData;