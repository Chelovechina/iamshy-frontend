import { FC } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login: FC = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>I'am Shy.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>У вас нету аккаунта?</span>
          <Link to="/register">
            <button>Зарегистрироваться</button>
          </Link>
        </div>
        <div className="right">
          <h2>Войти</h2>
          <form>
            <input type="text" placeholder="Логин" />
            <input type="password" placeholder="Пароль" />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
