$(function () {
	$('.reviews__slider ').slick({

		slidesToShow: 1,
		slidesToScroll:1,
		fade:true,
		responsive: [
			{
			  breakpoint: 800,
			  settings: {
				 arrows: false,
				 dots:true,
				 autoplay:true
			  }
			},
		 ]
	});
  
$('.menu-burger').click(function(){

	$('.menu-burger').toggleClass('open-menu');
		 $('.nav').toggleClass('open-menu');


});





});