$(window).on("scroll",function(){
  let positionY = $(this).scrollTop();

  // Afficher arrototop une fois en bas de la page
  if(positionY > 600){
      $("#scrolltotop").css("opacity", 1);
  }
  if(positionY < 600){
      $("#scrolltotop").css("opacity", 0);
  }

  if(positionY > 100){
    $(".nav-bar").css("padding", "0px 10px");
    
  }else{
    $(".nav-bar").css("padding", "20px 10px");

  }
});