
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
    console.log('nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})
