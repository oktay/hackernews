import { notFound } from "next/navigation";

import { fetcher, fetchStories } from "@/lib/api";

import MainPagination from "./main-pagination";
import StoryList from "./story-list";

export default async function MainPage({
  searchParams,
  apiPath,
}: {
  apiPath: string;
  searchParams: {
    page: number;
  };
}) {
  const ids = await fetcher(apiPath);
  const stories = await fetchStories(ids, searchParams?.page);

  if (!stories.length) notFound();

  return (
    <div className="container flex flex-col gap-8">
      <StoryList stories={stories} />
      <MainPagination page={searchParams?.page} total={ids.length} />
    </div>
  );
}
