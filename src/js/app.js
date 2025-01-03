// Import components
import initNavigation from "./components/navigation.js";
import initButton from "./components/button.js";
import initAccordion from "./components/accordion.js";
import initAlert from "./components/alert.js";
import initModal from "./components/modal.js";
import initToast from "./components/toast.js";

// Function to initialize the app
const initializeApp = () => {
  initNavigation(); // Initialize navigation
  initButton(); // Initialize button
  initAccordion(); // Initialize accordion
  initAlert(); // Initialize alert
  initModal(); // Initialize modal
  initToast(); // Initialize toast
};

// Attach the initialization to DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeApp);
