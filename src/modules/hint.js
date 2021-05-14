import SliderCarousel from "./sliderCarousel";
const hint = () => {
  const formulaItemCurcule = document.querySelectorAll(".formula-item__icon");
  const textHint = document.querySelectorAll(".formula-item-popup");

  const mobileHint = () => {
    const arrowPrev = document.querySelector(".slider-arrow_left-formula"),
      arrowNext = document.querySelector(".slider-arrow_right-formula"),
      wrapperSliders = document.querySelector(".formula-slider"),
      sliders = document.querySelectorAll(".formula-slider__slide"),
      wrap = document.querySelector(".formula-slider-wrap");
    let currentSlide = 0;

    const nextSlideAdd = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const prevSlideAdd = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    nextSlideAdd(sliders, currentSlide, "active-item");
    document.addEventListener("click", (e) => {
      const target = e.target;
      prevSlideAdd(sliders, currentSlide, "active-item"); // сами слайды

      if (target.matches("#formula-arrow_left")) {
        currentSlide--;
      } else if (target.matches("#formula-arrow_right")) {
        currentSlide++;
      }

      if (currentSlide > sliders.length) {
        arrowNext.style.display = "none";
        currentSlide = sliders.length;
      } else if (currentSlide < 0) {
        arrowPrev.style.display = "none";
        currentSlide = 0;
      }
      arrowPrev.style.display = "flex";
      arrowNext.style.display = "flex";
      nextSlideAdd(sliders, currentSlide, "active-item");
    });

    const slider = new SliderCarousel({
      main: ".formula-slider-wrap",
      wrap: ".formula-slider",
      slides: ".formula-slider__slide",
      next: ".slider-arrow_right-formula",
      prev: ".slider-arrow_left-formula",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          slideToShow: 3,
        },
        {
          breakpoint: 567,
          slideToShow: 2,
        },
      ],
    });
    slider.init();
  };

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

  if (window.innerWidth <= 1024) {
    mobileHint();
  } else {
    formulaItemCurcule.forEach((item) => {
      item.addEventListener("mouseenter", desctorHint);
      item.addEventListener("mouseleave", closeHint);
    });
  }
};

export default hint;
