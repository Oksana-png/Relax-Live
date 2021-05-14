const hint = () => {
  const formulaItemCurcule = document.querySelectorAll(".formula-item__icon");
  const textHint = document.querySelectorAll(".formula-item-popup");

  const mobileHint = () => {};
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
