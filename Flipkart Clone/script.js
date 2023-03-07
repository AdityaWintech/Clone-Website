let slideNumber=0;
function slideCounter(x){
    slideNumber=slideNumber+x;
    crouselsSlide(slideNumber);

}

crouselsSlide(slideNumber);

function crouselsSlide(number){
    let slides=document.getElementsByClassName('slidess');
    
    if(number==slides.length){
        slideNumber=0;
        number=0;
    }
    if(number<0){
        slideNumber=slides.length-1;
        number=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";

    }
    slides[number].style.display="block";

}
// ========================================interval
