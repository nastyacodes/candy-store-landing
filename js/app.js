const toggleBtn = document.querySelector('.menu__btn')
const spans = document.querySelectorAll('.menu__btn span')
const menuList = document.querySelector('.menu__list')

toggleBtn.addEventListener('click', () => {
    for (let i = 0; i < spans.length; i ++) {
        spans[i].classList.toggle('active')
    }

    menuList.classList.toggle('active');
})
