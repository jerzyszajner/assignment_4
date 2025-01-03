// Function to initialize buttons functionality
const initButton = () => {
  const activButton = document.querySelector(".component__button--active");

  activButton.addEventListener("click", () => {
    activButton.classList.toggle("component__button--active");

    if (activButton.classList.contains("component__button--active")) {
      activButton.textContent = "Active";
    } else {
      activButton.textContent = "Default";
    }
  });
};

export default initButton;
