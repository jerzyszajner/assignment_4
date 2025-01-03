const initModal = () => {
  const modalButton = document.querySelector(".modal__button");
  const displayModal = document.querySelector(".modal__content");
  const closeModal = document.querySelector(".modal__close-button");

  modalButton.addEventListener("click", () => {
    modalButton.classList.add("hidden");
    displayModal.classList.remove("hidden");

    closeModal.addEventListener("click", () => {
      displayModal.classList.add("hidden");
      modalButton.classList.remove("hidden");
    });
  });
};

export default initModal;
