// Function to initialize navigation and handle section visibility
const initializeNavigation = () => {
  const navButtons = document.querySelectorAll(".navbar__item");
  const compSections = document.querySelectorAll(".component");

  navButtons.forEach((navButton, index) => {
    navButton.addEventListener("click", (e) => {
      compSections.forEach((section) => section.classList.add("hidden"));

      navButtons.forEach((button) =>
        button.classList.remove("navbar__item--active")
      );

      e.target.classList.add("navbar__item--active");
      compSections[index].classList.remove("hidden");
    });
  });
};

// Function to initialize alert functionality
const initializeButton = () => {
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

// Function to initialize accordion functionality
const initializeAccordion = () => {
  const titleContainers = document.querySelectorAll(
    ".accordion__title-container"
  );
  const descriptionContainers = document.querySelectorAll(
    ".accordion__description-container"
  );
  const accordionToggleLogos = document.querySelectorAll(
    ".accordion__toggle-logo"
  );

  // Handle accordion toggle
  titleContainers.forEach((title, index) => {
    title.addEventListener("click", () => {
      descriptionContainers[index].classList.toggle(
        "accordion__description-container--active"
      );
      accordionToggleLogos[index].classList.toggle("rotate-arrow");
    });
  });
};

// Function to initialize alert functionality
const initializeAlert = () => {
  const alertButton = document.querySelector(".component__alert-button");
  const dynamicAlert = document.querySelector(".component__alert-message");

  alertButton.addEventListener("click", () => {
    // Show the alert
    dynamicAlert.classList.add("visible");
    // Disable the button
    alertButton.classList.add("button-disabled");
    alertButton.disabled = true;

    // Hide the alert automatically after 3 seconds
    setTimeout(() => {
      dynamicAlert.classList.remove("visible");
      alertButton.disabled = false;
      alertButton.classList.remove("button-disabled");
    }, 3000);
  });
};

const initializeModal = () => {
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

// Function to initialize toast functionality
const initializeToast = () => {
  const toastButton = document.querySelector(".component__toast-button");
  const dynamicMessage = document.querySelector(".component__toast-message");

  toastButton.addEventListener("click", () => {
    // Show the message
    dynamicMessage.classList.add("visible");

    // Hide the messahe automatically after 5 seconds
    setTimeout(() => {
      dynamicMessage.classList.remove("visible");
    }, 5000);
  });
};

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeButton();
  initializeAccordion();
  initializeAlert();
  initializeModal();
  initializeToast();
});
