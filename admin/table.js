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

if (!dataUser.authorized) {
  const adres = location.origin;
  document.location.href = `${adres}/admin/index.html`;
}
// КОГДА ПРОВЕРА ПРОЙДЕНА
let val;
const getDataServer = () => {
  fetch("http://localhost:3000/api/items")
    .then((response) => {
      if (response.status < 299) {
        throw new Error("not status 200");
      }
      return response.json();
    })
    .then((response) => {
      val = response;
      renderList(response);
      return val;
    })
    .catch((error) => console.error(error));
};
document.addEventListener("DOMContentLoaded", () => {
  getDataServer();

  document.addEventListener("change", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.closest("#typeItem")) {
      if (target.value === "Все услуги") {
        renderList();
        return;
      }
      sortingData(target.value);
    }
  });
  document.addEventListener("click", (e) => {
    let target = e.target;
    if (target.closest(".btn-addItem")) {
      addItem();
    } else if (
      target.closest(".cancel-button") ||
      target.closest(".button__close")
    ) {
      closeModal();
    } else if (target.closest(".action-change")) {
      if (!target.classList.contains("action-change")) {
        if (!target.parentNode.classList.contains("action-change")) {
          if (
            !target.parentNode.parentNode.classList.contains("action-change")
          ) {
          } else {
            target = target.parentNode.parentNode;
          }
        } else {
          target = target.parentNode;
        }
      }
      const elem = target.parentElement.parentElement.parentElement;
      editElem(elem);
    } else if (target.closest(".action-remove")) {
      if (!target.classList.contains("action-remove")) {
        if (!target.parentNode.classList.contains("action-remove")) {
          if (
            !target.parentNode.parentNode.classList.contains("action-remove")
          ) {
            if (
              !target.parentNode.parentNode.parentNode.classList.contains(
                "action-remove"
              )
            ) {
            } else {
              target = target.parentNode.parentNode.parentNode;
            }
          } else {
            target = target.parentNode.parentNode;
          }
        } else {
          target = target.parentNode;
        }
      }
      const elem = target.parentElement.parentElement.parentElement;
      deleteElem(elem);
    }
  });
  document.querySelector(".input__cost").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/gi, "");
  });
});
const editElem = (elem) => {
  const form = document.querySelector("form");
  const id = elem.querySelector(".table__id");
  let data;
  fetch(`http://localhost:3000/api/items/${id.textContent}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status < 299) {
        throw new Error("not 200 status");
      }
      return response.json();
    })
    .then((response) => {
      data = response;
      render();
      return data;
    })
    .catch((error) => console.error(error));
  const render = () => {
    const inputType = form.querySelector(".input__type"),
      inputName = form.querySelector(".input__name"),
      inputUnits = form.querySelector(".input__units"),
      inputCost = form.querySelector(".input__cost"),
      modal = document.getElementById("modal"),
      header = modal.querySelector(".modal__header");
    header.textContent = "Редактировать услугу";
    modal.style.display = "flex";

    const { type, name, units, cost } = data;
    inputType.value = type;
    inputName.value = name;
    inputUnits.value = units;
    inputCost.value = cost;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const target = e.target;
      if (
        inputType.value.trim() === "" ||
        inputName.value.trim() === "" ||
        inputUnits.value.trim() === "" ||
        inputCost.value.trim() === ""
      ) {
        return;
      }
      const body = {
        type: inputType.value,
        name: inputName.value,
        units: inputUnits.value,
        cost: inputCost.value,
      };
      fetch(`http://localhost:3000/api/items/${id.textContent}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.status < 299) {
            throw new Error("not 200 status");
          }
          getDataServer();
          setTimeout(() => {
            closeModal();
          }, 3000);
        })
        .catch((error) => console.error(error));
    });
  };
};
const deleteElem = (elem) => {
  const form = document.querySelector("form");
  const id = elem.querySelector(".table__id");
  fetch(`http://localhost:3000/api/items/${id.textContent}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status < 299) {
        throw new Error("not 200 status");
      }
      getDataServer();
    })
    .catch((error) => console.error(error));
};
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.querySelectorAll("input").forEach((item) => (item.value = ""));
};
const addItem = () => {
  const modal = document.getElementById("modal");
  const form = modal.querySelector("form");
  const inputType = form.querySelector(".input__type"),
    inputName = form.querySelector(".input__name"),
    inputUnits = form.querySelector(".input__units"),
    inputCost = form.querySelector(".input__cost"),
    header = modal.querySelector(".modal__header");
  header.textContent = "Добавить услугу";
  modal.style.display = "flex";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    if (
      inputType.value.trim() !== "" &&
      inputName.value.trim() !== "" &&
      inputUnits.value.trim() !== "" &&
      inputCost.value.trim() !== ""
    ) {
      addService(
        inputType.value,
        inputName.value,
        inputUnits.value,
        inputCost.value
      );
      // отправка на сервер данных
    }
  });
};
const sortingData = (key, data) => {
  if (!data) {
    data = val;
  }
  const list = document.querySelector(".tbody");
  list.textContent = "";
  for (let item of data) {
    if (item.type === key) {
      const { type, name, units, cost, id } = item;

      const itemTable = document.createElement("tr");
      itemTable.className = "table__row";
      itemTable.innerHTML = `
          <td class="table__id table__cell">${id}</td>
        <td class="table-type table__cell">${type}</td>
        <td class="table-name table__cell">${name}</td>
        <td class="table-units table__cell">${units}</td>
        <td class="table-cost table__cell">${cost}</td>
        <td>
        <div class="table__actions table__cell">
          <button class="button action-change">
            <span class="svg_ui"
              ><svg class="action-icon_change">
                <use
                  xlink:href="./img/sprite.svg#change"
                ></use></svg></span
            ><span>Изменить</span>
          </button>
          <button class="button action-remove">
            <span class="svg_ui"
              ><svg class="action-icon_remove">
                <use
                  xlink:href="./img/sprite.svg#remove"
                ></use></svg></span
            ><span>Удалить</span>
          </button>
        </div>
      </td>
      `;
      list.append(itemTable);
    }
  }
};

const renderList = (data) => {
  if (!data) {
    data = val;
  }
  const select = document.querySelector("#typeItem");
  const list = document.querySelector(".tbody");
  list.textContent = "";
  select.textContent = "";
  select.innerHTML = `<option value="Все услуги">Все услуги</option>`;
  for (let value of data) {
    const { type, name, units, cost, id } = value;
    const elem = document.createElement("tr");
    elem.className = "table__row";
    elem.innerHTML = `
      <td class="table__id table__cell">${id}</td>
      <td class="table-type table__cell">${type}</td>
      <td class="table-name table__cell">${name}</td>
      <td class="table-units table__cell">${units}</td>
      <td class="table-cost table__cell">${cost}</td>
      <td>
        <div class="table__actions table__cell">
          <button class="button action-change">
            <span class="svg_ui"
              ><svg class="action-icon_change">
                <use
                  xlink:href="./img/sprite.svg#change"
                ></use></svg></span
            ><span>Изменить</span>
          </button>
          <button class="button action-remove">
            <span class="svg_ui"
              ><svg class="action-icon_remove">
                <use
                  xlink:href="./img/sprite.svg#remove"
                ></use></svg></span
            ><span>Удалить</span>
          </button>
        </div>
      </td>
    `;
    list.append(elem);
  }
  const renderSelect = () => {
    const listType = new Set();

    for (let item of data) {
      listType.add(item.type, 0);
    }
    listType.forEach((itemType) => {
      const newItem = document.createElement("option");
      newItem.innerHTML = `<option value="${itemType}">${itemType}</option>`;
      select.append(newItem);
    });
  };
  renderSelect();
};

const addService = (type, name, units, cost) => {
  const body = {
    type: type,
    name: name,
    units: units,
    cost: cost,
  };
  fetch("http://localhost:3000/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status < 299) {
        throw new Error("not status 200");
      }
      getDataServer();
      setTimeout(() => {
        closeModal();
      }, 3000);
    })
    .catch((error) => console.error(error));
};
