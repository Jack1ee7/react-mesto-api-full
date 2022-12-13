import { useEffect } from "react";
import { useFormWitchValidation } from "../hooks/useForms";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isSending }) => {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWitchValidation();

  useEffect(() => {
    resetForm({}, true);
  }, [resetForm, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: e.target.name.value,
      link: e.target.link.value,
    });
  };
  console.log(values);
  return (
    <PopupWithForm
      name={"add"}
      title={"Новое место"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={isSending ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}
    >
      <div className="popup__field">
        <input
          className="popup__input"
          type="text"
          name="name"
          id="title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="popup__error" id="title-error">
          {errors.name || ""}
        </span>
      </div>
      <div className="popup__field">
        <input
          className="popup__input"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required
          value={values.link || ""}
          onChange={handleChange}
        />
        <span className="popup__error" id="link-error">
          {errors.link || ""}
        </span>
      </div>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
