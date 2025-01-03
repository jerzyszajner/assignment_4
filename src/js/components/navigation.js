// Function to initialize navigation and handle section visibility
const initNavigation = () => {
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

export default initNavigation;
