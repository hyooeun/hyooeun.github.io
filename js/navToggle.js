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
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    appendDots: $("#icon")
  });
});

$(document).ready(function() {
  $(".product-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    dots: true
  });
});

function removeShowFunction(ele) {
  ele.classList.remove("show");
}
function removeActiveFunction(ele) {
  ele.classList.remove("active");
}

$(document).ready(function() {
  // new in index and about page
  Array.from(document.getElementsByClassName("page-link")).forEach(function(ele) {
    ele.onclick = function(event) {
      Array.from(document.getElementsByClassName("articles")).forEach(removeShowFunction);
      Array.from(document.getElementsByClassName("page-link")).forEach(removeActiveFunction);
      document.getElementById("article-" + event.target.id.trim()).classList.add("show");
      event.target.classList.add("active");
    };
  });

  Array.from(document.getElementsByClassName("pub-page-link")).forEach(function(ele) {
    ele.onclick = function(event) {
      Array.from(document.getElementsByClassName("publications-page")).forEach(removeShowFunction);
      Array.from(document.getElementsByClassName("pub-page-link")).forEach(removeActiveFunction);
      document.getElementById("publication-" + event.target.id.trim()).classList.add("show");
      event.target.classList.add("active");
    };
  });
});
