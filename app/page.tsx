import MainPage from "@/components/main-page";
import { API_PATHS } from "@/lib/constants";

export default async function Home(
  props: React.ComponentProps<typeof MainPage>,
) {
  return <MainPage {...props} apiPath={API_PATHS.TOP_STORIES} />;
}
