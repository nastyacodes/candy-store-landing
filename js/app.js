//Open menu on click toggle button
const toggleBtn = document.querySelector('.menu__btn')
const spans = document.querySelectorAll('.menu__btn span')
const menuList = document.querySelector('.menu__list')
const menuItems = document.querySelectorAll('.menu__list-item')

toggleBtn.addEventListener('click', toggleMenu)

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', toggleMenu)
})

// opening and closing menu in mobile version
function toggleMenu() {
    for (let i = 0; i < spans.length; i ++) {
        spans[i].classList.toggle('active')
    }

    menuList.classList.toggle('active');
    document.body.classList.toggle('lock')
}

//Activate social media icons on hover and click
const icons = document.querySelectorAll('.footer__socials-icon')

for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover',makeIconActive)
    icons[i].addEventListener('click', makeIconActive)
    icons[i].addEventListener('mouseout', makeIconInActive)
}

//Adding class .active to a and img tags
function makeIconActive(e) {
    e.target.classList.add('active');
    const img = e.target.querySelector('.footer__socials-img')

    if (img) {
        img.classList.add('active')
    } else {
        const div = e.target.closest('.footer__socials-icon')
        div.classList.add('active')
    }
}

//Removing class .active from a and img tags
function makeIconInActive(e) {
    e.target.classList.remove('active')
    const img = e.target.querySelector('.footer__socials-img')

    if (img) {
       img.classList.remove('active')
    } else {
        const div = e.target.closest('.footer__socials-icon')
        div.classList.remove('active')
    }
}

//Change color of navigation bar on scrolling
const header = document.querySelector(".header");

window.addEventListener('scroll', () => {
    // "use strict";
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
})

// .onscroll = function() {
//   "use strict";
  
// };