import { ArrowUpRight, MessageCircleIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { formatTimeAgo, formatUnixTime } from "@/lib/utils";
import { StoryType } from "@/types";

import StoryIcon from "./story-icon";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function StoryCard({ story }: { story: StoryType }) {
  return (
    <Card className="flex flex-col md:flex-row md:items-stretch md:p-4">
      <CardHeader className="p-2 md:p-0">
        <div className="p-2 rounded-full border hidden md:block">
          <StoryIcon type={story.type} />
        </div>
      </CardHeader>

      <CardContent className="flex-1 md:py-0 md:px-4">
        <CardDescription className="text-xs flex gap-1 flex-wrap">
          <Link href={`/user/${story.by}`} className="font-medium">
            {story.by}
          </Link>
          <span className="hidden md:block">&bull;</span>
          <span title={formatUnixTime(story.time)}>
            {formatTimeAgo(story.time)}
          </span>
        </CardDescription>
        <a href={story.url} target="_blank">
          <CardTitle className="text-sm leading-loose">
            {story.title}
            <ArrowUpRight
              className="inline-block align-middle ml-1"
              size={14}
            />
          </CardTitle>
        </a>
      </CardContent>

      <CardFooter className="md:p-0">
        <Link href={`/story/${story.id}`}>
          <Badge variant="outline" className="gap-1">
            <MessageCircleIcon size={12} /> {story.descendants}
            <StarIcon size={12} /> {story.score}
          </Badge>
        </Link>
      </CardFooter>
    </Card>
  );
}
