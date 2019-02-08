// nav-movile open
document.getElementById("open-nav").onclick = function() {
  document.body.classList.toggle("nav-open");
  return false;
};
// nav fix
$(window).bind("scroll", function() {
  if ($(window).scrollTop() > 50) {
    $(".nav").addClass("fixed");
  } else {
    $(".nav").removeClass("fixed");
  }
});
$(document).ready(function() {
  $(".slide-wrapper").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    appendDots: $("#icon")
  });
});

$(document).ready(function() {
  $(".product-slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true
  });
});

$(document).ready(function() {
  // new in index and about page
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  for (ele of Array.from(document.getElementsByClassName("page-link"))) {
    ele.onclick = function(event) {
      for (ele of Array.from(document.getElementsByClassName("articles"))) {
        ele.classList.remove("show");
      }
      for (ele of Array.from(document.getElementsByClassName("page-link"))) {
        ele.classList.remove("active");
      }
      document.getElementById("article-" + event.target.id.trim()).classList.add("show");
      event.target.classList.add("active");
    };
  }
  // publication in what we do page
  for (ele of Array.from(document.getElementsByClassName("pub-page-link"))) {
    ele.onclick = function(event) {
      for (ele of Array.from(document.getElementsByClassName("publications-page"))) {
        ele.classList.remove("show");
      }
      for (ele of Array.from(document.getElementsByClassName("pub-page-link"))) {
        ele.classList.remove("active");
      }
      document.getElementById("publication-" + event.target.id.trim()).classList.add("show");
      event.target.classList.add("active");
    };
  }
});
