// Modal window

let openModal    = document.querySelector('#modalOpen');
let modalWrapper = document.querySelector('#modalWrap');
let modalContent = document.querySelector('#modalWrap > .modalWindow');
let modalScale   = document.querySelector('#modalWrap .modal_transform');
let closeModal   = document.querySelector('#modalClose');

function openModalWindow() {
    modalWrapper.style.display = 'block';
    setTimeout(function(){
        modalScale.style.transform = 'scale(1)';
    }, 100)
}

function closeModalWindow(e) {
    e.preventDefault();
    modalWrapper.style.display = 'none';
    modalScale.style.transform = 'scale(0)';
}
closeModal.addEventListener('click', closeModalWindow);

function wrapperModal(e) {
    if(e.target == modalWrapper) {
        modalWrapper.style.display = 'none';
        modalScale.style.transform = 'scale(0)';
    }
}
modalWrapper.addEventListener('click', wrapperModal);




// Portals

let boxPortal    = document.querySelector('#portalBox');
let portalButton = document.querySelector('#portalBtn');

function portalScale() {
    boxPortal.style.transform = 'scale(0.9)';
}




// Position

document.addEventListener('DOMContentLoaded', () =>{

    const body = document.querySelector('body')
        let cx = window.innerWidth / 2;
        let cy = window.innerHeight / 2;

    body.addEventListener('mousemove', e => {

        let clientX = e.pageX;
        let clientY = e.pageY;

        console.log(e.pageX + ' / ' + e.pageY);

    // let titleMove1 = document.querySelector('#titleText_1');
    // let titleMove2 = document.querySelector('#titleText_2');
    // let titleBtnMove = document.querySelector('#titleBtn');

    // let moonMove1 = document.querySelector('#moon_1');
    // let moonMove2 = document.querySelector('#moon_2');
    // let moonMove3 = document.querySelector('#moon_3');

    // titleMove1.style.transform = "translate("+((cx - clientX) / 25)+'px,'+ ((cy - clientY) / 25)+'px)'
    // titleMove2.style.transform = "translate("+((cx - clientX) / 50)+'px,'+ ((cy - clientY) / 50)+'px)'
    // titleBtnMove.style.transform = "translate("+((cx - clientX) / 35)+'px,'+ ((cy - clientY) / 35)+'px)'

    // moonMove1.style.transform = "translate("+((cx - clientX) / 30 )+'px,'+ ((cy - clientY) / 30 )+'px)'
    // moonMove2.style.transform = "translate("+((cx - clientX) / 35 )+'px,'+ ((cy - clientY) / 35 )+'px)'
    // moonMove3.style.transform = "translate("+((cx - clientX) / 40 )+'px,'+ ((cy - clientY) / 40 )+'px)'
    })
})

// Parallax

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainBack = document.getElementById('mountains_back');
let mountainFront = document.getElementById('mountains_front');
let titleText = document.getElementById('title_text');
let titleBtn = document.getElementById('title-btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value + 'px';
    mountainBack.style.top = value * 0.3 + 'px';
    titleText.style.marginRight = value * 1.3 + 'px';
    titleText.style.marginTop = value * 0.5 + 'px';
    // titleBtn.style.marginTop = value * 0.5 + 'px';
})


// Animations GSAP

gsap.from(".h1_title-txt", { opacity: 0, duration: 2, delay: 0.5 , y: 30 })
gsap.from(".p_title-txt", { opacity: 0, duration: 2, delay: 1 , y: 30 })
gsap.from(".title_left_btn", { opacity: 0, duration: 1, delay: 1.5 })

gsap.from(".moon1_main", { opacity: 0, duration: 2, delay: 0.5 , y: 40 })
gsap.from(".moon2_main", { opacity: 0, duration: 2, delay: 1 , y: 60 })
gsap.from(".moon3_main", { opacity: 0, duration: 2, delay: 1.5 , y: 80 })


