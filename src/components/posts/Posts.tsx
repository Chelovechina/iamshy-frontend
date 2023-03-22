import { FC } from "react";
import "./posts.scss";
import profilePic from "./../../assets/login.jpeg";
import postPic from "./../../assets/register.jpeg";
import { PostType } from "../../types/types";
import Post from "../post/Post";

const Posts: FC = () => {
  const posts: PostType[] = [
    {
      id: 1,
      name: "Иван Иванов",
      userId: 1,
      profilePic: profilePic,
      desc: "Elit dolore modi ab in officiis Asperiores inventore.",
      img: postPic,
    },
    {
      id: 2,
      name: "Иван Иванов",
      userId: 1,
      profilePic: profilePic,
      desc: "Elit dolore modi ab in officiis Asperiores inventore.",
      img: postPic,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post: PostType) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
