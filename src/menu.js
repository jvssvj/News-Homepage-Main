const body = document.querySelector('body')
const menuIcon = document.querySelector('.news__header__nav__menu')
const menuModal = document.querySelector('.news__header__nav')
const menuItems = document.querySelector('.news__header__nav__items')
const overlay = document.querySelector('.overlay')

function toggleMenu() {
  menuIcon.classList.toggle('open')
  menuModal.classList.toggle('open__modal')
  menuItems.classList.toggle('opacity__items__menu')
  overlay.classList.toggle('open__overlay')
}

overlay.addEventListener('click', toggleMenu)
menuIcon.addEventListener('click', toggleMenu)