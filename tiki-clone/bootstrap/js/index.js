
$(document).ready(function () {
    
    $("li.nav-item.nav-item-custom").hover(
        function () {
            $('.menu-hover').toggleClass('d-block');
        }, 
       
    );
    dataMenu();
   var es =  fillDataMenu();
  $('#menu-nav').append(es);
   
});