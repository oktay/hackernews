import { BriefcaseIcon, FileIcon, MessagesSquare } from "lucide-react";

export default function StoryIcon({ type }: { type: string }) {
  if (type === "job") return <BriefcaseIcon />;
  if (type === "poll") return <MessagesSquare />;
  return <FileIcon />;
}
