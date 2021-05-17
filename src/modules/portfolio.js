const portfolio = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const block = document.querySelector(".portfolio");
    let countTransform = 0;
    let transformCount;
    window.addEventListener("resize", () => {
      block.removeEventListener("touchstart", myListener, true);
      var myListener = function (e) {
        closePopupOnClick(e, popup);
      };
      startSlider();
    });

    const startSlider = () => {
      if (document.documentElement.clientWidth <= 576) {
        countTransform = 0;
        block.querySelector(".slider-arrow_left-portfolio").style.display =
          "none";
        block.querySelector(".slider-arrow_right-portfolio").style.display =
          "none";
        const blockslider = document.querySelector(".portfolio-slider-mobile");
        const sliders = document.querySelectorAll(
          ".desktop-hide>.portfolio-slider__slide-frame"
        );
        const totalCount = block.querySelector(
          ".slider-counter-content__total"
        );
        const nowCount = block.querySelector(
          ".slider-counter-content__current"
        );
        const createCount = () => {
          totalCount.textContent = sliders.length;
        };
        let currentSlide = 0;

        const prevSlide = (elem, index) => {
          elem[index].style.display = "none";
          nowCount.textContent = index + 1;
        };
        const nextSlide = (elem, index) => {
          elem[index].style.display = "block";
          nowCount.textContent = index + 1;
        };
        const toggleSlide = () => {
          if (currentSlide < 0) {
            currentSlide = sliders.length - 1;
          } else if (currentSlide > sliders.length - 1) {
            currentSlide = 0;
          }
          nextSlide(sliders, currentSlide);
        };

        const init = () => {
          createCount();
          sliders.forEach((item, i) => {
            if (i === 0) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
          // ЛОГИКА СЛАЙДЕРА
          block.addEventListener("click", (e) => {
            const target = e.target;
            if (target.closest("#portfolio-arrow-mobile_left")) {
              prevSlide(sliders, currentSlide);
              currentSlide--;
              toggleSlide();
            } else if (target.closest("#portfolio-arrow-mobile_right")) {
              prevSlide(sliders, currentSlide);
              currentSlide++;
              toggleSlide();
            }
          });
        };
        init();
      } else {
        const blockSlider = block.querySelector(".portfolio-slider");
        const allSlide = block.querySelectorAll(".portfolio-slider__slide");
        const maxTransform = blockSlider.scrollWidth;
        const arrowLeft = block.querySelector(".slider-arrow_left-portfolio");
        const arrowRight = block.querySelector(".slider-arrow_right-portfolio");
        const sliders = block.querySelectorAll(
          ".mobile-hide .portfolio-slider__slide-frame"
        );
        const init = () => {
          countTransform = 0;
          allSlide.forEach((item) => {
            item.style.transform = `translateX(${countTransform}px)`;
          });
          arrowLeft.style.display = "none";
          arrowRight.style.display = "flex";
        };
        init();
        block.addEventListener("click", (e) => {
          const target = e.target;

          if (target.closest(".slider-arrow_left-portfolio")) {
            countTransform += 200;

            allSlide.forEach((item) => {
              item.style.transform = `translateX(${countTransform}px)`;
            });
            transformCount =
              allSlide[0].style.transform.match(/(-?[0-9\.]+)/g)[0];
            provBtn();
          }
          if (target.closest(".slider-arrow_right-portfolio")) {
            countTransform -= 200;
            allSlide.forEach((item) => {
              item.style.transform = `translateX(${countTransform}px)`;
            });
            transformCount =
              allSlide[0].style.transform.match(/(-?[0-9\.]+)/g)[0];
            provBtn();
          }
        });

        document.addEventListener("click", (e) => {
          if (e.target.closest(".portfolio-slider__slide-frame")) {
            sliders.forEach((item, i) => {
              if (item === e.target) {
                openModalPortfolio(i);
              }
            });
          }
        });

        const provBtn = () => {
          //(ВМЕСТЕ С ПРОКРУТОЙ значение - 920)
          if (countTransform <= -(maxTransform - blockSlider.clientWidth)) {
            arrowRight.style.display = "none";
            arrowLeft.style.display = "flex";
            countTransform = -(maxTransform - blockSlider.clientWidth);
            allSlide.forEach((item) => {
              item.style.transform = `translateX(-${
                maxTransform - blockSlider.clientWidth
              }px)`;
            });
          } else if (countTransform >= 0) {
            countTransform = 0;
            arrowLeft.style.display = "none";
            arrowRight.style.display = "flex";
            allSlide.forEach((item) => {
              item.style.transform = `translateX(${countTransform}px)`;
            });
          } else {
            arrowLeft.style.display = "flex";
            arrowRight.style.display = "flex";
          }
        };
      }
    };
    startSlider();
  });

  // МОДАЛЬНОЕ ОКНО
  const openModalPortfolio = (index) => {
    const popupPortfolio = document.querySelector(".popup-portfolio"),
      slidersImg = document.querySelectorAll(
        ".popup-portfolio-slider>.popup-portfolio-slider__slide"
      ),
      slidersText = document.querySelectorAll(".popup-portfolio-text"),
      nowCount = popupPortfolio.querySelector(
        ".slider-counter-content__current"
      ),
      totalCount = popupPortfolio.querySelector(
        ".slider-counter-content__total"
      ),
      arrowLeft = popupPortfolio.querySelector("#popup_portfolio_left"),
      arrowRigth = popupPortfolio.querySelector("#popup_portfolio_right");
    let currentSlide = index;
    if (currentSlide === 0) {
      arrowLeft.style.display = "none";
    } else if (currentSlide === slidersImg.length - 1) {
      arrowRigth.style.display = "none";
    } else {
      arrowLeft.style.display = "block";
      arrowRigth.style.display = "block";
    }
    nowCount.textContent = currentSlide + 1;
    totalCount.textContent = slidersImg.length;
    popupPortfolio.style.visibility = "visible";

    slidersImg.forEach((item, i) => {
      if (i === index) {
        item.style.display = "block";
        slidersText[i].style.display = "block";
      } else {
        item.style.display = "none";
        slidersText[i].style.display = "none";
      }
    });

    popupPortfolio.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".close")) {
        popupPortfolio.style.visibility = "hidden";
        slidersImg[currentSlide].style.display = "none";
        slidersText[currentSlide].style.display = "none";
      } else if (target.closest("#popup_portfolio_right")) {
        prevSlide(slidersImg, currentSlide);
        currentSlide++;
        toggleSlide();
      } else if (target.closest("#popup_portfolio_left")) {
        prevSlide(slidersImg, currentSlide);
        currentSlide--;
        toggleSlide();
      }
      if (currentSlide === 0) {
        arrowLeft.style.display = "none";
        arrowRigth.style.display = "block";
      } else if (currentSlide === slidersImg.length - 1) {
        arrowRigth.style.display = "none";
        arrowLeft.style.display = "block";
      } else {
        arrowLeft.style.display = "block";
        arrowRigth.style.display = "block";
      }
    });
    const prevSlide = (elem, index) => {
      elem.forEach((item) => (item.style.display = "none"));
      slidersText.forEach((item) => (item.style.display = "none"));
      nowCount.textContent = index + 1;
    };
    const nextSlide = (elem, index) => {
      elem[index].style.display = "block";
      slidersText[index].style.display = "block";
      nowCount.textContent = index + 1;
    };
    const toggleSlide = () => {
      if (currentSlide < 0) {
        currentSlide = 0;
      } else if (currentSlide > slidersImg.length - 1) {
        currentSlide = slidersImg.length - 1;
      }
      nextSlide(slidersImg, currentSlide);
    };
  };
};

export default portfolio;
