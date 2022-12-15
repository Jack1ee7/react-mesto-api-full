import logo from "../images/logo.svg";
import { Link, Route, Switch } from "react-router-dom";
const Header = ({ onLogout, email }) => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="header__logo" />
      <Switch>
        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        </Route>
        <Route path="/">
          <div className="header__container">
            <p className="header__email">{email}</p>
            <Link
              to="/sign-in"
              className="header__logout-button"
              onClick={onLogout}
            >
              Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
