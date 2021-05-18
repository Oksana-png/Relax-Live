const toggleRepairTypes = () => {
  const popupRepairTypes = document.querySelector(".popup-repair-types");
  const btnClose = popupRepairTypes.querySelectorAll(".close.mobile-hide");

  const openRepairTypes = () => {
    popupRepairTypes.style.visibility = "visible";
  };

  btnClose.forEach((item) => {
    item.addEventListener("click", () => {
      popupRepairTypes.style.visibility = "hidden";
    });
  });

  // ПОДГРУЗКА ДАННЫХ

  const renderData = () => {
    const createList = (data) => {
      // const elemNav = document.querySelectorAll(".popup-repair-types-nav__item");
      // elemNav.forEach(item => item.style.display = 'block');
      const listRepair = document.querySelector(".nav-list-popup-repair");
      const listDataRepair = new Set();

      for (let item of data) {
        listDataRepair.add(item.type, 0);
      }
      listDataRepair.forEach((item) => {
        const buttoFilter = document.createElement("button");
        buttoFilter.className = "button_o popup-repair-types-nav__item";
        buttoFilter.innerHTML = `${item}`;

        listRepair.append(buttoFilter);
      });
      const filterButton = document.querySelectorAll(
        ".popup-repair-types-nav__item"
      );
      filterButton[0].classList.add("active");
      const key = filterButton[0].textContent;
      selectList(key, data);
    };

    const selectList = (key, response) => {
      const blockSelect = document.querySelector(
        ".popup-repair-types-content-table__list>tbody"
      );
      blockSelect.innerHTML = "";
      for (let item of response) {
        if (item.type === key) {
          const itemTable = document.createElement("tr");
          itemTable.className = "mobile-row";
          itemTable.innerHTML = `
            <td class="repair-types-name">
              ${item.name}
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
              Ед.измерения
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
              Цена за ед.
            </td>
            <td class="repair-types-value">м<sup>2</sup></td>
            <td class="repair-types-value">${item.cost} руб.</td>
          `;
          blockSelect.append(itemTable);
        }
      }
    };

    fetch("crm-backend/db.json")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((response) => {
        localStorage.setItem("dataRepair", JSON.stringify(response));
        createList(response);
      })
      .catch((error) => console.error(error));

    const initListener = () => {
      document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(".link-list")) {
          openRepairTypes();
          window.addEventListener("resize", () => {
            if (document.documentElement.offsetWidth < 1045) {
              mobileTypes();
            }
          });
          mobileTypes();
        }
        if (target.closest(".popup-repair-types") && target.closest(".close")) {
          popupRepairTypes.style.visibility = "hidden";
        }
        // ДАННЫЕ
        const filterButton = document.querySelectorAll(
          ".popup-repair-types-nav__item"
        );
        const titleRepair = document.querySelector(
          ".popup-repair-types-content__head-title"
        );
        if (target.closest(".popup-repair-types-nav__item")) {
          filterButton.forEach((item) => item.classList.remove("active"));
          target.classList.add("active");
          const key = target.textContent;
          const data = JSON.parse(localStorage.getItem("dataRepair"));
          titleRepair.textContent = key;
          selectList(key, data);
        }
      });
    };
    initListener();
  };
  renderData();

  const mobileTypes = () => {
    const nav = document.querySelector(".nav-popup-repair-types");
    const elemNav = document.querySelectorAll(".popup-repair-types-nav__item");
    const l = document.querySelector(".nav-list-popup-repair");
    l.style.minWidth = "100%";
    const selectList = (key, response) => {
      const blockSelect = document.querySelector(
        ".popup-repair-types-content-table__list>tbody"
      );
      blockSelect.innerHTML = "";
      for (let item of response) {
        if (item.type === key) {
          const itemTable = document.createElement("tr");
          itemTable.className = "mobile-row";
          itemTable.innerHTML = `
            <td class="repair-types-name">
              ${item.name}
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
              Ед.измерения
            </td>
            <td class="mobile-col-title tablet-hide desktop-hide">
              Цена за ед.
            </td>
            <td class="repair-types-value">м<sup>2</sup></td>
            <td class="repair-types-value">${item.cost} руб.</td>
          `;
          blockSelect.append(itemTable);
        }
      }
    };
    let currentNav = 0;
    elemNav.forEach((item, i) => {
      if (i === currentNav) {
        item.style.display = "block";
        item.classList.add("active");
        item.style.marginLeft = "auto";
        item.style.marginRight = "auto";
      } else {
        if (document.documentElement.offsetWidth < 1045) {
          item.style.display = "none";
        }
        item.style.marginLeft = "auto";
        item.style.marginRight = "auto";
      }
    });
    const nextNav = (elem, index) => {
      elem[index].classList.add("active");
      elem[index].style.display = "block";
    };
    const prevNav = (elem, index) => {
      elem[index].classList.remove("active");
      elem[index].style.display = "none";
    };
    const navActive = () => {
      if (currentNav > elemNav.length - 1) {
        currentNav = elemNav.length - 1;
      } else if (currentNav < 0) {
        currentNav = 0;
      }
      nextNav(elemNav, currentNav);
    };

    popupRepairTypes.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;
      const data = JSON.parse(localStorage.getItem("dataRepair"));
      const header = document.querySelector(
        ".popup-repair-types-content__head-title"
      );

      if (target.closest("#nav-arrow-popup-repair_left")) {
        prevNav(elemNav, currentNav);
        currentNav--;
        navActive();
        header.textContent = elemNav[currentNav].textContent;
        selectList(elemNav[currentNav].textContent, data);
      } else if (target.closest("#nav-arrow-popup-repair_right")) {
        prevNav(elemNav, currentNav);
        currentNav++;
        navActive();
        header.textContent = elemNav[currentNav].textContent;
        selectList(elemNav[currentNav].textContent, data);
      }
    });
  };
};

// toggleRepairTypes();
export default toggleRepairTypes;
