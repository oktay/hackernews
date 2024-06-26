import CommentCard from "@/components/comment-card";
import { fetchStory } from "@/lib/api";

export default async function StoryPage({
  params,
}: {
  params: { id: number };
}) {
  const story = await fetchStory(params.id);

  return (
    <div className="container flex flex-col gap-4">
      <CommentCard comment={story} />
    </div>
  );
}
