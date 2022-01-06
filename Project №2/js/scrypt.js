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
