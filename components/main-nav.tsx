"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 text-sm">
      {PAGES.map(({ path, title }) => (
        <Link
          key={path}
          href={path}
          className={cn(
            pathname === path
              ? "text-primary font-medium"
              : "text-muted-foreground",
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
