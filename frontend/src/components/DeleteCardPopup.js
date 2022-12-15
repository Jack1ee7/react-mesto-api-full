import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onDelete, card }) => {
  
  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    onDelete(card);
  }
  return (
    <PopupWithForm
      name={"delete"}
      title={"Вы уверены?"}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={"Да"}
      onSubmit={handleSubmit}
    >
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
