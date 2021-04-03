const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.mycarousel__button--right');
const prevButton = document.querySelector('.mycarousel__button--left');
const dotsNav = document.querySelector('.mycarousel__nav');
const dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;

// TODO: Arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    nextButton.classList.add('is-hidden');
    prevButton.classList.remove('is-hidden');
  } else {
    nextButton.classList.remove('is-hidden');
    prevButton.classList.remove('is-hidden');
  }
};

const goToNext = () => {
  const currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  let nextDot = currentDot.nextElementSibling;
  if (nextSlide == null) {
    nextSlide = slides[0];
    nextDot = dots[0];
  }

  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  currentSlide.style.width = '100%';
  slideWidth = currentSlide.getBoundingClientRect().width;
  slides.forEach(setSlidePosition);
  // Move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  //   hideShowArrows(slides, prevButton, nextButton, nextIndex);
};

// TODO: Move Right on right button click
nextButton.addEventListener('click', (e) => goToNext());

// TODO: Move Left on left button click
prevButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  let prevDot = currentDot.previousElementSibling;
  if (prevSlide == null) {
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  }
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  currentSlide.style.width = '100%';
  slideWidth = currentSlide.getBoundingClientRect().width;
  slides.forEach(setSlidePosition);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  //   hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

dotsNav.addEventListener('click', (e) => {
  // ? What indicator was clicked on?
  const targetDot = e.target.closest('span');

  if (!targetDot) return;
  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  currentSlide.style.width = '100%';
  slideWidth = currentSlide.getBoundingClientRect().width;
  slides.forEach(setSlidePosition);

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  //   hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

setInterval(() => {
  goToNext();
}, 100000);

window.addEventListener('resize', () => {
  const currentSlide = track.querySelector('.current-slide');
  moveToSlide(track, currentSlide, currentSlide);
  // currentSlide.style.width = "100%";
  // slideWidth = currentSlide.getBoundingClientRect().width;
  // slides.forEach(setSlidePosition);
});
