let close = document.querySelector('.close img');
let bars = document.querySelector('.bars img');
let close_bg = document.querySelector('.close_bg');
let menu = document.querySelector('header nav ul');
let media_slide_390 = document.querySelector('.media_slide_390');

close.style.display = 'none'
bars.addEventListener('click', function (e) {
    menu.style.right = 0;
    close_bg.style.display = 'block'
    close.style.display = 'block'
    media_slide_390.style.zIndex = -1;

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
const logAccount = document.querySelector('.Account');
let login_bg = document.querySelector('.login_bg');
let logindiv = document.querySelector('.logindiv');
let register = document.querySelector('.register');
let register_buttonA = document.querySelector('.login__');
let login_buttonA = document.querySelector('.register__');


const body = document.querySelector('body');

login.addEventListener('click', funk1)
logAccount.addEventListener('click', funk1)
function funk1(e) {
    logindiv.classList.remove('login_p_off')
    logindiv.classList.add('login_p_active')
    login_bg.classList.add('login_bg_active')
    body.style.overflow = 'hidden'
    body.style.paddingRight = '17px'

}

login_bg.addEventListener('click', function (e) {
    logindiv.classList.remove('login_p_active')
    login_bg.classList.remove('login_bg_active')
    register.classList.add('register_p_100')
    register.classList.remove('register_p_active')
    body.style.overflow = 'auto'
    body.style.paddingRight = '0'

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
let all = document.querySelector('.section_slide')
let a = document.querySelector('#slide_img1 img')
let b = document.querySelector('#slide_img2 img')
let c = document.querySelector('#slide_img3 img')
let a_item = document.querySelector('.slide_items .item1_')
let b_item = document.querySelector('.slide_items .item2_')
let c_item = document.querySelector('.slide_items .item3_')
let All_item = document.querySelectorAll('.slide_items .s_item')
// ========================================================
a.addEventListener('click', slideA)
a_item.addEventListener('click', slideA)

function slideA() {
    all.style.transform = 'translateX(870px)'
    All_item[0].classList.add('s_item_activeee')
    All_item[1].classList.remove('s_item_activeee')
    All_item[2].classList.remove('s_item_activeee')

}
// ========================================================
b.addEventListener('click', slideB)
b_item.addEventListener('click', slideB)

function slideB() {
    all.style.transform = 'translateX(0px)'

    All_item[0].classList.remove('s_item_activeee')
    All_item[1].classList.add('s_item_activeee')
    All_item[2].classList.remove('s_item_activeee')
}
// =========================================================
c.addEventListener('click', slideC)
c_item.addEventListener('click', slideC)

function slideC() {
    all.style.transform = 'translateX(-870px)'
    All_item[0].classList.remove('s_item_activeee')
    All_item[1].classList.remove('s_item_activeee')
    All_item[2].classList.add('s_item_activeee')
}

let prev_390 = document.querySelector('.ind_slide_390_1')
let next_390 = document.querySelector('.ind_slide_390_2')
let all_390 = document.querySelectorAll('.media_slide_390 .container ._390_img_div img')
let cont_390 = document.querySelector('.media_slide_390 .container')
let _item1 = document.querySelector('._item1')
let _item2 = document.querySelector('._item2')
let _item3 = document.querySelector('._item3')

all_390.forEach((element)=>{
element.style.width = cont_390.clientWidth +'px'
element.style.width = cont_390.clientWidth +'px'
console.log(element)
})
cont_390.addEventListener('mousemove', function (e) {
    e.preventDefault()
})

prev_390.addEventListener('click', function (){
    cont_390.scrollTo({left:cont_390.scrollLeft - cont_390.clientWidth - 30 ,   behavior: "smooth"}) 
})
next_390.addEventListener('click', function (){
    cont_390.scrollTo({left:cont_390.scrollLeft + cont_390.clientWidth + 30 ,   behavior: "smooth"}) 
})


// let widthImg = 0
// all_390.forEach((_, i) => {
//     next_390.addEventListener('click', next_390_);
//     prev_390.addEventListener('click', prev_390_);

//     prev_390.disabled = false
//     function next_390_() {
//         widthImg = widthImg - all_390[0].clientWidth
//         if (widthImg <= -384) {
//             next_390.disabled = true
//         }
//         all_390[i].style.transform = `translateX(${widthImg}px)`
//     }

//     function prev_390_() {
        
//         next_390.disabled = false
//         if (widthImg >= -390) {
//             widthImg = widthImg + all_390[0].clientWidth
//         }
//         if (widthImg > 0) {
//             prev_390.disabled = true
//         }
        
//         all_390[i].style.transform = `translateX(${widthImg}px)`
//     }
// });





// ============================== media =============================
function myFunction(x320, x768, x990) {
    if (x990.matches) {
        a.addEventListener('click', slideA)
        a_item.addEventListener('click', slideA)
        function slideA() {
            all.style.transform = 'translateX(400px)'
        }

        c.addEventListener('click', slideC)
        c_item.addEventListener('click', slideC)

        function slideC() {
            all.style.transform = 'translateX(-420px)'
        }

        // ================================================================
        function namee(params) {
            params.addEventListener('click', function (e) {
                menu.style.right = "-55%";
            })
        }
        namee(close)
        namee(close_bg)
    }
}

const media575 = window.matchMedia("(max-width: 575px)");
const media767 = window.matchMedia("(max-width: 767px)");
const media991 = window.matchMedia("(max-width: 991px)");

// Call the match function at run time:
myFunction(media575, media767, media991);

// Add the match function as a listener for state changes:
media575.addListener(myFunction);
media767.addListener(myFunction);
media991.addListener(myFunction);

