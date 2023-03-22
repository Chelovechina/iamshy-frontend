import { FC } from "react";
import "./comments.scss";
import profilePic from "./../../assets/login.jpeg";
import { CommentType } from "../../types/types";

const Comments: FC = () => {
  const comments: CommentType[] = [
    {
      id: 1,
      desc: "Amet non commodi corporis nam necessitatibus Corporis porro magnam corrupti error doloribus! Facilis neque itaque",
      name: "Иван Иванов",
      userId: 1,
      profilePic: profilePic,
    },
    {
      id: 2,
      desc: "Amet non commodi corporis nam necessitatibus Corporis porro magnam corrupti error doloribus! Facilis neque itaque",
      name: "Иван Иванов",
      userId: 2,
      profilePic: profilePic,
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={profilePic} alt="Фото пользователя" />
        <input type="text" placeholder="Напишите комментарий" />
        <button>Отправить</button>
      </div>
      {comments.map((comment: CommentType) => (
        <div className="comment">
          <img src={comment.profilePic} alt="Фото пользователя" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 час назад</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
