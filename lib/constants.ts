export const API_URL = "https://hacker-news.firebaseio.com/v0";
export const PAGE_SIZE = 10;

export const API_PATHS = {
  TOP_STORIES: "/topstories.json",
  NEW_STORIES: "/newstories.json",
  BEST_STORIES: "/beststories.json",
  ASK_STORIES: "/askstories.json",
  SHOW_STORIES: "/showstories.json",
  JOB_STORIES: "/jobstories.json",
  ITEM: "/item",
  USER: "/user",
};

export const PAGES = [
  { title: "New", path: "/new" },
  { title: "Best", path: "/best" },
  { title: "Ask", path: "/ask" },
  { title: "Show", path: "/show" },
  { title: "Job", path: "/job" },
];

export const SEO_DEFAULTS = {
  TITLE: "Hacker News",
  DESCRIPTION: "The best place to read and share the latest hacker news.",
  TITLE_SUFFIX: "Hacker News",
};
