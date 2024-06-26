export type StoryType = {
  id: number;
  by: string;
  descendants?: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
  text?: string;
};
