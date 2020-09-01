$(document).ready(function() {
  var danhmucs = dataMenu();
  var es = fillDataMenu();
  
  var datadeals = dataDealHot();
  var deal_hot = fillDataDealHot(datadeals);
  
  var datainds = dataIntrustry();
  var industry = fillDataIntrustry(datainds);
 
  var datakey = dataKeyHot();
  var keyhot = fillDataKeyHot(datakey);

  var dataproductbox = dataProductBox();
  var productBox = fillDataProductBox(dataproductbox);

  // console.log(found);
  
  $('.btn-cart-click').click(function (e) { 
    e.preventDefault();
    window.location.href  = 'cart.html';
  });

  $("#menu-nav").append(es);
  $('.deal-hot-append').append(deal_hot);
  $('.intrustry-append').append(industry);
  $('.keyhot-append').append(keyhot);
  $('.product-box-append').append(productBox);

  //hover menu
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
window.onload = function () {
  let item = sessionStorage.getItem("username");
  console.log(item);
  if (item !== null) {
    document.getElementById("labelLginModal").innerText = item;
  }
};

function login() {
  sessionStorage.setItem("prevPage", window.location.href);
  let item = sessionStorage.getItem("username");
  if (item !== null) {
    sessionStorage.removeItem("username");
    console.log("logout"+ sessionStorage.removeItem("username"));
    document.getElementById("labelLginModal").innerText = "Đăng nhập tài khoản";
  } else {
    location.replace("login.html");
  }
}
