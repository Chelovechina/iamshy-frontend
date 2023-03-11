import { FC } from "react";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlineIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlineIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlineIcon from "@mui/icons-material/SearchOutlined";

import "./navBar.scss";
import userImg from "./../../assets/login.jpeg";

interface NavBarProps {
  isDark: boolean;
  handleClick: () => void;
}

const NavBar: FC<NavBarProps> = ({ isDark, handleClick }) => {
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>I'am shy</span>
        </Link>
        <HomeOutlinedIcon />
        {isDark ? <WbSunnyOutlinedIcon onClick={handleClick} /> : <DarkModeOutlinedIcon onClick={handleClick} />}
        <GridViewOutlineIcon />
        <div className="search">
          <SearchOutlineIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlineIcon />
        <div className="user">
          <img src={userImg} alt="Пользователь" />
          <span>Иван Иванов</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
