import Link from "next/link";

import MainNav from "./main-nav";

export default function MainHeader() {
  return (
    <header className="bg-background border-b h-12 flex items-center sticky top-0">
      <div className="container flex items-center gap-4">
        <Link href="/" className="font-medium">
          HackerNews
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
