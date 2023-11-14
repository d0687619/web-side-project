let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




$( function() {
  $( "#tabs" ).tabs();
} );

$( function() {
  $( "#tabs" ).tabs({
    event: "mouseover"
  });
  $( "#tabsb" ).tabs({
    event: "mouseover"
  });
} );

$(function() {
  $(".tabJoined").tabs({
    activate: function(e, ui) {
      var source = $(this);
      console.log(source);
      var target = $(".tabJoined").not(source);
      // var tInd = source.tabs("option", "active");
      // target.tabs("widget").find(".ui-tabs-anchor:eq(" + tInd + ")").click();
    }
  });
});

