import { FC } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register: FC = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>I'am Shy.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Уже существует аккаунт?</span>
          <Link to="/login">
            <button>Войти</button>
          </Link>
        </div>
        <div className="right">
          <h2>Регистрация</h2>
          <form>
            <input type="text" placeholder="Логин" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Пароль" />
            <input type="text" placeholder="Имя" />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
