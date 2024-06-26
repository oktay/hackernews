import { Metadata } from "next";

import MainPage from "@/components/main-page";
import { API_PATHS } from "@/lib/constants";
import { generateTitle } from "@/lib/utils";

export const metadata: Metadata = {
  title: generateTitle("Job"),
};

export default async function JobStories(
  props: React.ComponentProps<typeof MainPage>,
) {
  return <MainPage {...props} apiPath={API_PATHS.JOB_STORIES} />;
}
