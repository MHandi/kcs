/////////////////////////////////////////////////////////////////////////////////////////////
// Custom JS (ADD YOUR JS HERE!)
/////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){

	/////////////////////////////////////////////////////////////////
	// PFolding
	/////////////////////////////////////////////////////////////////

	$(function() {

		var $container = $( '#uc-container' ),
			pfold = $( '#uc-container' ).pfold({
				easing : 'ease-in-out',
				folds : 3,
				folddirection : ['left','bottom','right']
			});

		$container.find( 'span.clickme' ).on( 'click', function() {

			pfold.unfold();

		} ).end().find( 'span.close' ).on( 'click', function() {

			pfold.fold();

		} );

	});

	/////////////////////////////////////////////////////////////////
	// BACKSTRETCH SLIDER (UNCOMMENT TO USE)
	/////////////////////////////////////////////////////////////////
	
	/*$("body").backstretch([
		"img-1.jpg",
		"img-2.jpg",
		"img-3.jpg"
	], {duration: 3000, fade: 750, random: true});*/
	
	/////////////////////////////////////////////////////////////////
	// CAMERA SLIDER
	/////////////////////////////////////////////////////////////////
	
	if ($('.camera_slider').length > 0) {
		jQuery('.camera_slider').camera({
			fx: 'random',
			playPause: false,
			pagination: false,
			height: '41%',  ////////height: '400',
			time:1000,
			random: false
		});
	}
	
	/////////////////////////////////////////////////////////////////
	// Fancybox
	/////////////////////////////////////////////////////////////////
	
	//if ($('body#gallery').is('*')) { // Uncomment to run script on specific page only
		if(jQuery.browser.mobile) {
			var myPhotoSwipe = $(".fancybox").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
		}
		else {
			// Single Image
			//$("a.fancybox").fancybox();
			
			// Multiple Images
			$("a.fancybox[rel='gallery_group']").fancybox({
				'transitionIn'  :  'elastic',
				'transitionOut' :  'elastic',
				'speedIn'       :  600, 
				'speedOut'      :  200 
			});

			$("#SpecDish1").fancybox({
				'titlePosition'	:	'over',
				'onComplete'	:	function() {
					$("#fancybox-wrap").hover(function() {
						$("#fancybox-title").show();
					}, function() {
						$("#fancybox-title").hide();
					});
				}
			});
			$("#SpecDish2").fancybox({
				'titlePosition'	:	'over',
				'onComplete'	:	function() {
					$("#fancybox-wrap").hover(function() {
						$("#fancybox-title").show();
					}, function() {
						$("#fancybox-title").hide();
					});
				}
			});
			$("#SpecDish3").fancybox({
				'titlePosition'	:	'over',
				'onComplete'	:	function() {
					$("#fancybox-wrap").hover(function() {
						$("#fancybox-title").show();
					}, function() {
						$("#fancybox-title").hide();
					});
				}
			});
		}

    //}
	
	/////////////////////////////////////////////////////////////////
	// Animated Entrances
	/////////////////////////////////////////////////////////////////
	
	$(window).scroll(function() {
		$('.animatedEntrance').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
			}
		});
	});
	
	/////////////////////////////////////////////////////////////////
	// Form Validation
	/////////////////////////////////////////////////////////////////
	
	$('#custom_form').formValidation({ 
		validateText: ["name","message"],
		validateEmail: ["email"],
		validateSpam: true,
		captchaTheme: 'greyscale' // default, mini, dark, mini-dark, light, mini-light, greyscale, mini-greyscale
	});
	
	/////////////////////////////////////////////////////////////////
	// GOOGLE MAPS
	/////////////////////////////////////////////////////////////////

	function map() {
		var myLatlng = new google.maps.LatLng(52.4739496,-1.8948095);
		var mapOptions = {
			zoom: 14,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles:
			[
    	{
        "featureType": "all",
        "stylers": [
            		{
              	  	"saturation": -100
            		},
            		{
                	"gamma": 0.5
            			}
        			]
    			}
			]
		}
		// For Contact Page
		if ($('#map').length > 0) {
			var map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var image = 'img/mapicon.png';
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: image
			});
			google.maps.event.addDomListener(window, 'resize orientationchange', function() {
				map.setCenter(myLatlng);
			});
		}
		// For Footer
		if ($('#footer-map').length > 0) {
			var map = new google.maps.Map(document.getElementById('footer-map'), mapOptions);
			var image = 'img/mapicon.png';
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: image
			});
			google.maps.event.addDomListener(window, 'resize orientationchange', function() {
				map.setCenter(myLatlng);
			}); 
		}
	}
	google.maps.event.addDomListener(window, 'load', map);
	
	/////////////////////////////////////////////////////////////////
	// YAY FOR LOLLIES!
	/////////////////////////////////////////////////////////////////

});