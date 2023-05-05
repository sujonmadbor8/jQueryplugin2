// js code here
// wow js start
wow = new WOW({
  animateClass: "animated",
  offset: 100,
  callback: function (box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
  },
});
wow.init();
document.getElementById("moar").onclick = function () {
  var section = document.createElement("section");
  section.className = "section--purple wow fadeInDown";
  this.parentNode.insertBefore(section, this);
};
// wow js end

// jq code here
$(function () {
  //   preloader start
  $(window).load(function () {
    //$("#loading").delay(2000).fadeOut(500);
    $("#loading").fadeOut(500);
  });
  //   preloader end

  //   particle js start
  jQuery("body").buoyant({
    numberOfItems: 25,
    minRadius: 5,
    maxRadius: 25,
    elementClass: "circles",
    colliding: true,
  });
  //   particle js end
  // scroll to top start
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  // scroll to top end

  // magnific start

  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".image").show(400);
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
    }
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // magnific end
  // lightbox_lc start
  lc_lightbox(".elem", {
    wrap_class: "lcl_fade_oc",
    gallery: true,
    thumb_attr: "data-lcl-thumb",
    skin: "dark",
    // more options here
  });
  // lightbox_lc end

  // magnify start
  $(".example-3").extm({
    squareOverlay: true,
    zoomLevel: 2,
  });

  // magnify end
  // turn js start
  $("#album").turn({ gradients: true, acceleration: true });
  // turn js end

  // ripples start
  $(".banner").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
  // ripples end
  // horizontalslide start
  $.as({
    id: "demo",
    folder: "images",
    images: [
      "/images/yam_1.jpg",
      "/images/yam_2.jpg",
      "/images/yam_3.jpg",
      "/images/yam_4.jpg",
      "/images/yam_5.jpg",
    ],
    speed: 2000,
    imgWidth: 700,
  });
  // horizontalslide end

  // owl carousel start
  $("#slider_area").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // owl carousel end

  // fancybox start
  // fancybox end
  // typed js start
  $("#typedjs").typer({
    strings: ["A Web Designer", "A Web Developer", "And also a Freelancer"],
    typeSpeed: 120,
    backspaceSpeed: 20,
    backspaceDelay: 800,
    repeatDelay: 1000,
    repeat: true,
    autoStart: true,
    startDelay: 100,
  });
  // typed js end

  // 3d card start
  $(".project").hover3d({
    selector: ".project__card",
    shine: true,
  });
  $(".project").hover3d({
    // selector for element
    selector: null,

    // Perspective value for 3d space
    perspective: 1000,

    // Mouse movement sensitivity
    sensitivity: 20,

    // Default behavior is the element will follow the mouse, look like it facing the mouse
    invert: false,

    // Add shining layer
    shine: false,

    // Helper class when mouse hover in the element
    hoverInClass: "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass: "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass: "hover-3d",
  });
  // 3d card end

  // asimsition start
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });
  // asimsition end

  // snakeGallary start
  $(".snake").snakeify({
    speed: 200,
  });
  // snakeGallary end

  // radial angular start
  const clock = radialIndicator(".indicator_Container", {
    radius: 60,
    barWidth: 5,
    barColor: "#FF0000",
    minValue: 0,
    maxValue: 60,
    fontWeight: "normal",
    roundCorner: true,
    format: function (value) {
      const date = new Date();
      return date.getHours() + ":" + date.getMinutes();
    },
  });

  setInterval(() => {
    clock.value(new Date().getSeconds() + 1);
  }, 1000);

  // radial angular end

  // fireworks start
  $("button").clickFireworks({
    // canvas id
    id: "fireworks",

    // append canvas to where, default is body
    appendTo: "body",

    // canvas z-index, make it higher than anything on the page
    zIndex: 1000,
  });
  // fireworks end

  // window popup start
  var id = "#dialog";

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $("#mask").css({ width: maskWidth, height: maskHeight });

  //transition effect
  $("#mask").fadeIn(500);
  $("#mask").fadeTo("slow", 0.9);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(id).css("top", winH / 2 - $(id).height() / 2);
  $(id).css("left", winW / 2 - $(id).width() / 2);

  //transition effect
  $(id).fadeIn(2000);

  //if close button is clicked
  $(".window .close").click(function (e) {
    //Cancel the link behavior
    e.preventDefault();

    $("#mask").hide();
    $(".window").hide();
  });

  //if mask is clicked
  $("#mask").click(function () {
    $(this).hide();
    $(".window").hide();
  });
  // window popup end

  var options = {
    ovalWidth: 400,
    ovalHeight: 50,
    offsetX: 100,
    offsetY: 325,
    angle: 0,
    activeItem: 0,
    duration: 350,
    className: "item",
  };

  var carousel = $(".carousel").CircularCarousel(options);

  /* Fires when an item is about to start it's activate animation */
  carousel.on("itemBeforeActive", function (e, item) {
    $(item).css("box-shadow", "0 0 20px blue");
  });

  /* Fires after an item finishes it's activate animation */
  carousel.on("itemActive", function (e, item) {
    $(item).css("box-shadow", "0 0 20px green");
  });

  /* Fires when an active item starts it's de-activate animation */
  carousel.on("itemBeforeDeactivate", function (e, item) {
    $(item).css("box-shadow", "0 0 20px yellow");
  });

  /* Fires after an active item has finished it's de-activate animation */
  carousel.on("itemAfterDeactivate", function (e, item) {
    $(item).css("box-shadow", "");
  });

  /* Previous button */
  $(".controls .previous").click(function (e) {
    carousel.cycleActive("previous");
    e.preventDefault();
  });

  /* Next button */
  $(".controls .next").click(function (e) {
    carousel.cycleActive("next");
    e.preventDefault();
  });

  /* Manaully click an item anywhere in the carousel */
  $(".carousel .item").click(function (e) {
    var index = $(this).index("li");
    carousel.cycleActiveTo(index);
    e.preventDefault();
  });
});
