$( function() {
    $( "#tabs" ).tabs();
  } );
 
  $( "#tabs" ).tabs({ active: 0 });
  $(".tabsbtn1 a").addClass("select");

  $(".tabsbtn1").click(function () {
    $(".tabsbtn1 a").addClass("select");
    $(".tabsbtn2 a").removeClass("select");
    $(".tabsbtn3 a").removeClass("select");
    $(".tabsbtn4 a").removeClass("select");
  })
  $(".tabsbtn2").click(function () {
    $(".tabsbtn2 a").addClass("select");
    $(".tabsbtn1 a").removeClass("select");
    $(".tabsbtn3 a").removeClass("select");
    $(".tabsbtn4 a").removeClass("select");
  })
  $(".tabsbtn3").click(function () {
    $(".tabsbtn3 a").addClass("select");
    $(".tabsbtn2 a").removeClass("select");
    $(".tabsbtn1 a").removeClass("select");
    $(".tabsbtn4 a").removeClass("select");
  })
  $(".tabsbtn4").click(function () {
    $(".tabsbtn4 a").addClass("select");
    $(".tabsbtn2 a").removeClass("select");
    $(".tabsbtn1 a").removeClass("select");
    $(".tabsbtn3 a").removeClass("select");
  })