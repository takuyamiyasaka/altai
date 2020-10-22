$(function() {
	// body...
	$(".maru").click(function(){
		// $(".menuMoji").toggle(".overlay-navigation");
		$(".overlay-navigation").fadeToggle();
	});
	$(".cont_box").click(function(){
		$(".contri_img").toggle("active");
	})
});


// $(function(){
// var style = '<link rel="stylesheet" href="style.css">';
//     $('head link:last').after(style);
// });