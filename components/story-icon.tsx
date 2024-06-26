import { BookmarkIcon, BriefcaseIcon, MessagesSquare } from "lucide-react";

export default function StoryIcon({ type }: { type: string }) {
  if (type === "job") return <BriefcaseIcon />;
  if (type === "poll" || type === "pollopt") return <MessagesSquare />;
  return <BookmarkIcon />;
}
