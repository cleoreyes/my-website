"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="navbar flex flex-row justify-between items-center md:rounded-full drop-shadow-2xl bg-neutral-800 md:px-8 py-2 md:py-4 md:mx-40 text-white text-xs md:text-xl md:mt-10 font-light fixed top-0 left-0 right-0 z-50 overflow-x-auto">
      <div>
        <Link
          className={`navLink ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          Cleo Reyes
        </Link>
      </div>

      <div
        className={`flex flex-row md:flex-row justify-between items-center gap-2 md:gap-10`}
      >
        <Link
          className={`navLink ${pathname === "/projects" ? "active" : ""}`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`navLink ${pathname === "/experience" ? "active" : ""}`}
          href="/experience"
        >
          Experience
        </Link>
        <Link
          className={`navLink ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          About
        </Link>
        {/* <Link
          className={`navLink ${pathname === "/blog" ? "active" : ""}`}
          href="/blog"
        >
          Blog
        </Link> */}
      </div>
    </nav>
  );
}
