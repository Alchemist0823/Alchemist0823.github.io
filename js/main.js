$(window).load (function() {

	$(".page").addClass("pageout");
	$(".page:first").addClass("pagenow");
	$(".page:first").removeClass("pageout");

	$(".colorboxshow").colorbox({rel:"colorboxshow"});

	
	if ($(".page .pagev").length > 0) {
		$(".page .pagev").addClass("pagevout");
		$(".page .pagev:first").toggleClass("pagevnow");
		$(".page .pagev:first").removeClass("pagevout");
	}

	var nextPage = function(){

		if ($(".pageout").length == 0) {
			$(".pagenow").toggleClass("pagein");
			$(".pagenow").removeClass("pagenow");

			$(".pagein").toggleClass("pageout");
			$(".pagein").removeClass("pagein");
			
			$(".pageout:first").toggleClass("pagenow");
			$(".pageout:first").removeClass("pageout");
		}
		else {
		//var 
			$(".pagenow").toggleClass("pagein");
			$(".pagenow").removeClass("pagenow");
			
			$(".pageout:first").toggleClass("pagenow");
			$(".pageout:first").removeClass("pageout");
		}
	};

	var backPage = function(){

		if ($(".pagein").length == 0) {
			$(".pagenow").toggleClass("pageout");
			$(".pagenow").removeClass("pagenow");

			$(".pageout").toggleClass("pagein");
			$(".pageout").removeClass("pageout");
			
			$(".pagein:last").toggleClass("pagenow");
			$(".pagein:last").removeClass("pagein");
		}
		else {
		//var 
			$(".pagenow").toggleClass("pageout");
			$(".pagenow").removeClass("pagenow");
			
			$(".pagein:last").toggleClass("pagenow");
			$(".pagein:last").removeClass("pagein");
		}
	};

	//$('#page2').hide();
	$(".right-button").click(nextPage);
	$(".left-button").click(backPage);
	$("#page").on("swiperight", nextPage);

	var turnDown = function(){

		if ($(".pagenow .pagev").length > 0)
			if ($(".pagenow .pagevout").length == 0) {
				$(".pagenow .pagevnow").toggleClass("pagevin");
				$(".pagenow .pagevnow").removeClass("pagevnow");

				$(".pagenow .pagevin").toggleClass("pagevout");
				$(".pagenow .pagevin").removeClass("pagevin");
				
				$(".pagenow .pagevout:first").toggleClass("pagevnow");
				$(".pagenow .pagevout:first").removeClass("pagevout");
			} else {
			//var 
				$(".pagenow .pagevnow").toggleClass("pagevin");
				$(".pagenow .pagevnow").removeClass("pagevnow");
				
				$(".pagenow .pagevout:first").toggleClass("pagevnow");
				$(".pagenow .pagevout:first").removeClass("pagevout");
			}

	};

	$(".down-button").click(turnDown);
	$("#pagev").on("swipe", turnDown);




	/*.click(function() {


		$("#page1").animate({
			opacity: 0,
			left: "-50%"
		}, 200);

		$("#page2").show();
		$('#page2').css("opacity", "0");
		$('#page2').css("left", "100%");
		
		$("#page2").animate({
			opacity: 1,
			left: "10%"
		}, 600);
	})*/
});
