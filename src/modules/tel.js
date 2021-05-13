const tel = () => {
  const wrapBlock = document.querySelector(
    ".header-contacts__phone-number-accord"
  );
  const telLink = document.querySelector(
    ".header-contacts__phone-number-accord>.header-contacts__phone-number"
  );
  const arrow = document.querySelector(".header-contacts__arrow");
  const arrImg = arrow.querySelector("img");

  arrow.addEventListener("click", () => {
    if (arrImg.style.transform === "rotate(180deg)") {
      let count = 25;
      telLink.style.opacity = 0;
      const anim = setInterval(() => {
        count--;
        arrImg.style.transform = `rotate(${count * 7}deg)`;
        wrapBlock.style.top = `${count}px`;
        if (count <= 0) {
          wrapBlock.style.top = `0px`;
          arrImg.style.transform = `rotate(0deg)`;
          clearInterval(anim);
        }
      }, 10);
      return;
    }
    let i = 0;
    const anim = setInterval(() => {
      i++;
      telLink.style.opacity = 1;
      arrImg.style.transform = `rotate(${i * 7}deg)`;
      wrapBlock.style.top = `${i}px`;
      if (i >= 25) {
        arrImg.style.transform = `rotate(180deg)`;
        clearInterval(anim);
      }
    }, 10);
  });
};

export default tel;
