'use client';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

function NavBar() {
  const currentPath = usePathname();

  const links = [
    { label: 'DashBoard', href: '/dashBoard' },
    { label: 'Issues', href: '/issues' },
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
              key={href}
              className={classNames({
                'text-zinc-900': href === currentPath,
                'text-zinc-500': href !== currentPath,
                'hover:text-zinc-800 transition-colors': true,
              })}
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
