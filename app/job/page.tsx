import { Metadata } from "next";

import { fetcher, fetchStories } from "@/lib/api";
import { API_PATHS } from "@/lib/constants";
import { generateTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: generateTitle("Job"),
};

export default async function JobStories({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  const ids = await fetcher(API_PATHS.JOB_STORIES);
  const stories = await fetchStories(ids, searchParams?.page);

  return (
    <main>
      <pre>{JSON.stringify(stories, null, 2)}</pre>
    </main>
  );
}
