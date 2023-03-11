import { FC } from "react";

import "./rightBar.scss";
import userImg from "./../../assets/login.jpeg";

const RightBar: FC = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Рекомендации</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <span>Иван Иванов</span>
            </div>
            <div className="btns">
              <button>Подписаться</button>
              <button>Отклонить</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <span>Иван Иванов</span>
            </div>
            <div className="btns">
              <button>Подписаться</button>
              <button>Отклонить</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Последние дейстии</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <p>
                <span>Иван Иванов</span> изменил(а) свой аватар
              </p>
            </div>
            <span className="time">1 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <p>
                <span>Иван Иванов</span> изменил(а) свой аватар
              </p>
            </div>
            <span className="time">1 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <p>
                <span>Иван Иванов</span> изменил(а) свой аватар
              </p>
            </div>
            <span className="time">1 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <p>
                <span>Иван Иванов</span> изменил(а) свой аватар
              </p>
            </div>
            <span className="time">1 мин назад</span>
          </div>
        </div>

        <div className="item">
          <span>Онлайн</span>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <div className="online"></div>
              <span>Иван Иванов</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <div className="online"></div>
              <span>Иван Иванов</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <div className="online"></div>
              <span>Иван Иванов</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={userImg} alt="Фото пользователя" />
              <div className="online"></div>
              <span>Иван Иванов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
