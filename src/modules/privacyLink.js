const privacyLink = () => {
  const links = document.querySelectorAll(".link-privacy");
  const popupPrivacy = document.querySelector(".popup-privacy");

  const openPrivacy = () => {
    popupPrivacy.style.visibility = "visible";
  };
  const closePrivacy = () => {
    popupPrivacy.style.visibility = "hidden";
  };

  links.forEach((link) => {
    link.addEventListener("click", openPrivacy);
  });
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".popup-privacy") && target.closest(".close")) {
      closePrivacy();
    } else if (
      target.closest(".popup-privacy") &&
      !target.closest(".popup-dialog-privacy")
    ) {
      closePrivacy();
    }
  });
};

export default privacyLink;
