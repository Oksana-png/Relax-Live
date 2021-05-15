const sendForms = () => {
  const forms = document.querySelectorAll(".feedback__form"),
    blockFull = document.querySelectorAll(".feedback-block__form"),
    successMsg = document.querySelector(".popup-thank"),
    btnCloseSuccess = successMsg.querySelector(".close-thank");

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
          })
          .catch((error) => {
            console.error(error);
          });
      };
      if (inputRequar.checked && phone.value.trim() !== "") {
        const formData = new FormData(form);
        getForm(formData, form);
        phone.value = "";
        inputRequar.checked = false;
        if (form.closest(".popup-consultation")) {
          const del = document.querySelector(".popup-consultation");
          del.style.visibility = "hidden";
        }
      }
    });
  });
  blockFull.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = item.querySelector(`input[name="phone"]`),
        inputRequar = item.querySelector(`input[type="checkbox"]`),
        name = item.querySelector(`input[name="name"]`);
      console.log(phone);
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
          })
          .catch((error) => {
            console.error(error);
          });
      };
      console.log(item);
      if (
        inputRequar.checked &&
        phone.value.trim() !== "" &&
        name.value.trim() !== ""
      ) {
        const formData = new FormData(item);
        getForm(formData, item);
        phone.value = "";
        name.value = "";
        inputRequar.checked = false;
      }
    });
  });

  btnCloseSuccess.addEventListener("click", () => {
    successMsg.style.visibility = "hidden";
  });
  regularPhone = () => {
    const inputPhone = document.querySelectorAll(`input[name="phone"]`);
    const mask = inputPhone.forEach((phone) => {});
  };
};

export default sendForms;
