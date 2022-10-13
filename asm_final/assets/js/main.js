window.addEventListener("scroll", function(){

    
         
    var hearderScroll = document.querySelector('.nav-2');

    if(window.scrollY >= 180){
       hearderScroll.classList.add("sticky");
    }else{
        hearderScroll.classList.remove("sticky");
    }

})