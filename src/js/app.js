// Selecting navigation elements
const navButtons = document.querySelectorAll(".component__title");
const sections = document.querySelectorAll(".component");

// Utility function to hide all sections
const hideAllSections = () => {
  sections.forEach((section) => section.classList.add("hidden"));
};

// Utility function to reset active state of navigation buttons
const resetActiveButtons = () => {
  navButtons.forEach((button) =>
    button.classList.remove("components__title--active")
  );
};

// Handle navigation button clicks
const handleNavClick = (event) => {
  const clickedButton = event.currentTarget;
  const targetId = clickedButton.textContent
    .trim()
    .toLowerCase()
    .replace(/\s/g, "-"); // Replace spaces with dashes
  const targetSection = document.getElementById(targetId);

  if (!targetSection) return;

  // Reset states and show the selected section
  hideAllSections();
  resetActiveButtons();
  targetSection.classList.remove("hidden");
  clickedButton.classList.add("components__title--active");
};

// Initialize navigation
const initializeNavigation = () => {
  navButtons.forEach((button) => {
    button.addEventListener("click", handleNavClick);
  });

  // Set default state (first button active and corresponding section visible)
  hideAllSections();
  if (sections.length > 0 && navButtons.length > 0) {
    sections[0].classList.remove("hidden");
    navButtons[0].classList.add("components__title--active");
  }
};

// Selecting accordion elements
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

// Function to initialize alert functionality
const initializeAlert = () => {
  const alertTrigger = document.querySelector(".alert-trigger");
  const dynamicAlert = document.getElementById("dynamic-alert");

  if (alertTrigger && dynamicAlert) {
    alertTrigger.addEventListener("click", () => {
      // Show the alert
      dynamicAlert.classList.remove("hidden");

      // Hide the alert automatically after 3 seconds
      setTimeout(() => {
        dynamicAlert.classList.add("hidden");
      }, 3000);
    });
  }
};

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  initializeAlert();
});
