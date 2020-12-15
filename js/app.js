const spans = document.querySelectorAll('.menu__btn span')
const toggleBtn = document.querySelector('.menu__btn')

toggleBtn.addEventListener('click', () => {
    for (let i = 0; i < spans.length; i ++) {
        spans[i].classList.toggle('active')
    }
})
