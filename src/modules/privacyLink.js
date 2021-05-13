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
    if (link.textContent === "") link.addEventListener("click", openPrivacy);
  });
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".popup-privacy") && target.closest(".close")) {
      closePrivacy();
    }
  });
};

export default privacyLink;
