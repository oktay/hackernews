import { API_URL, PAGE_SIZE } from "./constants";

export const fetcher = async (path: string) => {
  const res = await fetch(`${API_URL}${path}`);
  return await res.json();
};

export const fetchStory = async (id: number) => {
  return fetcher(`/item/${id}.json`);
};

export const fetchUser = async (id: string) => {
  return fetcher(`/user/${id}.json`);
};

export const fetchItems = async (ids: number[]) => {
  return Promise.all(ids.map((id) => fetchStory(id)));
};

export const fetchStories = async (ids: number[], page: number = 1) => {
  return await fetchItems(
    ids.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1),
  );
};
