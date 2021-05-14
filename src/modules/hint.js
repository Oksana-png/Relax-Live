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
        textHint.querySelector("[:before]");
      }
    });
  };
  const closeHint = (e) => {
    const target = e.target;

    formulaItemCurcule.forEach((item, i) => {
      if (target === item) {
        textHint[i].style.visibility = "hidden";
        textHint[i].style.opacity = 0.1;
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
