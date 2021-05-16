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
  document.location.href = "http://127.0.0.1:5500/admin/index.html";
}
// КОГДА ПРОВЕРА ПРОЙДЕНА
let val;
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/items")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("not status 200");
      }
      return response.json();
    })
    .then((response) => {
      val = response;
      renderList(response);
      console.log(response);
      return val;
    })
    .catch((error) => console.error(error));

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
    const target = e.target;
    if (target.closest(".btn-addItem")) {
      addItem();
    }
  });
});
const addItem = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
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
