$(function(){
	$("#nav_btn_open").click(function(){
		$("#nav").css("height","100vh").animate({width: "100%"}, 500);
		$("#nav_btn_open").fadeOut(50);
	});

	$("#nav_btn_close").click(function(){
		$("#nav").animate({"width": "0"}, 300, function(){
			$("#nav").css("height","0");
			$("#nav_btn_open").fadeIn(300);
		});
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>200){
			$("body").addClass("scrolling");
		}
		else{
			$("body").removeClass("scrolling");
		}
	});


	/*
	var sticky = new Sticky("#home #nav_btn_open", {
		stickyClass: "bg-sticky"
	});
	*/

	$(".tabs .tab_nav a").click(function(){
		var tab = $(this).attr("data-tab");
		var parent = $(this).closest(".tabs");
		parent.find("article").hide();
		parent.find("article."+tab).css("display","flex");

		parent.find(".active").removeClass("active");
		$(this).addClass("active");
	});

	$(".tabs .tab_nav li:first-child a").trigger("click");

	$("#hero .slider").slick({
		infinite: true,
		dots: true,
		arrows: false
	});

	$("#contacto").on("submit", function(){
		$("#contacto").addClass("loading");
		$.post("/ajax/contacto.php", $(this).serialize(), function(data){
			$("body").append(data);
			$("#contacto").removeClass("loading");
		});
		return false;
	});
	
	$("#contacto-salesforce").on("submit", function(){
		$("#contacto-salesforce").addClass("loading");
		$.post("/ajax/contactoSalesForce.php", $(this).serialize(), function(data){
			$("body").append(data);
			$("#contacto-salesforce").removeClass("loading");
		});
		return false;
	});
	
});