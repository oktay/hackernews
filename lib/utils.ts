import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { SEO_DEFAULTS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTitle(title: string) {
  return [title, SEO_DEFAULTS.TITLE_SUFFIX].join(" — ");
}

export function formatUnixTime(time: number) {
  const date = new Date(time * 1000);
  return date.toLocaleString();
}

export function formatTimeAgo(time: number) {
  const date = new Date(time * 1000);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} days ago`;
}
