/************    header slick      **************/
$('.header-slider').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

/***************   burger (выпадающие меню) *************/
$(".main-menu").html($(".main-menu").html()); // set navbar

var mobile_link = $(".main-menu ul").children("li");
mobile_link.children("a").click(function (e) {
  var _this = $(this);
  var submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
  if (submenu_exists) {
    e.preventDefault();
    $(".down").slideUp(100);
    if (_this.next("ul.second-level").hasClass("down")) {
      _this.next("ul.second-level").removeClass("down");
    } else {
      $(".down").removeClass("down");
      _this.next("ul.second-level").slideDown(100);
      _this.next("ul.second-level").addClass("down");
    }
  }
});

/*************     изменение HTML      ******************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  if (w < 801) {
    document.getElementById('done_portfolio').href = "javascript:;";
    document.getElementById('done_blog').href = "javascript:;";
  } else {
    if (w > 800) {
      document.getElementById('done_portfolio').href = "portfolio.html";
      document.getElementById('done_blog').href = "blog.html";
    }
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();