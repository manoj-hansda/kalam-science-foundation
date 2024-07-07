import Link from "next/link";

const NavigationLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: 'Our Services',
    path: "/services",
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Our Team',
    path: '/team',

  },
  {
    name: "Founder's Desk",
    path: '/founders-desk'
  },
  {
    name: 'Donate',
    path: '/donate'
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Navigation = () => {
  return (
    <div className="bg-blue py-2">
      <ul className="max-w-6xl mx-auto md:flex justify-evenly text-center leading-10">
        {NavigationLinks.map((item) => (
          <MenuLink key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

const MenuLink = (props: { item: { name: string, path: string } }) => {
  const { item } = props;
  return (
    <li>
      <Link href={item.path}>{item.name}</Link>
    </li>
  )
}

export default Navigation;