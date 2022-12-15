import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ onCardClick, onCardLike, onCardDeleteClick, card }) => {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `pictures__delete-button ${isOwn ? "pictures__delete-button_status_visible" : ""
    }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `pictures__like-button ${isLiked ? "pictures__like-button_status_active" : ""
    }`;

  const handleCardClick = () => {
    onCardClick(card);
  }

  const handleCardDeleteСlick = () => {
    onCardDeleteClick(card);
  }

  const handleCardLike = () => {
    onCardLike(card);
    console.log(card)
  }

  return (
    <li className="pictures__item">
      <img
        src={card.link}
        alt={card.name}
        className="pictures__image"
        onClick={handleCardClick}
      />
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleCardDeleteСlick}
      ></button>
      <div className="pictures__title-container">
        <h3 className="pictures__title">{card.name}</h3>
        <div className="pictures__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleCardLike}
          ></button>
          <p className="pictures__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;
