import { FC } from "react";

import FacebookTwoTone from "@mui/icons-material/FacebookTwoTone";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Pinterest from "@mui/icons-material/Pinterest";
import Twitter from "@mui/icons-material/Twitter";
import Place from "@mui/icons-material/Place";
import Language from "@mui/icons-material/Language";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import MoreVert from "@mui/icons-material/MoreVert";

import coverImg from "./../../assets/cover.jpg";
import profileImg from "./../../assets/login.jpeg";
import "./profile.scss";
import Posts from "../../components/posts/Posts";

const Profile: FC = () => {
  return (
    <div className="profile">
      <div className="images">
        <img className="cover" src={coverImg} alt="Фото обоев" />
        <img className="profile" src={profileImg} alt="Фото пользователя" />
      </div>
      <div className="container">
        <div className="uInfo">
          <div className="left">
            <a href="#" target="_blank">
              <FacebookTwoTone fontSize="large" />
            </a>
            <a href="#" target="_blank">
              <Instagram fontSize="large" />
            </a>
            <a href="#" target="_blank">
              <Twitter fontSize="large" />
            </a>
            <a href="#" target="_blank">
              <LinkedIn fontSize="large" />
            </a>
            <a href="#" target="_blank">
              <Pinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Иван Иванов</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>Кыргызстан</span>
              </div>
              <div className="item">
                <Language />
                <span>Kyrgyz.dev</span>
              </div>
            </div>
            <button>Подписаться</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
