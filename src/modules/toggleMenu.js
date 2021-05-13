const toggleMenu = () => {
  const openMenu = () => {
    const menu = document.querySelector(".popup-menu");
    const dialogMenu = document.querySelector(".popup-dialog-menu");
    menu.style.visibility = "visible";
    dialogMenu.style.transform = "translate3d(0, 0, 0)";
  };
  const closeMenu = () => {
    const menu = document.querySelector(".popup-menu");
    const dialogMenu = document.querySelector(".popup-dialog-menu");
    menu.style.visibility = "hidden";
    dialogMenu.style.transform = "translate3d(645px, 0, 0)";
  };
  if (document.documentElement.clientWidth <= 768) {
  }
  const buttonOpen = document.querySelector(".menu__icon");
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
};

export default toggleMenu;
