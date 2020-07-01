/************** animsition  *******************/
$(".animsition").animsition({
  inClass: 'fade-in-up-sm',
  outClass: 'fade-out-up-sm',
  inDuration: 1100,
  outDuration: 800,
  linkElement: '.animsition-link',
  // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
  loading: true,
  loadingParentElement: 'body', //animsition wrapper element
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: ['animation-duration', '-webkit-animation-duration'],
  // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
  // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
  overlay: false,
  overlayClass: 'animsition-overlay-slie',
  overlayParentElement: 'body',
  transition: function (url) {
    window.location.href = url;
  }
});

/**********   burger (выпадающие меню-desktop) ****************/
$(document).ready(function () {
  var _link = $(".first-level").children("li");
  _link.hover(function (e) {
    e.preventDefault();
    var _this = $(this);
    if (_this.children(".second-level").html() !== undefined) {
      if (e.type === "mouseenter") {
        _this.children(".second-level").slideDown(200);
      } else {
        _this.children(".second-level").slideUp(200);
      }
    }
  });
});

/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

/*************     изменение HTML      ******************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  if (w < 801) {
    document.getElementById('done_portfolio').href = "javascript:;";
    document.getElementById('done_portfolio').className = "";
    document.getElementById('done_blog').href = "javascript:;";
    document.getElementById('done_blog').className = "";
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

/***************   burger (выпадающие меню-mobile) *************/
$(document).ready(function () {
  var mobile_link = $(".main-menu .first-level").children("li");
  mobile_link.children("a").click(function (e) {
    var _this = $(this);
    var submenu_exists = (_this.next(".second-level").html() === undefined) ? false : true;
    if (submenu_exists) {
      e.preventDefault();
      $(".down").slideUp(500);
      if (_this.next(".second-level").hasClass("down")) {
        _this.next(".second-level").removeClass("down");
      } else {
        $(".down").removeClass("down");
        _this.next(".second-level").slideDown(500);
        _this.next(".second-level").addClass("down");
      }
    }
  });
});

/************    header slick      **************/
$('.header-slider').slick({
  arrows: false,
  dots: false,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});