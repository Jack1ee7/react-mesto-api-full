import { useContext } from "react";
import avatarEditIcon from "../images/avatar-edit-icon.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDeleteClick,
  cards,
}) => {
  const currentUser = useContext(CurrentUserContext);
  //creating card elements from data
  const cardsElements = cards.map((card) => (
    <Card
      key={card._id}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardDeleteClick={onCardDeleteClick}
      card={card}
    />
  ));

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              src={currentUser.avatar}
              alt="Аватар профиля"
              className="profile__avatar"
              onClick={onEditAvatar}
            />
            <img
              src={avatarEditIcon}
              alt="Редактировать"
              className="profile__avatar-edit-ico"
            />
          </div>
          <div className="profile__info-text">
            <h1 className="profile__name">{`${currentUser.name}`}</h1>
            <p className="profile__occupation">{`${currentUser.about}`}</p>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="pictures">
        <ul className="pictures__grid">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
