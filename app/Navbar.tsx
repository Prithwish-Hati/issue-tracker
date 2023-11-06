"use client"; // For using usePathName hook

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 h-14 items-center border-b px-5 mb-5">
      <Link href="/">
        <FaBug />
      </Link>

      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={classnames({
              "text-zinc-900": link.href == currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
