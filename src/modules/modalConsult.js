const modalConsult = () => {
  const modal = document.querySelector(".popup-consultation");
  const modalClose = () => {
    modal.style.visibility = "hidden";
    // ОЧИСТКА ФОРМЫ
    const input = modal.querySelectorAll("input");
    input.forEach((item) => {
      item.value = "";
    });
    const checkbox = modal.querySelector(".checkbox__input");
    checkbox.checked = false;
  };
  const modalOpen = () => {
    modal.style.visibility = "visible";
  };

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".button_wide")) {
      modalOpen();
    }
    if (target.closest(".close-consultation")) {
      modalClose();
    }
  });
};

export default modalConsult;
