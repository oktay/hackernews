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

export type UserType = {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
};

export type CommentType = {
  by?: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
  deleted?: boolean;
};
