import Link from "next/link";
import { FaBug } from "react-icons/fa"

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 h-14 items-center border-b px-5 mb-5">
      <Link href="/"><FaBug /></Link>
      
      <ul className="flex space-x-6 ">
        {links.map((link) => (
          <Link href={link.href} key={link.href} className="text-zinc-500 hover:text-zinc-900 transition-colors">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
