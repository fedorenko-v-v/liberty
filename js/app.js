$(document).ready(function() {

	$('.sliderContainer').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.sliderExampleWorks').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.portfolioSliserNew').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.btnCall').on('click', function(event){
		  $('.glassWin').addClass('open');
	});

	$('.glassWin .closeWin').on('click', function(event){
		  $('.glassWin').removeClass('open');
	});

	$('.mainMenu .btnMobMenu').on('click', function(event){
		  $('.mainMenu').toggleClass('open');
	});

	$('.listInteres li').on('click', function(event){
		  $(this).toggleClass('active');
	});

	$('#createSites').on('click', function(event){
		  $('.glassBigForma').toggleClass('open');
			$('body').toggleClass('opGlass');
	});

	$('.closeForm').on('click', function(event){
		  $('.glassBigForma').toggleClass('open');
			$('body').toggleClass('opGlass');
	});

	$("#example_id_One").ionRangeSlider({
		min: 25000,
    max: 1000000,
    from: 150000
	});

});
