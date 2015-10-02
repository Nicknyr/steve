$(document).ready(function() {
	
//Scroll down page effect*********************************//
	$( "h1").hide(); 

	$( "h1" ).fadeIn(4000, function() {
		
});

	$("h2").hide();
	$("h2").fadeIn(4000, function() {
		
});

    $(".hunterlogo").hide();

    $(".hunterlogo").fadeIn(4000, function(){

    });

	$("#portfolioLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolioScroll").offset().top
    }, 2000);
});

	$("#aboutLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutScroll").offset().top
    }, 2000);
});

	
	$("#portfolioGhostLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolioScroll").offset().top
    }, 2000);
});

	
	$("#toggle").click(function() {
  		$( "#toggle" ).toggle( "pulsate" );
});


});


