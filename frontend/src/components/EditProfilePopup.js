import { useContext, useEffect } from "react";
import { useFormWitchValidation } from "../hooks/useForms";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, isSending }) => {

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, resetForm, errors, isValid } = useFormWitchValidation();

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm, isOpen]);

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    onUpdateUser(values);
  };
  
  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title={"Редактировать профиль"}
      name={"edit"}
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      isDisabled={!isValid || isSending}
    >
      <div className="popup__field">
        <input
          className="popup__input"
          type="text"
          name='name'
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          pattern="[a-zA-Zа-яА-Я -]{1,}"
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="popup__error" id="name-error">
          {errors.name || ""}
        </span>
      </div>
      <div className="popup__field">
        <input
          className="popup__input"
          type="text"
          name="about"
          id="occupation"
          placeholder="Подпись"
          required
          minLength="2"
          maxLength="200"
          value={values.about || ""}
          onChange={handleChange}
        />
        <span className="popup__error" id="occupation-error">
          {errors.about || ""}
        </span>
      </div>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
