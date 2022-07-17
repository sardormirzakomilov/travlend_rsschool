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
let login_buttonA = document.querySelector('.register__');

let body = document.querySelector('body');

login.addEventListener('click', function (e) {
    logindiv.classList.remove('login_p_off')
    logindiv.classList.add('login_p_active')
    login_bg.classList.add('login_bg_active')
})

login_bg.addEventListener('click', function (e) {
    logindiv.classList.remove('login_p_active')
    login_bg.classList.remove('login_bg_active')
    register.classList.add('register_p_100')
    register.classList.remove('register_p_active')

})

register_buttonA.addEventListener('click', function (e) {
    logindiv.classList.add('login_p_off')
    register.classList.add('register_p_active')

})
login_buttonA.addEventListener('click', function (e) {
    logindiv.classList.remove('login_p_off')
    register.classList.remove('register_p_active')

})



let inp1 = document.querySelector('.register #text2');
let inp2 = document.querySelector('.register #number2');
let but_signUp = document.querySelector('.register button');


but_signUp.addEventListener('click', function () {
    alert(`login: ${inp1.value} password: ${inp2.value}`)
    inp1.value = ''
    inp2.value = ''
})

// ==================================== slider=======================================

let slider_div = document.querySelector('.section_slide')
let slide_img = Array.from(document.querySelectorAll('.slide_img'))

let birnarsa = false
startPos = 0
currentTranslate = 0
prevTranslate = 0
animeId = 0
corentIndex = 0

slide_img.forEach((slid, i) => {

    slid.addEventListener('touchstart', touchStart(i))
    slid.addEventListener('touchend', touchEnd)
    slid.addEventListener('touchmove', touchMove)

    slid.addEventListener('mousedown', touchStart(i))
    slid.addEventListener('mouseup', touchEnd)
    slid.addEventListener('mouseleave', touchEnd)
    slid.addEventListener('mousemove', touchMove)
})

window.oncontextmenu = function (e) {
    e.preventDefault()
    e.stopPropagation()
    return false;
}

function touchStart(i) {
    return function (e) {
        corentIndex = i
        startPos = getPositionX(e)
        birnarsa = true
        animeId = requestAnimationFrame(animation)
    }
}
function touchEnd() {
    birnarsa = false
    // console.log(false)
}
function touchMove() {
    if (birnarsa) {
       const correntPosition = getPositionX(e)
    }
}

function getPositionX(e) {
  return e.type.includes('mouse') 
        ? e.pageX 
        : e.touches[0].clientX
        console.log(startPos);
}

function animation() {
    setSliderPosition()
    if (birnarsa) requestAnimationFrame(animation)
}
function setSliderPosition() {
    slider_div.style.transform = `tranlateX(${currentTranslate})px` 
}


