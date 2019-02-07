$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    // $(window.height()) //Hauteur de la page

    // Afficher arrowtotop une fois en bas de la page

    if(positionY > 1027){
        $("#scrolltotop").css("opacity",1);
    }
    if(positionY < 100){
        $("#scrolltotop").css("opacity",0);
    }
})