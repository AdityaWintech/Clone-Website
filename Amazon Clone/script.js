let flag=3;
function controller(x){
    flag=flag+x;
    slideShow(flag);

}
slideShow(flag);
function slideShow(number){
    let slides=document.getElementsByClassName('slide')
    if(number==slides.length){
        flag=0;
        number=0;
    }
    if(number<0){
        flag=slides.length-1;
        number=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none"
        
        
    }
    slides[number].style.display="block";
    
}