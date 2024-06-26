import CommentCard from "@/components/comment-card";
import MainPagination from "@/components/main-pagination";
import StoryCard from "@/components/story-card";
import { fetchStories, fetchUser } from "@/lib/api";

export default async function SubmittedStories({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { page: number };
}) {
  const user = await fetchUser(params.id);
  const submitted = await fetchStories(user.submitted, searchParams.page);

  return (
    <div className="container flex flex-col gap-8">
      {submitted.map((item) => {
        if (item.type === "comment")
          return <CommentCard key={item.id} comment={item} />;
        return <StoryCard key={item.id} story={item} />;
      })}

      <MainPagination page={searchParams.page} total={user.submitted.length} />
    </div>
  );
}
