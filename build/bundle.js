!function(){"use strict";const e=function(){var e=document.querySelector(".popup-menu"),t=document.querySelector(".popup-dialog-menu"),r=document.querySelector(".menu__icon"),i=function(){e.style.visibility="hidden",t.style.transform="translate3d(645px, 0, 0)"},n=function(){e.style.visibility="hidden",t.style.transform="translate3d(0, -100vh, 0)"};document.documentElement.clientWidth<=576?(document.addEventListener("click",(function(e){var t=e.target;t.closest(".close-menu")&&n(),t.closest(".popup-menu-nav__item")&&n()})),r.addEventListener("click",(function(){e.style.visibility="visible",t.style.transform="translate3d(0, 0, 0)"}))):(document.addEventListener("click",(function(e){var t=e.target;t.closest(".close-menu")&&i(),t.closest(".popup-menu-nav__item")&&i(),t.closest(".popup-menu")&&t.closest(".link-list")&&i()})),r.addEventListener("click",(function(){e.style.visibility="visible",t.style.transform="translate3d(0, 0, 0)"})))};var t,r,i,n,c,o,s,l,a;o=document.querySelector(".header-contacts__phone-number-accord"),s=document.querySelector(".header-contacts__phone-number-accord>.header-contacts__phone-number"),l=document.querySelector(".header-contacts__arrow"),a=l.querySelector("img"),l.addEventListener("click",(function(){if("rotate(180deg)"!==a.style.transform)var e=0,t=setInterval((function(){e++,s.style.opacity=1,a.style.transform="rotate(".concat(7*e,"deg)"),o.style.top="".concat(e,"px"),e>=25&&(a.style.transform="rotate(180deg)",clearInterval(t))}),10);else{var r=25;s.style.opacity=0;var i=setInterval((function(){r--,a.style.transform="rotate(".concat(7*r,"deg)"),o.style.top="".concat(r,"px"),r<=0&&(o.style.top="0px",a.style.transform="rotate(0deg)",clearInterval(i))}),10)}})),e(),document.querySelectorAll("a.scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var r=e.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",blocks:"start"})}))})),e(),n=document.querySelector(".popup-repair-types"),c=n.querySelectorAll(".close.mobile-hide"),document.addEventListener("click",(function(e){var t=e.target;t.closest(".link-list")&&(n.style.visibility="visible"),t.closest(".popup-repair-types")&&t.closest(".close")&&(n.style.visibility="hidden")})),c.forEach((function(e){e.addEventListener("click",(function(){n.style.visibility="hidden"}))})),t=document.querySelectorAll(".link-privacy"),r=document.querySelector(".popup-privacy"),i=function(){r.style.visibility="visible"},t.forEach((function(e){""===e.textContent&&e.addEventListener("click",i)})),document.addEventListener("click",(function(e){var t=e.target;t.closest(".popup-privacy")&&t.closest(".close")&&(r.style.visibility="hidden")})),function(){var e=document.querySelector(".reviews"),t=document.querySelectorAll(".reviews-slider__slide"),r=document.querySelector(".slider-dots-reviews"),i=document.querySelector(".reviews-slider"),n=document.querySelector(".reviews-slider-wrap>.reviews-slider"),c=0;r.style.display="flex",i.style.display="flex",t[c].classList.add("active-slide"),n.style.overflow="initial",function(){for(var e=0;e<t.length;){var i=document.createElement("div");i.className="dot dot-reviews switch",i.innerHTML='<div class="dot__inner"></div>',0===e&&i.classList.add("dot_active"),r.append(i),e++}}();var o=function(e,t,r){n.style.transform="translateX(".concat(i.clientWidth*c,"px)"),e[t].classList.remove(r)},s=function(e,t,r){n.style.transform="translateX(-".concat(i.clientWidth*c,"px)"),e[t].classList.add(r)},l=document.querySelectorAll(".dot-reviews");e.addEventListener("click",(function(e){e.preventDefault();var r=e.target;r.matches(".slider-arrow_left, .slider-arrow_right, .dot-reviews")&&(o(t,c,"active-slide"),o(l,c,"dot_active"),r.matches(".slider-arrow_right")?c++:r.matches(".slider-arrow_left")?c--:r.matches(".dot-reviews")&&l.forEach((function(e,t){r===e&&(c=t)})),c>=t.length?c=0:c<0&&(c=t.length-1),s(t,c,"active-slide"),s(l,c,"dot_active"))}))}()}();