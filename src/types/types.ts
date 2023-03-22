export type StoryType = {
  id: number;
  name: string;
  img: string;
};

export type PostType = {
  id: number;
  name: string;
  userId: number;
  profilePic: string;
  desc: string;
  img: string;
};

export type CommentType = {
  id: number;
  desc: string;
  name: string;
  userId: number;
  profilePic: string;
};
