let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.prev');
let navBtns   = document.querySelectorAll('.nav_btn');

let slideList = document.querySelector('.slide-list');

let currentSlide = 0;


nextSlide.addEventListener('click', function(){
    currentSlide++;
    if(currentSlide >= slideList.children.length){
        currentSlide = 0;
    }
    slideList.style.transform = 'translate(-' + currentSlide*100 +'%)';
})

prevSlide.addEventListener('click', function(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slideList.children.length - 1;
    }
    slideList.style.transform = 'translate(-' + currentSlide*100 + '%)';
})

navBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(this.dataset.index != currentSlide){
            currentSlide = this.dataset.index;

            slideList.style.transform = 'translate(-' + currentSlide*100 + "%)";
        }
    })
})