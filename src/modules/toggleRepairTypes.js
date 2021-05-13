const toggleRepairTypes = () => {
  const popupRepairTypes = document.querySelector(".popup-repair-types");
  const btnClose = popupRepairTypes.querySelectorAll(".close.mobile-hide");

  const openRepairTypes = () => {
    popupRepairTypes.style.visibility = "visible";
  };
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".link-list")) {
      openRepairTypes();
    }
    if (target.closest(".popup-repair-types") && target.closest(".close")) {
      popupRepairTypes.style.visibility = "hidden";
    }
  });
  btnClose.forEach((item) => {
    item.addEventListener("click", () => {
      popupRepairTypes.style.visibility = "hidden";
    });
  });
};
export default toggleRepairTypes;
