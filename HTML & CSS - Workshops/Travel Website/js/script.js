'use strict';

const overlay = document.querySelector('[data-overlay]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbar = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const navElementArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (el) {
    for (let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function () {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        });
    }
}

navToggleEvent(navElementArr);
navToggleEvent(navLinks);

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});