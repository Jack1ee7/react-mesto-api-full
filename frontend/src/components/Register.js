import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmited] = useState(false)

  // reset form inputs on submit
  useEffect(() => {
    if (isSubmitted) {
      setEmail('');
      setPassword('');
    }
  }, [isSubmitted])

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password)
    setIsSubmited(true)
  }

  return (
    <div className="authentication">
      <h2 className="authentication__form-title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="authentication__form">
        <input
          className="authentication__input"
          required
          placeholder="Email"
          name="email"
          type="email"
          value={email || ""}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className="authentication__input"
          required
          placeholder="Пароль"
          name="password"
          type="password"
          value={password || ""}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          type="submit"
          className="authentication__form-submit-button"
        >
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="authentication__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
