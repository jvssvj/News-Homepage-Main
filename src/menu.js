const body = document.querySelector('body')
const menuButton = document.querySelector('.news__header__nav__menu__button')
const menuModal = document.querySelector('.news__header__nav__items')
const menuItems = document.querySelectorAll('.news__header__nav__item')
const overlay = document.querySelector('.overlay')

function toggleMenu() {
  menuButton.classList.toggle('open')
  menuModal.classList.toggle('open__modal')
  menuItems.forEach((item) => {
    item.classList.toggle('opacity__menu__item')
  })
  overlay.classList.toggle('open__overlay')
  body.classList.toggle('no__scroll')
}

overlay.addEventListener('click', toggleMenu)
menuButton.addEventListener('click', toggleMenu)