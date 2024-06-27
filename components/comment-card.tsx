import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { fetchItems } from "@/lib/api";
import { cn, formatTimeAgo } from "@/lib/utils";
import { CommentType } from "@/types";

import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default async function CommentCard({
  comment,
  sub,
}: {
  comment: CommentType;
  sub?: boolean;
}) {
  const replys = !sub && comment.kids ? await fetchItems(comment.kids) : [];

  return (
    <Card className={cn("w-full", sub && "bg-muted")}>
      <CardHeader className="text-sm text-muted-foreground">
        <div>
          {comment.by ? (
            <Link href={`/user/${comment.by}`} className="inline">
              {comment.by}
            </Link>
          ) : (
            <span>[deleted]</span>
          )}
          <span className="mx-2">&bull;</span>
          <Link href={`/comment/${comment.id}`} className="inline">
            {formatTimeAgo(comment.time)}
          </Link>
        </div>
      </CardHeader>

      <CardContent>
        <div
          className="space-y-2"
          dangerouslySetInnerHTML={{ __html: comment.text || "[deleted]" }}
        />
      </CardContent>

      {replys && (
        <CardFooter className="flex flex-col items-start gap-2">
          {replys.map((reply) => (
            <CommentCard key={reply.id} comment={reply} sub />
          ))}
        </CardFooter>
      )}

      {sub && comment.kids && (
        <CardFooter className="text-sm font-semibold text-muted-foreground">
          <Link href={`/comment/${comment.id}`} className="flex items-center">
            {comment.kids.length} reply{" "}
            <ChevronRightIcon size={14} className="ml-2" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
