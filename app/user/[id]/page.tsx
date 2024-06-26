import UserCard from "@/components/user-card";
import { fetchUser } from "@/lib/api";

export default async function UserPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user = await fetchUser(params.id);
  return (
    <div className="container">
      <UserCard user={user} />
    </div>
  );
}
