import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar flex flex-col md:flex-row justify-between items-center rounded-full drop-shadow-2xl bg-neutral-800 px-10 py-6 mt-10 mx-40 text-white text-xl font-light fixed top-0 left-0 right-0 z-50">
      <div>
        <Link href="/">
          Cleo Reyes
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
          <Link href="/">
            Projects
          </Link>
          <Link href="/">
            Experience
          </Link>
          <Link href="/">
            About Me
          </Link>
          <Link href="/">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
