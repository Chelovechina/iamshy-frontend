import { FC } from "react";

import "./leftBar.scss";
import userImg from "./../../assets/login.jpeg";
import Friends from "./../../assets/1.png";
import Group from "./../../assets/2.png";
import Market from "./../../assets/3.png";
import Watch from "./../../assets/4.png";
import Memories from "./../../assets/5.png";
import Events from "./../../assets/6.png";
import Gaming from "./../../assets/7.png";
import Gallery from "./../../assets/8.png";
import Messages from "./../../assets/10.png";

const LeftBar: FC = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={userImg} alt="Пользователь" />
            <span>Иван Иванов</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Друзья" />
            <span>Друзья</span>
          </div>
          <div className="item">
            <img src={Group} alt="Группы" />
            <span>Группы</span>
          </div>
          <div className="item">
            <img src={Market} alt="Магазин" />
            <span>Магазин</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Смотреть" />
            <span>Смотреть</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Воспоминания" />
            <span>Воспоминания</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Ваши ярлыки</span>
          <div className="item">
            <img src={Events} alt="События" />
            <span>События</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="Игры" />
            <span>Игры</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Галлерея" />
            <span>Галлерея</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Сообщения" />
            <span>Сообщения</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
