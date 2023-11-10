let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}


$( function() {
  $( "#tabs" ).tabs();
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


var line = $('#line');
var div1 = $('#one');
var div2 = $('#two');

var x1 = div1.offset().left + (div1.width()/2);
var y1 = div1.offset().top + (div1.height()/2);
var x2 = div2.offset().left + (div2.width()/2);
var y2 = div2.offset().top + (div2.height()/2);

line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);