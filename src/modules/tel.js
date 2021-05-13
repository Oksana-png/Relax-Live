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
tel();

const toggleMenu = () => {
  const menu = document.querySelector(".popup-menu");
  const dialogMenu = document.querySelector(".popup-dialog-menu");
  const buttonOpen = document.querySelector(".menu__icon");
  const openMenu = () => {
    menu.style.visibility = "visible";
    dialogMenu.style.transform = "translate3d(0, 0, 0)";
  };
  const closeMenu = () => {
    menu.style.visibility = "hidden";
    dialogMenu.style.transform = "translate3d(645px, 0, 0)";
  };
  const openMenuMobile = () => {
    menu.style.visibility = "visible";
    dialogMenu.style.transform = "translate3d(0, 0, 0)";
  };
  const closeMenuMobile = () => {
    menu.style.visibility = "hidden";
    dialogMenu.style.transform = "translate3d(0, -100vh, 0)";
  };

  if (document.documentElement.clientWidth <= 576) {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".close-menu")) {
        closeMenuMobile();
      }
      if (target.closest(".popup-menu-nav__item")) {
        closeMenuMobile();
      }
    });
    buttonOpen.addEventListener("click", openMenuMobile);
  } else {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".close-menu")) {
        closeMenu();
      }
      if (target.closest(".popup-menu-nav__item")) {
        closeMenu();
      }
    });
    buttonOpen.addEventListener("click", openMenu);
  }
};

toggleMenu();

const scrollLigth = () => {
  const blockLinks = document.querySelectorAll("a.scroll");

  blockLinks.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      const id = elem.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        blocks: "start",
      });
    });
  });
};
scrollLigth();
