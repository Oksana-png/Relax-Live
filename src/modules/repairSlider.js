const repairSlider = () => {
  const wrapRepair = document.querySelector(".repair-types");
  const sliderItems = document.querySelector(".repair-types-slider");
  let currentSlide = 0;
  const totalSlide = wrapRepair.querySelector(".slider-counter-content__total");
  const numderSlide = wrapRepair.querySelector(
    ".slider-counter-content__current"
  );
  const tab = wrapRepair.querySelectorAll(".repair-types-nav__item");
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
  tab[0].classList.add("active");
  //

  const tabs = (target) => {
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
  const tabsSliderMobile = () => {
    const wrapOverfHid = wrapRepair.querySelectorAll(".repair-types-nav__item");
    const nextArrow = document.querySelector("#nav-arrow-repair-right_base");
    const prevArrow = document.querySelector("#nav-arrow-repair-left_base");
    const list = document.querySelector(".nav-list-repair");
    list.style.minWidth = "inherit";
    let currentTab = 1;
    tab.forEach((item) => {
      item.style.display = "none";
      item.style.marginLeft = "auto";
      item.style.marginRight = "auto";
    });
    const nextSlide = (elem, index) => {
      elem[index + 1].style.display = "block";
      elem[index].style.display = "block";
      elem[index - 1].style.display = "block";
    };
    const prevSlide = (elem, index) => {
      tab.forEach((item) => {
        item.style.display = "none";
      });
    };
    const runSliderTab = () => {
      prevSlide(tab, currentTab);
      if (currentTab > tab.length - 2) {
        nextArrow.style.display = "none";
        currentTab = tab.length - 2;
        return;
      } else if (currentTab < 1) {
        prevArrow.style.display = "none";
        currentTab = 1;
        return;
      }
      prevArrow.style.display = "block";
      nextArrow.style.display = "block";
      if (currentTab === 1) {
        prevArrow.style.display = "none";
      }
      nextSlide(tab, currentTab);
    };

    nextSlide(tab, currentTab);
    runSliderTab();
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("#nav-arrow-repair-left_base")) {
        prevSlide(tab, currentTab);
        currentTab--;
        runSliderTab();
      } else if (target.closest("#nav-arrow-repair-right_base")) {
        prevSlide(tab, currentTab);
        currentTab++;
        runSliderTab();
        if (currentTab === 3) {
          nextArrow.style.display = "none";
        }
      }
    });
  };
  if (window.innerWidth <= 1024) {
    tabsSliderMobile();
  }
};

export default repairSlider;
