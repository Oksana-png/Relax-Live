const hint = () => {
  const formulaItemCurcule = document.querySelectorAll(".formula-item__icon");
  const textHint = document.querySelectorAll(".formula-item-popup");

  const desctorHint = (e) => {
    const target = e.target;

    formulaItemCurcule.forEach((item, i) => {
      if (target === item) {
        textHint[i].style.visibility = "visible";
        textHint[i].style.opacity = 1;
        if (textHint[i].getBoundingClientRect().top < 0) {
          textHint[i].classList.add("formula-item-popup__mod");
          textHint[i].style.bottom = `-${textHint[i].clientHeight + 10}px`;
        }
      }
    });
  };
  const closeHint = (e) => {
    const target = e.target;
    formulaItemCurcule.forEach((item, i) => {
      if (target === item) {
        textHint[i].style.visibility = "hidden";
        textHint[i].style.opacity = 0.1;
        textHint[i].classList.remove("formula-item-popup__mod");
        if (textHint[i].getBoundingClientRect().top < 0) {
          textHint[i].classList.remove("formula-item-popup__mod");
          textHint[i].style.bottom = "90px";
        } else {
          textHint[i].style.bottom = "90px";
        }
      }
    });
  };

  const mobileHint = () => {
    const arrowPrev = document.querySelector(".slider-arrow_left-formula"),
      arrowNext = document.querySelector(".slider-arrow_right-formula"),
      sliders = document.querySelectorAll(".formula-slider__slide"),
      wrap = document.querySelector(".formula-slider-wrap"),
      trans = document.querySelector(".formula-slider");
    let currentSlide = 2;
    wrap.style.margin = "0 auto";
    sliders.forEach((item) => (item.style.display = "none"));
    const nextSlideAdd = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
      elem[index].style.display = "flex";
    };
    const prevSlideAdd = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
      elem[index].style.display = "none";
    };
    nextSlideAdd(sliders, currentSlide, "active-item");
    document.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest("#formula-arrow_left")) {
        prevSlideAdd(sliders, currentSlide, "active-item"); // сами слайды
        currentSlide--;
        checkBtn();
        nextSlideAdd(sliders, currentSlide, "active-item");
      } else if (target.closest("#formula-arrow_right")) {
        prevSlideAdd(sliders, currentSlide, "active-item"); // сами слайды
        currentSlide++;
        checkBtn();
        nextSlideAdd(sliders, currentSlide, "active-item");
      }
    });
    const checkBtn = () => {
      if (currentSlide >= sliders.length - 1) {
        arrowNext.style.display = "none";
        currentSlide = sliders.length - 1;
      } else if (currentSlide <= 0) {
        arrowPrev.style.display = "none";
        currentSlide = 0;
      } else {
        arrowPrev.style.display = "flex";
        arrowNext.style.display = "flex";
      }
    };
  };

  if (window.innerWidth <= 1024) {
    mobileHint();
  } else {
    formulaItemCurcule.forEach((item) => {
      item.addEventListener("mouseenter", desctorHint);
      item.addEventListener("mouseleave", closeHint);
    });
  }
};
//hint();

export default hint;
