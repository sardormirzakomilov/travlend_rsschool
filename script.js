let close = document.querySelector('.close img');
let bars = document.querySelector('.bars img');
let close_bg = document.querySelector('.close_bg');
let menu = document.querySelector('header nav ul');

bars.addEventListener('click', function (e) {
    menu.style.display = 'block';
    close_bg.style.display = 'block'
})

function namee(params) {
    params.addEventListener('click', function (e) {
        // menu.classList.remove('active_menu')
        close_bg.style.display = 'none'
        menu.style.display = 'none';

    })
}
namee(close)
namee(close_bg)