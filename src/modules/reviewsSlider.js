const reviewsSlider = () => {
  const blockReviews = document.querySelector(".reviews"),
    slide = document.querySelectorAll(".reviews-slider__slide"),
    dots = document.querySelector(".slider-dots-reviews"),
    slider = document.querySelector(".reviews-slider"),
    sliderTransform = document.querySelector(
      ".reviews-slider-wrap>.reviews-slider"
    );
  let currentSlide = 0,
    interval; // номер слайда
  dots.style.display = "flex";
  slider.style.display = "flex";
  slide[currentSlide].classList.add("active-slide");
  sliderTransform.style.overflow = "initial";

  const createDots = () => {
    let i = 0;
    while (i < slide.length) {
      const dot = document.createElement("div");
      dot.className = "dot dot-reviews switch";
      dot.innerHTML = `<div class="dot__inner"></div>`;
      if (i === 0) {
        dot.classList.add("dot_active");
      }
      dots.append(dot);
      i++;
    }
  };
  createDots();

  const prevSlide = (elem, index, strClass) => {
    sliderTransform.style.transform = `translateX(${
      slider.clientWidth * currentSlide
    }px)`;
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    sliderTransform.style.transform = `translateX(-${
      slider.clientWidth * currentSlide
    }px)`;
    elem[index].classList.add(strClass);
  };
  const dot = document.querySelectorAll(".dot-reviews");
  blockReviews.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (
      !target.matches(".slider-arrow_left, .slider-arrow_right, .dot-reviews")
    ) {
      return;
    }
    prevSlide(slide, currentSlide, "active-slide");
    prevSlide(dot, currentSlide, "dot_active");

    if (target.matches(".slider-arrow_right")) {
      currentSlide++;
    } else if (target.matches(".slider-arrow_left")) {
      currentSlide--;
    } else if (target.matches(".dot-reviews")) {
      dot.forEach((item, i) => {
        if (target === item) {
          currentSlide = i;
        }
      });
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, "active-slide");
    nextSlide(dot, currentSlide, "dot_active");
  });
};

export default reviewsSlider;
