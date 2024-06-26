import { Metadata } from "next";

import MainPage from "@/components/main-page";
import { API_PATHS } from "@/lib/constants";
import { generateTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: generateTitle("Best"),
};

export default async function BestStories(
  props: React.ComponentProps<typeof MainPage>,
) {
  return <MainPage {...props} apiPath={API_PATHS.BEST_STORIES} />;
}
