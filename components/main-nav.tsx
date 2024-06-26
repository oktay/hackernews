import Link from "next/link";

import { PAGES } from "@/lib/constants";

export default function MainNav() {
  return (
    <nav>
      {PAGES.map(({ path, title }) => (
        <Link key={path} href={path}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
