import { useEffect } from "react";
import { useFormWitchValidation } from "../hooks/useForms";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isSending }) => {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWitchValidation();

  useEffect(() => {
    resetForm({}, true);
  }, [resetForm, isOpen]);

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onUpdateAvatar({
      avatar: e.target.avatar.value,
    }); 
  };

  return (
    <PopupWithForm
      name={"avatar"}
      title={"Обновить аватар"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}
    >
      <div className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на аватар"
          value={values.avatar || ""}
          onChange={handleChange}
        />
        <span className="popup__error" id="name-error">
          {errors.name || ""}
        </span>
      </div>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
