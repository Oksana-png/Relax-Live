const transparency = () => {
  const modalTransparency = document.querySelector(".popup-transparency");
  const itemModalSlide = document.querySelectorAll(
    ".popup-transparency-slider__slide"
  );
  const allImg = document.querySelectorAll(".transparency-item__img");
  const totalSlide = modalTransparency.querySelector(
    ".slider-counter-content__total"
  );
  const numderSlide = modalTransparency.querySelector(
    ".slider-counter-content__current"
  );
  let currentSlide = 0;
  const openModal = (target) => {
    allImg.forEach((item, i) => {
      if (item === target) {
        itemModalSlide[i].style.display = "block";
        currentSlide = i;
        totalSlide.textContent = itemModalSlide.length;
        numderSlide.textContent = currentSlide + 1;
      } else {
        itemModalSlide[i].style.display = "none";
      }
    });
    modalTransparency.style.visibility = "visible";
  };
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".transparency-item__img")) {
      openModal(target);
    }
    if (target.closest(".popup-transparency .close")) {
      modalTransparency.style.visibility = "hidden";
    }
  });

  const sliderModal = () => {
    const maxSlide = itemModalSlide.length;
    const runSlide = () => {
      if (currentSlide < 0) {
        currentSlide = maxSlide - 1;
      }
      if (currentSlide > maxSlide - 1) {
        currentSlide = 0;
      }
      nextSlide(itemModalSlide, currentSlide);
    };
    const nextSlide = (elem, index) => {
      elem[index].style.display = "block";
      totalSlide.textContent = itemModalSlide.length;
      numderSlide.textContent = currentSlide + 1;
    };
    const prevSlide = (elem, index) => {
      elem[index].style.display = "none";
      totalSlide.textContent = itemModalSlide.length;
      numderSlide.textContent = currentSlide + 1;
    };
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("#transparency_right")) {
        prevSlide(itemModalSlide, currentSlide);
        currentSlide++;
        runSlide();
      } else if (target.closest("#transparency_left")) {
        prevSlide(itemModalSlide, currentSlide);
        currentSlide--;
        runSlide();
      }
    });
  };
  sliderModal();
};

export default transparency;
