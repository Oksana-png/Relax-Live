const repairSlider = () => {
  const wrapRepair = document.querySelector(".repair-types");
  const sliderItems = document.querySelector(".repair-types-slider");
  let currentSlide = 0;
  const totalSlide = wrapRepair.querySelector(".slider-counter-content__total");
  const numderSlide = wrapRepair.querySelector(
    ".slider-counter-content__current"
  );
  let activeSlider;
  const updateCounter = (slider) => {
    totalSlide.textContent = slider.children.length;
    numderSlide.textContent = currentSlide + 1;
  };
  const renderSlider = (index) => {
    const sliders = sliderItems.children;
    for (let item of sliders) {
      if (item === sliders[index]) {
        item.style.display = "block";
        currentSlide = 0;
        activeSlider = sliders[index].children;
        for (let item of activeSlider) {
          if (item === activeSlider[0]) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
        updateCounter(sliders[index]);
      } else {
        item.style.display = "none";
      }
    }
  };
  const nextSlide = (elem, index) => {
    elem[index].style.display = "block";
    numderSlide.textContent = currentSlide + 1;
  };
  const prevSlide = (elem, index) => {
    elem[index].style.display = "none";
  };
  // активация первого слайдера по умолчанию
  renderSlider(0);
  nextSlide(activeSlider, currentSlide);
  //

  const tabs = (target) => {
    const tab = wrapRepair.querySelectorAll(".repair-types-nav__item");
    tab.forEach((item, i) => {
      if (target === item) {
        item.classList.add("active");
        renderSlider(i);
      } else {
        item.classList.remove("active");
      }
    });
  };
  const runActiveSlide = () => {
    if (currentSlide > activeSlider.length - 1) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = activeSlider.length - 1;
    }
    nextSlide(activeSlider, currentSlide);
  };

  wrapRepair.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest("#repair-types-arrow_left")) {
      prevSlide(activeSlider, currentSlide);
      currentSlide--;
      runActiveSlide();
    } else if (target.closest("#repair-types-arrow_right")) {
      prevSlide(activeSlider, currentSlide);
      currentSlide++;
      runActiveSlide();
    } else if (target.closest(".repair-types-nav__item")) {
      tabs(target);
    }
  });
};

// repairSlider();
export default repairSlider;
