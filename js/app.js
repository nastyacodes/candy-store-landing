const toggleBtn = document.querySelector('.menu__btn')
const spans = document.querySelectorAll('.menu__btn span')
const menuList = document.querySelector('.menu__list')

toggleBtn.addEventListener('click', () => {
    for (let i = 0; i < spans.length; i ++) {
        spans[i].classList.toggle('active')
    }

    menuList.classList.toggle('active');
})

const icons = document.querySelectorAll('.footer__socials-icon')

for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover',makeIconActive);
    icons[i].addEventListener('click', () => {
        makeIconActive();
        setTimeout(makeIconInActive(), 1000);
    });
    icons[i].addEventListener('mouseout', makeIconInActive);
}

function makeIconActive(e) {
    e.target.classList.add('active');
    const img = e.target.querySelector('.footer__socials-img');

    if (img) {
        img.classList.add('active');
    } else {
        const div = e.target.closest('.footer__socials-icon');
        div.classList.add('active');
    }
}

function makeIconInActive(e) {
    e.target.classList.remove('active');
    const img = e.target.querySelector('.footer__socials-img');

    if (img) {
       img.classList.remove('active');
    } else {
        const div = e.target.closest('.footer__socials-icon');
        div.classList.remove('active');
    }
}