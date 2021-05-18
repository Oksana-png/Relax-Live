const toggleMenu = () => {
  const menu = document.querySelector(".popup-menu");
  const dialogMenu = document.querySelector(".popup-dialog-menu");
  const buttonOpen = document.querySelectorAll(".menu__icon");
  menu.style.opacity = 0;
  const openMenu = () => {
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
    dialogMenu.style.transform = "translate3d(0, 0, 0)";
  };
  const closeMenu = () => {
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
    dialogMenu.style.transform = "translate3d(645px, 0, 0)";
  };
  const openMenuMobile = () => {
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
    dialogMenu.style.transform = "translate3d(0, 0, 0)";
  };
  const closeMenuMobile = () => {
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
    dialogMenu.style.transform = "translate3d(0, -100vh, 0)";
  };

  window.addEventListener("resize", () => {
    opr();
  });
  const opr = () => {
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
      buttonOpen.forEach((item) => {
        item.addEventListener("click", openMenuMobile);
      });
    } else {
      document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".close-menu")) {
          closeMenu();
        }
        if (target.closest(".popup-menu-nav__item")) {
          closeMenu();
        }
        if (target.closest(".popup-menu") && target.closest(".link-list")) {
          closeMenu();
        }
      });
      buttonOpen.forEach((item) => {
        item.addEventListener("click", openMenu);
      });
    }
  };
  opr();
};

export default toggleMenu;
