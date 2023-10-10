import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
        <Link href="/">Loge</Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/issues">Issues</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
