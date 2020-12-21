//Open menu on click toggle button
const toggleBtn = document.querySelector('.menu__btn')
const spans = document.querySelectorAll('.menu__btn span')
const menuList = document.querySelector('.menu__list')

toggleBtn.addEventListener('click', () => {
    for (let i = 0; i < spans.length; i ++) {
        spans[i].classList.toggle('active')
    }

    menuList.classList.toggle('active');
})

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