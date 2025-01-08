// Data for the slideshow images
const slideshowData = [
  { src: "./assets/images/image1.jpg", alt: "Image 1" },
  { src: "./assets/images/image2.jpg", alt: "Image 2" },
  { src: "./assets/images/image3.jpg", alt: "Image 3" },
];

let currentSlide = 0;

// Function to update the counter showing the current slide
const updateCounter = (counter) => {
  counter.textContent = `${currentSlide + 1} / ${slideshowData.length}`;
};

// Function to update the displayed slide
const updateSlide = () => {
  const cardImage = document.querySelector(".slideshow__img");
  const counter = document.querySelector(".slideshow__counter");
  if (currentSlide < 0) {
    currentSlide = slideshowData.length - 1;
  } else if (currentSlide >= slideshowData.length) {
    currentSlide = 0;
  }

  cardImage.src = slideshowData[currentSlide].src;
  cardImage.alt = slideshowData[currentSlide].alt;
  updateCounter(counter);
};

// Function to handle slideshow navigation: buttons, keyboard, and scroll actions
const handleButtons = () => {
  const slideshowContainer = document.querySelector(".slideshow__container");
  const buttonNext = document.querySelector(".buttonNext");
  const buttonPrev = document.querySelector(".buttonPrev");

  buttonNext.addEventListener("click", () => {
    currentSlide++;
    updateSlide();
  });

  buttonPrev.addEventListener("click", () => {
    currentSlide--;
    updateSlide();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      currentSlide++;
      updateSlide();
    } else if (event.key === "ArrowLeft") {
      currentSlide--;
      updateSlide();
    }
  });

  let lastScrollTime = 0;

  // Scroll navigation with a delay to prevent rapid switching
  slideshowContainer.addEventListener("wheel", (event) => {
    const now = Date.now();
    if (now - lastScrollTime < 250) return; // Ignore if less than 250ms
    lastScrollTime = now;

    if (event.deltaY > 0) {
      currentSlide++;
      updateSlide();
    } else if (event.deltaY < 0) {
      currentSlide--;
      updateSlide();
    }
  });
};

// Function to initialize the slideshow functionality
const initSlideshow = () => {
  const slideshowContainer = document.querySelector(".slideshow__container");

  const card = document.createElement("figure");
  card.classList.add("slideshow__card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("slideshow__img");
  cardImage.src = slideshowData[currentSlide].src;
  cardImage.alt = slideshowData[currentSlide].alt;

  const counter = document.createElement("div");
  counter.classList.add("slideshow__counter");
  updateCounter(counter);

  const buttonPrev = document.createElement("button");
  buttonPrev.classList.add("buttonPrev");
  buttonPrev.textContent = `👈`;

  const buttonNext = document.createElement("button");
  buttonNext.classList.add("buttonNext");
  buttonNext.textContent = `👉`;

  card.append(cardImage);
  slideshowContainer.append(counter, card, buttonPrev, buttonNext);

  handleButtons(counter);
};

export default initSlideshow;
