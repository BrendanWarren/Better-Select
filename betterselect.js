$(document).ready(function() {

	$('#selectcover').click(function() {
		resetselect();
	});
		

	$('.select').click(function() {


	 	var selectbox = $(this).attr("data-select-name");
	  	$('#'+selectbox).animate({width: 400}, 300);
	  	$('#selectcover').attr("data-curr-select", selectbox);
	  	$('#selectcover').fadeIn( 500 );
 
	});

	$('.option').click(function() {

		var selectbox = $('#selectcover').attr("data-curr-select");
		var option = $(this).attr("data-value");
		var text = $.trim($(this).text());
		$('#'+selectbox+"val").attr("value", option);
		$('#'+selectbox+"sel").attr("value", text);

	  	resetselect();
 
	});

	$('.select-search').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.option').each(function(){
	     var text = $(this).children( ".label" ).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();         
	   });
	});


});



function resetselect()
{
	var selectbox = $('#selectcover').attr("data-curr-select");
	$('#'+selectbox).animate({width: 0});
	$('#selectcover').fadeOut( 500 );
	$('.select-search').val("");
	var valThis = "";
	$('.option').each(function(){
	     var text = $(this).children( ".label" ).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();         
	   });
}