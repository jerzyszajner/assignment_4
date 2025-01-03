// Function to initialize toast functionality
const initToast = () => {
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

export default initToast;
