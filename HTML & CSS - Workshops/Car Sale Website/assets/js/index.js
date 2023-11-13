const search = document.querySelector('div.search-box');
const searchIcon = document.querySelector('#search-icon');

const menu = document.querySelector('ul.navbar');
const menuIcon = document.querySelector('#menu-icon');

const header = document.querySelector('header');

searchIcon.addEventListener('click', () => {
    search.classList.toggle('active');
});

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});