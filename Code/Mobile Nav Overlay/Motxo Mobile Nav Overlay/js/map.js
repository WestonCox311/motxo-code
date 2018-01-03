(function () {
    "use strict";
    
    var fullscreenmap = document.querySelector(".fullscreenmap");
    
    var icon = document.querySelector(".button"),
    	menu = document.querySelector('.menu'),
    	strokes = document.querySelectorAll(".strokes");
        
  
    function transformStart() {

        strokes[0].classList.toggle("hide-behind");
        strokes[1].classList.toggle("hide-behind");
        strokes[2].classList.toggle("hide-behind");
        fullscreenmap.classList.toggle("show");
        menu.classList.toggle("hide-behind");

    }
    
    icon.addEventListener("click", transformStart);

})();

