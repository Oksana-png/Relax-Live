const accordeon = () => {
  const accordeon = document.querySelector(".accordion"),
    buttonsToggle = accordeon.querySelectorAll(".title_block"),
    accordeonContent = document.querySelectorAll(".accordion>.msg");

  const toggleAccordeonContent = (index) => {
    for (let i = 0; i < buttonsToggle.length; i++) {
      if (index === i) {
        buttonsToggle[i].classList.add("msg-active");
      } else {
        buttonsToggle[i].classList.remove("msg-active");
      }
    }
  };
  accordeon.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".msg-active")) {
      target.classList.remove("msg-active");
      return;
    }
    if (target.closest(".title_block")) {
      buttonsToggle.forEach((item, i) => {
        if (item === target) {
          toggleAccordeonContent(i);
        }
      });
    }
  });
};

export default accordeon;
