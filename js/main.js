$(window).load (function() {

	var url = window.location.href;
	var idx = url.indexOf("#");
	var hash = idx != -1 ? url.substring(idx + 2) : "";
	
	$(".page").addClass("pageout");

	if ($(window).width() >= 1024) {
		var img = new Image();
		img.src = "about-bg.jpg";
		img.src = "projects-bg.jpg";
	}
	
	if (hash == "" || $("#" + hash).length == 0) {
		$(".page:first").addClass("pagenow");
		$(".page:first").removeClass("pageout");
	} else {
		var prev = 1;
		$(".page").each(function() {
			if ($(this).attr('id') == hash) {
				prev = 0;
				$(this).addClass("pagenow");
				$(this).removeClass("pageout");
			} else if (prev == 1) {
				$(this).addClass("pagein");
				$(this).removeClass("pageout");
			}
		})
	}

	window.location.hash = "#/" + $(".pagenow").attr('id');
	$("body").removeClass().addClass($(".pagenow").attr('id') + "-bd");

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

		window.location.hash = "#/" + $(".pagenow").attr('id');
		$("body").removeClass().addClass($(".pagenow").attr('id') + "-bd");
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

		window.location.hash = "#/" + $(".pagenow").attr('id');
		$("body").removeClass().addClass($(".pagenow").attr('id') + "-bd");
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
