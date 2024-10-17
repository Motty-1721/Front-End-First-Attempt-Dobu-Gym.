
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const scrollThreshold = 50;

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollThreshold) {
            header.style.backgroundColor = "black";
            header.style.borderBottom = "0.2px solid #e6ff00";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.borderBottom = "none";
        }
    });

    const menuBtn = document.querySelector("#menu-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener("click", () => {
        header.classList.toggle("show-mobile-menu");
    });

    closeMenuBtn.addEventListener("click", () => {
        menuBtn.click();
    });
});


$(document).ready(function(){
    $('#right_arrow').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('#left_arrow').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
    

    $("#self-defense-button").click(function() {
        $(".category-content").hide().removeClass('active');
        $("#self-defense-content").show().addClass('active');
    });

    $("#fitness-room-button").click(function() {
        $(".category-content").hide().removeClass('active');
        $("#fitness-room-content").show().addClass('active');
    });

    $("#personal-training-button").click(function() {
        $(".category-content").hide().removeClass('active');
        $("#personal-training-content").show().addClass('active');
    });
  
    $("#self-defense-button").click();

});