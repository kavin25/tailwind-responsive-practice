const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        // menu.slideDown()
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }
})