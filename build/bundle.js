!function(){"use strict";const e=function(){var e=document.querySelector(".popup-menu"),t=document.querySelector(".popup-dialog-menu"),n=document.querySelectorAll(".menu__icon");e.style.opacity=0;var o=function(){e.style.visibility="visible",e.style.opacity=1,t.style.transform="translate3d(0, 0, 0)"},r=function(){e.style.visibility="hidden",t.style.transform="translate3d(645px, 0, 0)",e.style.opacity=0},l=function(){e.style.visibility="visible",e.style.opacity=1,t.style.transform="translate3d(0, 0, 0)"},i=function(){e.style.visibility="hidden",e.style.opacity=0,t.style.transform="translate3d(0, -100vh, 0)"};window.addEventListener("resize",(function(){c()}));var c=function(){document.documentElement.clientWidth<=576?(document.addEventListener("click",(function(e){var t=e.target;t.closest(".close-menu")&&i(),t.closest(".popup-menu-nav__item")&&i()})),n.forEach((function(e){e.addEventListener("click",l)}))):(document.addEventListener("click",(function(e){var t=e.target;t.closest(".close-menu")&&r(),t.closest(".popup-menu-nav__item")&&r(),t.closest(".popup-menu")&&t.closest(".link-list")&&r(),!t.closest(".popup-dialog-menu")&&t.closest(".popup-menu")&&r()})),n.forEach((function(e){e.addEventListener("click",o)})))};c()};function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==o.return||o.return()}finally{if(a)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l,i,c,a,s,u,d,p,y,f,v,m,h,_,g;m=document.querySelector(".header-contacts__phone-number-accord"),h=document.querySelector(".header-contacts__phone-number-accord>.header-contacts__phone-number"),_=document.querySelector(".header-contacts__arrow"),g=_.querySelector("img"),_.addEventListener("click",(function(){if("rotate(180deg)"!==g.style.transform)var e=0,t=setInterval((function(){e++,h.style.opacity=1,g.style.transform="rotate(".concat(7*e,"deg)"),m.style.top="".concat(e,"px"),e>=25&&(g.style.transform="rotate(180deg)",clearInterval(t))}),10);else{var n=25;h.style.opacity=0;var o=setInterval((function(){n--,g.style.transform="rotate(".concat(7*n,"deg)"),m.style.top="".concat(n,"px"),n<=0&&(m.style.top="0px",g.style.transform="rotate(0deg)",clearInterval(o))}),10)}})),e(),document.querySelectorAll("a.scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",blocks:"start"})}))})),e(),function(){var e,n=document.querySelector(".popup-repair-types");n.querySelectorAll(".close.mobile-hide").forEach((function(e){e.addEventListener("click",(function(){n.style.visibility="hidden"}))})),e=function(e,n){var o=document.querySelector(".popup-repair-types-content-table__list>tbody");o.innerHTML="";var r,l=t(n);try{for(l.s();!(r=l.n()).done;){var i=r.value;if(i.type===e){var c=document.createElement("tr");c.className="mobile-row",c.innerHTML='\n            <td class="repair-types-name">\n              '.concat(i.name,'\n            </td>\n            <td class="mobile-col-title tablet-hide desktop-hide">\n              Ед.измерения\n            </td>\n            <td class="mobile-col-title tablet-hide desktop-hide">\n              Цена за ед.\n            </td>\n            <td class="repair-types-value">м<sup>2</sup></td>\n            <td class="repair-types-value">').concat(i.cost," руб.</td>\n          "),o.append(c)}}}catch(e){l.e(e)}finally{l.f()}},fetch("crm-backend/db.json").then((function(e){if(200!==e.status)throw new Error;return e.json()})).then((function(n){localStorage.setItem("dataRepair",JSON.stringify(n)),function(n){var o=document.querySelector(".nav-list-popup-repair");o.textContent="";var r,l=new Set,i=t(n);try{for(i.s();!(r=i.n()).done;){var c=r.value;l.add(c.type,0)}}catch(e){i.e(e)}finally{i.f()}l.forEach((function(e){var t=document.createElement("button");t.className="button_o popup-repair-types-nav__item",t.innerHTML="".concat(e),o.append(t)}));var a=document.querySelectorAll(".popup-repair-types-nav__item");a[0].classList.add("active");var s=a[0].textContent;e(s,n)}(n)})).catch((function(e){return console.error(e)})),function(){window.addEventListener("resize",(function(){document.documentElement.offsetWidth<1025&&o()}));var t=document.querySelector(".popup-thank");document.addEventListener("click",(function(r){var l=r.target;l.closest(".link-list")?(n.style.visibility="visible",document.documentElement.offsetWidth<1025&&o()):l.closest(".popup-repair-types")&&l.closest(".close")||l.closest(".popup-repair-types")&&!l.closest(".popup-dialog-repair-types")?n.style.visibility="hidden":l.closest(".popup-thank")&&!l.closest(".popup-thank-bg")&&(t.style.visibility="hidden");var i=document.querySelectorAll(".popup-repair-types-nav__item"),c=document.querySelector(".popup-repair-types-content__head-title");if(l.closest(".popup-repair-types-nav__item")){i.forEach((function(e){return e.classList.remove("active")})),l.classList.add("active");var a=l.textContent,s=JSON.parse(localStorage.getItem("dataRepair"));c.textContent=a,e(a,s)}}))}();var o=function(){document.querySelector(".nav-popup-repair-types");var e=document.querySelectorAll(".popup-repair-types-nav__item");document.querySelector(".nav-list-popup-repair").style.minWidth="100%";var o=function(e,n){var o=document.querySelector(".popup-repair-types-content-table__list>tbody");o.innerHTML="";var r,l=t(n);try{for(l.s();!(r=l.n()).done;){var i=r.value;if(i.type===e){var c=document.createElement("tr");c.className="mobile-row",c.innerHTML='\n            <td class="repair-types-name">\n              '.concat(i.name,'\n            </td>\n            <td class="mobile-col-title tablet-hide desktop-hide">\n              Ед.измерения\n            </td>\n            <td class="mobile-col-title tablet-hide desktop-hide">\n              Цена за ед.\n            </td>\n            <td class="repair-types-value">м<sup>2</sup></td>\n            <td class="repair-types-value">').concat(i.cost," руб.</td>\n          "),o.append(c)}}}catch(e){l.e(e)}finally{l.f()}},r=0;e.forEach((function(e,t){t===r?(e.style.display="block",e.classList.add("active"),e.style.marginLeft="auto",e.style.marginRight="auto"):(document.documentElement.offsetWidth<1045&&(e.style.display="none"),e.style.marginLeft="auto",e.style.marginRight="auto")}));var l=function(e,t){e[t].classList.remove("active"),e[t].style.display="none"},i=function(){var t,n;r>e.length-1?r=e.length-1:r<0&&(r=0),(t=e)[n=r].classList.add("active"),t[n].style.display="block"};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target,c=JSON.parse(localStorage.getItem("dataRepair")),a=document.querySelector(".popup-repair-types-content__head-title");n.closest("#nav-arrow-popup-repair_left")?(l(e,r),r--,i(),a.textContent=e[r].textContent,o(e[r].textContent,c)):n.closest("#nav-arrow-popup-repair_right")&&(l(e,r),r++,i(),a.textContent=e[r].textContent,o(e[r].textContent,c))}))}}(),y=document.querySelectorAll(".link-privacy"),f=document.querySelector(".popup-privacy"),v=function(){f.style.visibility="visible"},y.forEach((function(e){e.addEventListener("click",v)})),document.addEventListener("click",(function(e){var t=e.target;(t.closest(".popup-privacy")&&t.closest(".close")||t.closest(".popup-privacy")&&!t.closest(".popup-dialog-privacy"))&&(f.style.visibility="hidden")})),function(){var e=document.querySelector(".reviews"),t=document.querySelectorAll(".reviews-slider__slide"),n=document.querySelector(".slider-dots-reviews"),o=document.querySelector(".reviews-slider-wrap>.reviews-slider"),r=document.querySelector(".reviews-slider"),l=0;n.style.display="flex",r.style.display="flex",t[l].classList.add("active-slide"),o.style.overflow="initial",function(){for(var e=0;e<t.length;){var o=document.createElement("div");o.className="dot dot-reviews switch",o.innerHTML='<div class="dot__inner"></div>',0===e&&o.classList.add("dot_active"),n.append(o),e++}}();var i=function(e,n,r){o.style.transform="translateX(".concat(t[0].getBoundingClientRect().width*l,"px)"),e[n].classList.remove(r)},c=function(e,n,r){o.style.transform="translateX(-".concat(t[0].getBoundingClientRect().width*l,"px)"),e[n].classList.add(r)},a=document.querySelectorAll(".dot-reviews");window.addEventListener("resize",(function(){o.style.transform="translateX(-".concat(t[0].getBoundingClientRect().width*l,"px)"),s()}));var s=function(){document.documentElement.clientWidth<=576?r.style.marginLeft="".concat((e.getBoundingClientRect().width-t[0].getBoundingClientRect().width)/2,"px"):r.style.marginLeft="0px"};s(),e.addEventListener("click",(function(e){var n=e.target;n.matches(".slider-arrow_left, .slider-arrow_right, .dot-reviews, svg, path")&&(i(t,l,"active-slide"),i(a,l,"dot_active"),n.closest(".slider-arrow_right")?l++:n.closest(".slider-arrow_left")?l--:n.closest(".dot-reviews")&&a.forEach((function(e,t){n===e&&(l=t)})),l>=t.length?l=0:l<0&&(l=t.length-1),c(t,l,"active-slide"),c(a,l,"dot_active"))}))}(),d=document.querySelector(".accordion"),p=d.querySelectorAll(".title_block"),document.querySelectorAll(".accordion>.msg"),d.addEventListener("click",(function(e){var t=e.target;t.closest(".msg-active")?t.classList.remove("msg-active"):t.closest(".title_block")&&p.forEach((function(e,n){e===t&&function(e){for(var t=0;t<p.length;t++)e===t?p[t].classList.add("msg-active"):p[t].classList.remove("msg-active")}(n)}))})),s=document.querySelector(".popup-consultation"),u=function(){s.style.visibility="hidden",s.querySelectorAll("input").forEach((function(e){e.value=""})),s.querySelector(".checkbox__input").checked=!1},document.addEventListener("click",(function(e){var t=e.target;t.closest(".button_wide")&&(s.style.visibility="visible"),t.closest(".close-consultation")&&u(),t.closest(".popup-consultation")&&!t.closest(".feedback-wrap")&&u()})),l=document.querySelectorAll(".formula-item__icon"),i=document.querySelectorAll(".formula-item-popup"),c=function(e){var t=e.target;l.forEach((function(e,n){t===e&&(i[n].style.visibility="visible",i[n].style.opacity=1,i[n].getBoundingClientRect().top<0&&(i[n].classList.add("formula-item-popup__mod"),i[n].style.bottom="-".concat(i[n].clientHeight+10,"px")))}))},a=function(e){var t=e.target;l.forEach((function(e,n){t===e&&(i[n].style.visibility="hidden",i[n].style.opacity=.1,i[n].classList.remove("formula-item-popup__mod"),i[n].getBoundingClientRect().top<0?(i[n].classList.remove("formula-item-popup__mod"),i[n].style.bottom="90px"):i[n].style.bottom="90px")}))},window.innerWidth<=1024?function(){var e=document.querySelector(".slider-arrow_left-formula"),t=document.querySelector(".slider-arrow_right-formula"),n=document.querySelectorAll(".formula-slider__slide"),o=document.querySelector(".formula-slider-wrap"),r=(document.querySelector(".formula-slider"),2);o.style.margin="0 auto",n.forEach((function(e){return e.style.display="none"}));var l=function(e,t,n){e[t].classList.add(n),e[t].style.display="flex"},i=function(e,t,n){e[t].classList.remove(n),e[t].style.display="none"};l(n,r,"active-item"),document.addEventListener("click",(function(e){var t=e.target;t.closest("#formula-arrow_left")?(i(n,r,"active-item"),r--,c(),l(n,r,"active-item")):t.closest("#formula-arrow_right")&&(i(n,r,"active-item"),r++,c(),l(n,r,"active-item"))}));var c=function(){r>=n.length-1?(t.style.display="none",r=n.length-1):r<=0?(e.style.display="none",r=0):(e.style.display="flex",t.style.display="flex")}}():l.forEach((function(e){e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",a)})),function(){var e,t,n,o,r=document.querySelector(".popup-transparency"),l=document.querySelectorAll(".popup-transparency-slider__slide"),i=document.querySelectorAll(".transparency-item__img"),c=r.querySelector(".slider-counter-content__total"),a=r.querySelector(".slider-counter-content__current"),s=0;document.addEventListener("click",(function(e){var t=e.target;t.closest(".transparency-item__img")?function(e){i.forEach((function(t,n){t===e?(l[n].style.display="block",s=n,c.textContent=l.length,a.textContent=s+1):l[n].style.display="none"})),r.style.visibility="visible"}(t):(t.closest(".popup-transparency .close")||t.closest(".popup-transparency")&&!t.closest(".popup-dialog-transparency"))&&(r.style.visibility="hidden")})),e=l.length,t=function(){s<0&&(s=e-1),s>e-1&&(s=0),n(l,s)},n=function(e,t){e[t].style.display="block",c.textContent=l.length,a.textContent=s+1},o=function(e,t){e[t].style.display="none",c.textContent=l.length,a.textContent=s+1},document.addEventListener("click",(function(e){var n=e.target;n.closest("#transparency_right")?(o(l,s),s++,t()):n.closest("#transparency_left")&&(o(l,s),s--,t())}));var u=document.querySelector(".transparency"),d=document.querySelectorAll(".transparency-item"),p=d.length,y=function(){var e=0,t=function(e,t){e[t].style.display="flex"},n=function(e,t){e[t].style.display="none"},o=function(){e>p-1?e=0:e<0&&(e=p-1),t(d,e)};d.forEach((function(e){e.style.display="none"})),t(d,e),u.addEventListener("click",(function(t){var r=t.target;r.closest("#transparency-arrow_left")?(n(d,e),e--,o()):r.closest("#transparency-arrow_right")&&(n(d,e),e++,o())}))};window.innerWidth<=1091&&y(),window.addEventListener("resize",(function(){window.innerWidth<=1091&&y()}))}(),function(){var e,t=document.querySelector(".repair-types"),n=document.querySelector(".repair-types-slider"),r=0,l=t.querySelector(".slider-counter-content__total"),i=t.querySelector(".slider-counter-content__current"),c=t.querySelectorAll(".repair-types-nav__item"),a=function(t){var c,a,s=n.children,u=o(s);try{for(u.s();!(c=u.n()).done;){var d=c.value;if(d===s[t]){d.style.display="block",r=0;var p,y=o(e=s[t].children);try{for(y.s();!(p=y.n()).done;){var f=p.value;f===e[0]?f.style.display="block":f.style.display="none"}}catch(e){y.e(e)}finally{y.f()}a=s[t],l.textContent=a.children.length,i.textContent=r+1}else d.style.display="none"}}catch(e){u.e(e)}finally{u.f()}},s=function(e,t){e[t].style.display="block",i.textContent=r+1},u=function(e,t){e[t].style.display="none"};a(0),s(e,r),c[0].classList.add("active");var d=function(){r>e.length-1?r=0:r<0&&(r=e.length-1),s(e,r)};t.addEventListener("click",(function(t){var n=t.target;n.closest("#repair-types-arrow_left")?(u(e,r),r--,d()):n.closest("#repair-types-arrow_right")?(u(e,r),r++,d()):n.closest(".repair-types-nav__item")&&function(e){c.forEach((function(t,n){e===t?(t.classList.add("active"),a(n)):t.classList.remove("active")}))}(n)})),window.innerWidth<=1024&&function(){t.querySelector(".repair-types-nav__item");var e=document.querySelector("#nav-arrow-repair-right_base"),n=document.querySelector("#nav-arrow-repair-left_base");document.querySelector(".nav-list-repair").style.minWidth="inherit";var o=1;c.forEach((function(e){return e.style.display="none"}));var r=function(e,t){e[t+1].style.display="block",e[t].style.display="block",e[t-1].style.display="block"},l=function(e,t){c.forEach((function(e){e.style.display="none"}))},i=function(){return l(),o>c.length-2?(e.style.display="none",void(o=c.length-2)):o<1?(n.style.display="none",void(o=1)):(n.style.display="block",e.style.display="block",1===o&&(n.style.display="none"),void r(c,o))};r(c,o),i(),document.addEventListener("click",(function(t){var n=t.target;n.closest("#nav-arrow-repair-left_base")?(l(),o--,i()):n.closest("#nav-arrow-repair-right_base")&&(l(),o++,i(),3===o&&(e.style.display="none"))}))}()}(),function(){var e,t=document.querySelectorAll(".feedback__form"),n=document.querySelectorAll(".feedback-block__form"),o=document.querySelector(".popup-thank"),r=o.querySelector(".close-thank");function l(t){t.keyCode&&(e=t.keyCode),this.selectionStart<3&&t.preventDefault();var n="+7 (___) ___-__-__",o=0,r=n.replace(/\D/g,""),l=this.value.replace(/\D/g,""),i=n.replace(/[_\d]/g,(function(e){return o<l.length?l.charAt(o++)||r.charAt(o):e}));-1!=(o=i.indexOf("_"))&&(o<5&&(o=3),i=i.slice(0,o));var c=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||e>47&&e<58)&&(this.value=i),"blur"==t.type&&this.value.length<5&&(this.value="")}document.querySelectorAll('input[name="name"]').forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-я -]/gi,"")}))})),t.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n,r=e.querySelector('input[name="phone"]'),l=e.querySelector('input[type="checkbox"]');if(l.checked&&""!==r.value.trim()&&18===r.value.trim().length){var i=new FormData(e);n={},i.forEach((function(e,t){n[t]=e})),function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(n).then((function(e){if(200!==e.status||405===e.status)throw o.querySelector(".popup-thank__title").innerHTML="Извините!<br>Произошла ошибка",o.querySelector(".popup-thank__descr").textContent="Попробуйте снова. При возникновении неполадок свяжитесь с нами",o.style.visibility="visible",setTimeout((function(){o.style.visibility="hidden"}),5e3),new Error("status network not 200");o.querySelector(".popup-thank__title").innerHTML="Спасибо<br>за обращение!",o.querySelector(".popup-thank__descr").textContent="Ожидайте звонка нашего специалиста. Будем рады помогать Вам!",o.style.visibility="visible",setTimeout((function(){o.style.visibility="hidden"}),5e3)})).catch((function(e){console.error(e)})),r.value="",l.checked=!1,e.closest(".popup-consultation")&&(document.querySelector(".popup-consultation").style.visibility="hidden")}else r.value="",alert("Введите правильные данные!")}))})),n.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n,r=e.querySelector('input[name="phone"]'),l=e.querySelector('input[type="checkbox"]'),i=e.querySelector('input[name="name"]');if(l.checked&&""!==r.value.trim()&&""!==i.value.trim()&&18===r.value.trim().length&&i.value.trim().length>=2){var c=new FormData(e);n={},c.forEach((function(e,t){n[t]=e})),function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(n).then((function(e){if(200!==e.status)throw o.querySelector(".popup-thank__title").innerHTML="Извините!<br>Произошла ошибка",o.querySelector(".popup-thank__descr").textContent="Попробуйте снова. При возникновении неполадок свяжитесь с нами",o.style.visibility="visible",setTimeout((function(){o.style.visibility="hidden"}),5e3),new Error("status network not 200");o.querySelector(".popup-thank__title").innerHTML="Спасибо<br>за обращение!",o.querySelector(".popup-thank__descr").textContent="Ожидайте звонка нашего специалиста. Будем рады помогать Вам!",o.style.visibility="visible",setTimeout((function(){o.style.visibility="hidden"}),5e3)})).catch((function(e){console.error(e)})),r.value="",i.value="",l.checked=!1}else r.value="",i.value="",alert("Введите правильные данные!")}))})),r.addEventListener("click",(function(){o.style.visibility="hidden"})),document.querySelectorAll('input[name="phone"]').forEach((function(e){e.addEventListener("input",l,!1),e.addEventListener("blur",l,!1),e.addEventListener("focus",l,!1)}))}(),function(){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".portfolio"),n=0;window.addEventListener("resize",(function(){t.removeEventListener("touchstart",e,!0);var e=function(e){closePopupOnClick(e,popup)};o()}));var o=function(){if(document.documentElement.clientWidth<=576){n=0,t.querySelector(".slider-arrow_left-portfolio").style.display="none",t.querySelector(".slider-arrow_right-portfolio").style.display="none",document.querySelector(".portfolio-slider-mobile");var o=document.querySelectorAll(".desktop-hide>.portfolio-slider__slide-frame"),r=t.querySelector(".slider-counter-content__total"),l=t.querySelector(".slider-counter-content__current"),i=0,c=function(e,t){e.forEach((function(e){return e.style.display="none"})),l.textContent=t+1},a=function(){var e;i<0?i=o.length-1:i>o.length-1&&(i=0),o[e=i].style.display="block",l.textContent=e+1};r.textContent=o.length,o.forEach((function(e,t){e.style.display=0===t?"block":"none"})),t.addEventListener("click",(function(t){var n=t.target;n.closest("#portfolio-arrow-mobile_left")?(c(o,i),i--,a()):n.closest("#portfolio-arrow-mobile_right")?(c(o,i),i++,a()):n.closest(".portfolio-slider-mobile")&&(console.log(n),o.forEach((function(n,o){n===t.target&&e(o)})))}))}else{var s=t.querySelector(".portfolio-slider"),u=t.querySelectorAll(".portfolio-slider__slide"),d=s.scrollWidth,p=t.querySelector(".slider-arrow_left-portfolio"),y=t.querySelector(".slider-arrow_right-portfolio"),f=t.querySelectorAll(".mobile-hide .portfolio-slider__slide-frame");n=0,u.forEach((function(e){e.style.transform="translateX(".concat(n,"px)")})),p.style.display="none",y.style.display="flex",t.addEventListener("click",(function(e){var t=e.target;t.closest(".slider-arrow_left-portfolio")&&(n+=200,u.forEach((function(e){e.style.transform="translateX(".concat(n,"px)")})),u[0].style.transform.match(/(-?[0-9\.]+)/g)[0],v()),t.closest(".slider-arrow_right-portfolio")&&(n-=200,u.forEach((function(e){e.style.transform="translateX(".concat(n,"px)")})),u[0].style.transform.match(/(-?[0-9\.]+)/g)[0],v())})),document.addEventListener("click",(function(t){t.target.closest(".portfolio-slider__slide-frame")&&f.forEach((function(n,o){n===t.target&&e(o)}))}));var v=function(){n<=-(d-s.clientWidth)?(y.style.display="none",p.style.display="flex",n=-(d-s.clientWidth),u.forEach((function(e){e.style.transform="translateX(-".concat(d-s.clientWidth,"px)")}))):n>=0?(n=0,p.style.display="none",y.style.display="flex",u.forEach((function(e){e.style.transform="translateX(".concat(n,"px)")}))):(p.style.display="flex",y.style.display="flex")}}};o()}));var e=function(e){var t=document.querySelector(".popup-portfolio"),n=document.querySelectorAll(".popup-portfolio-slider>.popup-portfolio-slider__slide"),o=document.querySelectorAll(".popup-portfolio-text"),r=t.querySelector(".slider-counter-content__current"),l=t.querySelector(".slider-counter-content__total"),i=t.querySelector("#popup_portfolio_left"),c=t.querySelector("#popup_portfolio_right"),a=e;0===a?(i.style.display="none",c.style.display="block"):a===n.length-1?(c.style.display="none",i.style.display="block"):(i.style.display="block",c.style.display="block"),r.textContent=a+1,l.textContent=n.length,t.style.visibility="visible",n.forEach((function(t,n){n===e?(t.style.display="block",o[n].style.display="block"):(t.style.display="none",o[n].style.display="none")})),t.addEventListener("click",(function(e){var r=e.target;r.closest(".close")?(t.style.visibility="hidden",n[a].style.display="none",o[a].style.display="none"):r.closest("#popup_portfolio_right")?(s(n,a),a++,u()):r.closest("#popup_portfolio_left")?(s(n,a),a--,u()):r.closest(".popup-portfolio")&&!r.closest(".popup-dialog-portfolio")&&(t.style.visibility="hidden",n[a].style.display="none",o[a].style.display="none"),0===a?(i.style.display="none",c.style.display="block"):a===n.length-1?(c.style.display="none",i.style.display="block"):(i.style.display="block",c.style.display="block")}));var s=function(e,t){e.forEach((function(e){return e.style.display="none"})),o.forEach((function(e){return e.style.display="none"})),r.textContent=t+1},u=function(){a<0?a=0:a>n.length-1&&(a=n.length-1),function(e,t){e[t].style.display="block",o[t].style.display="block",r.textContent=t+1}(n,a)}}}()}();