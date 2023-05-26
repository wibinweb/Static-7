$(function(){
	$(".tabOne").hover(function(e){
		e.preventDefault();
		$(".next").toggleClass("open");
	});
});

$(function(){
	$(".tabTwo").hover(function(e){
		e.preventDefault();
		$(".nextTwo").toggleClass("open");
	});
});

$(function(){
	$(".tabThree").hover(function(e){
		e.preventDefault();
		$(".nextThree").toggleClass("open");
	});
});

$(function(){
	$(".tabFour").hover(function(e){
		e.preventDefault();
		$(".nextFour").toggleClass("open");
	});
});

$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$(".burger").toggleClass("open");
		$("main").toggleClass("open");
		$("nav").toggleClass("open");
		$("header").toggleClass("open");
	});
});
