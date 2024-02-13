import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-10">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Web Article
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Posts</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
