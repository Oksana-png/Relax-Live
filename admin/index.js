document.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  const inputName = document.getElementById("name"),
    inputPassword = document.getElementById("type"),
    messWarning = document.querySelectorAll(".text-warning"),
    inputs = document.querySelectorAll("input"),
    form = document.querySelector("form");
  messWarning.forEach((item) => {
    item.style.display = "none";
  });
  const authorized = {
    authorized: false,
    login: "oksana",
    password: "admin",
  };
  document.cookie = `authorization=${JSON.stringify(authorized)}`;
  const entryAccount = () => {
    inputs.forEach((item) => (item.value = ""));
    authorized.authorized = true;
    document.cookie = `authorization=${JSON.stringify(authorized)}`;
    const adres = location.origin;
    window.location = `${adres}/admin/table.html`;
  };

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  const dataUser = JSON.parse(getCookie("authorization"));
  if (dataUser.authorized) {
    entryAccount();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputName.value.trim() !== "" && inputPassword.value.trim() !== "") {
      if (dataUser.login === inputName.value) {
        if (dataUser.password === inputPassword.value) {
          messWarning.forEach((item) => (item.style.display = "none"));
          entryAccount();
        } else {
          inputs.forEach((item) => (item.value = ""));
          messWarning[0].style.display = "none";
          messWarning[1].style.display = "block";
        }
      } else {
        inputs.forEach((item) => (item.value = ""));
        messWarning[0].style.display = "block";
      }
    }
  });
});
