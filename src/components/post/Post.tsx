import { FC, useState } from "react";

import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlined from "@mui/icons-material/TextsmsOutlined";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

import { PostType } from "../../types/types";
import "./post.scss";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const liked = false;

  return (
    <div className="post">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic} alt="Аватар пользователя" />
          <div className="details">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="name">{post.name}</span>
            </Link>
            <span className="date">1 минуту назад</span>
          </div>
        </div>
        <MoreHoriz />
      </div>

      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="Фото поста" />
      </div>

      <div className="info">
        <div className="item">
          {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
          12 Лайков
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlined />
          12 Коментариев
        </div>
        <div className="item">
          <ShareOutlined />
          Поделиться
        </div>
      </div>

      {commentOpen && <Comments />}
    </div>
  );
};

export default Post;
