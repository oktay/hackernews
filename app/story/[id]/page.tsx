import CommentCard from "@/components/comment-card";
import StoryCard from "@/components/story-card";
import { Card, CardContent } from "@/components/ui/card";
import { fetchItems, fetchStory } from "@/lib/api";

export default async function StoryPage({
  params,
}: {
  params: { id: number };
}) {
  const story = await fetchStory(params.id);
  const comments = story.kids ? await fetchItems(story.kids) : [];

  return (
    <div className="container flex flex-col gap-4">
      <StoryCard story={story} />

      {story.text && (
        <Card>
          <CardContent className="pt-8">
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: story.text }}
            />
          </CardContent>
        </Card>
      )}

      <h2 className="text-xl font-semibold">Comments</h2>

      {comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}

      {!comments.length && <p className="text-muted-foreground">No comments</p>}
    </div>
  );
}
