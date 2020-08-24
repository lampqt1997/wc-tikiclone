$(document).ready(function() {
  var danhmucs = dataMenu();
  var es = fillDataMenu();

  $("#menu-nav").append(es);
  $("li.nav-item.nav-item-custom").hover(
    function() {
      let code = $(this).data("code");
      let danhmuc = danhmucs.find(obj => obj.code == code);
      let menuSubItem = fillDataMenuSub(danhmuc.danhmuccon[0]);
      $(".menu-hover").addClass("d-block");
      $(".menu-hover-nav").empty();
      $(".menu-hover-nav").append(menuSubItem);
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
