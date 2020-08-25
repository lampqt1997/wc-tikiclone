$(document).ready(function() {
  var danhmucs = dataMenu();
  var es = fillDataMenu();
  var deals = dataDealHot();
  var deal_hot = fillDataDealHot(deals);
  var inds = dataIntrustry();
  var industry = fillDataIntrustry(inds);
  var key = dataKeyHot();
  var keyhot = fillDataKeyHot(key);
  
  $("#menu-nav").append(es);
  $('.deal-hot-append').append(deal_hot);
  $('.intrustry-append').append(industry);
  $('.keyhot-append').append(keyhot);
  
  $("li.nav-item.nav-item-custom").hover(
    function() {
      let code = $(this).data("code");
      let danhmuc = danhmucs.find(obj => obj.code == code);
      let menuSubItem = fillDataMenuSub(danhmuc.danhmuccon[0]);
      $(".menu-hover").addClass("d-block");
      $(".menu-hover-nav").empty();
      $(".menu-hover-nav").append(menuSubItem);
      $(".img-menu-hover").attr("src",danhmuc.img);

    },
    function() {
      $(".menu-hover").removeClass("d-block");
    }
  );
  $(".menu-hover").mouseover(function() {
    $(".menu-hover").addClass("d-block");
  });
  $(".menu-hover").mouseout(function() {
    $(".menu-hover").removeClass("d-block");

  });
});
