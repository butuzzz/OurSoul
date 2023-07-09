const mediaQuery = window.matchMedia('(max-width: 950px)');
const el = document.querySelectorAll('.el');
const lg = document.querySelector('#little-girl');

const func = function(mediaQuery) {
    if (mediaQuery.matches) {
        for (let i of el) {
            i.classList.remove("row-list-element-container");
        }

        lg.classList.remove('section-container');
    }
}

let timerId = setInterval(func(mediaQuery), 1000);