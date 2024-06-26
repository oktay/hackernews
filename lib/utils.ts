import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { SEO_DEFAULTS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTitle(title: string) {
  return [title, SEO_DEFAULTS.TITLE_SUFFIX].join(" — ");
}
