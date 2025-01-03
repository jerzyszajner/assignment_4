// Function to initialize alert functionality
const initAlert = () => {
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

export default initAlert;
