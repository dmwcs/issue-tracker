import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

function NavBar() {
  const links = [
    { label: 'DashBoard', href: '/' },
    { label: 'Issues', href: '/' },
  ];

  return (
    <div>
      <nav className="space-x-6 border-b mb-5 px-5 h-14 flex items-center">
        <Link href="/">
          <AiFillBug />
        </Link>
        <ul className="flex space-x-6">
          {links.map(({ href, label }) => (
            <Link
              href={href}
              key={label}
              className="text-zinc-500 hover:text-zinc-800 transition-colors "
            >
              {label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
