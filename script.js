let close = document.querySelector('.close img');
let bars = document.querySelector('.bars img');
let close_bg = document.querySelector('.close_bg');
let menu = document.querySelector('header nav ul');

close.style.display = 'none'
bars.addEventListener('click', function (e) {
    menu.style.right = 0;
    close_bg.style.display = 'block'
    close.style.display = 'block'

})

function namee(params) {
    params.addEventListener('click', function (e) {
        // menu.classList.remove('active_menu')
        close_bg.style.display = 'none'
        menu.style.right = "-50%";
    })
}
namee(close)
namee(close_bg)



let login = document.querySelector('.login a');
let login_bg = document.querySelector('.login_bg');
let logindiv = document.querySelector('.logindiv');
let register = document.querySelector('.register');
let register_buttonA = document.querySelector('.login__');

let body = document.querySelector('body');

login.addEventListener('click' , function (e) {
    logindiv.style.top = '50%'
    login_bg.style.display = 'block'
    body.style.overflow = 'hidden'
    body.style.paddingRight = '17px'
})

login_bg.addEventListener('click' , function (e) {
     login_bg.style.display ='none'
    logindiv.style.top = '-100%'
    body.style.overflow = 'auto'
    body.style.paddingRight = '0px'
    register.style.display = 'none'
})

register_buttonA.addEventListener('click' , function (e) {

    e.preventDefault()
    logindiv.style.display = 'none'
    register.style.display = 'block'
})
