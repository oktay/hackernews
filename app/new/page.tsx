import { Metadata } from "next";

import { fetcher, fetchStories } from "@/lib/api";
import { API_PATHS } from "@/lib/constants";
import { generateTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: generateTitle("New"),
};

export default async function NewStories({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  const ids = await fetcher(API_PATHS.NEW_STORIES);
  const stories = await fetchStories(ids, searchParams?.page);

  return (
    <main>
      <pre>{JSON.stringify(stories, null, 2)}</pre>
    </main>
  );
}
