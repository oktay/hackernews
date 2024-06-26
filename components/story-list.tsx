import { StoryType } from "@/types";

import StoryCard from "./story-card";

export default function StoryList({ stories }: { stories: StoryType[] }) {
  return (
    <div className="flex flex-col gap-4">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
}
