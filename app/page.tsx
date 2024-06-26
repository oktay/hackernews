import { fetcher, fetchStories } from "@/lib/api";
import { API_PATHS } from "@/lib/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  const ids = await fetcher(API_PATHS.TOP_STORIES);
  const stories = await fetchStories(ids, searchParams?.page);

  return (
    <main>
      <pre>{JSON.stringify(stories, null, 2)}</pre>
    </main>
  );
}
