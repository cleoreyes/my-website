"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="navbar flex flex-col md:flex-row justify-between items-center rounded-full drop-shadow-2xl bg-neutral-800 px-8 py-4 mt-10 mx-40 text-white text-xl font-light fixed top-0 left-0 right-0 z-50">
      <div>
        <Link
          className={`navLink ${pathname === "/" ? "active" : ""}`}
          href="/"
        >
          Cleo Reyes
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
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
          <Link
            className={`navLink ${pathname === "/blog" ? "active" : ""}`}
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
