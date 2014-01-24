/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
	
});

//Til FAQ slidedown spørgsmålene
//Kan tilføjes .sibling("slidedown1").slideUp(500) for at de andrer svar slider up. 

$(function() {
	$(".questionherbs").click(function() {
		$(this).next('.slidedown1').slideToggle(500);
	});
});


