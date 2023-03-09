window.addEventListener('scroll',function(){
    let stickyNav=document.getElementById('header-main');
    if(window.pageYOffset>=90){
      stickyNav.classList.add('sticky');
    }
    else{
        stickyNav.classList.remove('sticky')
    }
})
// ===========================Stream================
function streamVideo(){
    const video = document.getElementById("myVideo");
    video.play();
    let text1=document.getElementById("avishal-film");
    text1.style.display="none";
    let text2=document.getElementById("fursat");
    text2.style.display="none";
    let text3=document.getElementById("shoton-iphone");
    text3.style.display="none";
}
    // ======================================
    function streamVideo2(){
        const videoo = document.getElementById("myVideo");
        videoo.pause();
        let text4=document.getElementById("avishal-film");
        text4.style.display="block";
        let text5=document.getElementById("fursat");
        text5.style.display="block";
        let text6=document.getElementById("shoton-iphone");
        text6.style.display="block";
    }