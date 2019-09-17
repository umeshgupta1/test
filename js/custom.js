$(document).ready(function(){
	var a = $(window).height();
	var b = $(".head").height();
	$(".content2").height(a);

	function startAnimation(){
    $(".start").addClass("lineAnimation");
		setTimeout(function(){
			$("#two").animate({left: '0'}, 1500);
			setTimeout(function(){ 
				$(".side-arrow").animate({left: '-100%'}, 1500, function() {
	        $(".side-arrow").animate({left: '100%'}, 1500);
          $("#two .arrow-div").delay(800).fadeIn("fast");
		    });
			}, 1000);
		}, 3000);
  }

	$('.start').mousedown( function() {
		startAnimation();
	});

	$(".lets").on("swipe",function() {
    startAnimation();
  });
});
$(window).on("load",function(){
	$(".lets").delay(500).animate({height: '270px'}, 8000);
});