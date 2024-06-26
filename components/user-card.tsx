import { UserIcon } from "lucide-react";
import Link from "next/link";

import { formatUnixDate } from "@/lib/utils";
import { UserType } from "@/types";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function UserCard({ user }: { user: UserType }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full border">
            <UserIcon />
          </div>
          <CardTitle>{user.id}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription className="mb-4">
          {user.about || "No description"}
        </CardDescription>

        <CardDescription>Karma: {user.karma}</CardDescription>
        <CardDescription>
          Created: {formatUnixDate(user.created)}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <Button>
          <Link href={`/user/${user.id}/submitted`}>
            Submissions ({user.submitted.length})
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
