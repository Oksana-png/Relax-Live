const sendForms = () => {
  const forms = document.querySelectorAll(".feedback__form"),
    blockFull = document.querySelectorAll(".feedback-block__form"),
    successMsg = document.querySelector(".popup-thank"),
    btnCloseSuccess = successMsg.querySelector(".close-thank"),
    nameInput = document.querySelectorAll('input[name="name"]');
  nameInput.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/[^а-я -]/gi, "");
    });
  });
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = form.querySelector(`input[name="phone"]`),
        inputRequar = form.querySelector(`input[type="checkbox"]`);
      const postData = (body) =>
        fetch("server.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      const getForm = (data, form) => {
        const body = {};
        data.forEach((val, i) => {
          body[i] = val;
        });
        postData(body)
          .then((responce) => {
            if (responce.status !== 200 || responce.status === 405) {
              throw new Error("status network not 200");
            }
            //сообщение об усп. отправке
            successMsg.style.visibility = "visible";
            setTimeout(() => {
              successMsg.style.visibility = "hidden";
            }, 5000);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      if (
        inputRequar.checked &&
        phone.value.trim() !== "" &&
        phone.value.trim().length === 18
      ) {
        const formData = new FormData(form);
        getForm(formData, form);
        phone.value = "";
        inputRequar.checked = false;
        if (form.closest(".popup-consultation")) {
          const del = document.querySelector(".popup-consultation");
          del.style.visibility = "hidden";
        }
      } else {
        phone.value = "";
        alert("Введите правильные данные!");
      }
    });
  });
  blockFull.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = item.querySelector(`input[name="phone"]`),
        inputRequar = item.querySelector(`input[type="checkbox"]`),
        name = item.querySelector(`input[name="name"]`);
      const postData = (body) =>
        fetch("server.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      const getForm = (data, form) => {
        const body = {};
        data.forEach((val, i) => {
          body[i] = val;
        });
        postData(body)
          .then((responce) => {
            if (responce.status !== 200) {
              throw new Error("status network not 200");
            }
            //сообщение об усп. отправке
            successMsg.style.visibility = "visible";
            setTimeout(() => {
              successMsg.style.visibility = "hidden";
            }, 5000);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      if (
        inputRequar.checked &&
        phone.value.trim() !== "" &&
        name.value.trim() !== "" &&
        phone.value.trim().length === 18 &&
        name.value.trim().length >= 2
      ) {
        const formData = new FormData(item);
        getForm(formData, item);
        phone.value = "";
        name.value = "";
        inputRequar.checked = false;
      } else {
        phone.value = "";
        name.value = "";
        alert("Введите правильные данные!");
      }
    });
  });

  btnCloseSuccess.addEventListener("click", () => {
    successMsg.style.visibility = "hidden";
  });

  var keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, ""),
      new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = new_value.indexOf("_");
    if (i != -1) {
      i < 5 && (i = 3);
      new_value = new_value.slice(0, i);
    }
    var reg = matrix
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (
      !reg.test(this.value) ||
      this.value.length < 5 ||
      (keyCode > 47 && keyCode < 58)
    )
      this.value = new_value;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
  }
  const regularPhone = () => {
    const inputPhone = document.querySelectorAll(`input[name="phone"]`);

    inputPhone.forEach((phone) => {
      phone.addEventListener("input", mask, false);
      phone.addEventListener("blur", mask, false);
      phone.addEventListener("focus", mask, false);
    });
  };
  regularPhone();
};

export default sendForms;
