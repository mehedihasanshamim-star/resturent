$(document).ready(function() {


     $('.venobox').venobox({
         bgcolor: '#5dff5e',
         border:'25px',
     });


     /*---------------------------
        Latest-news SLIDER
        -----------------------------*/
        $('.latest-slider').owlCarousel({
            merge: true,
            video: true,
            items: 1,
            smartSpeed: 2000,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            margin: 15,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });




    /*---------------------------
        TEAM SLIDER
        -----------------------------*/
        $('.team-slider').owlCarousel({
            merge: true,
            video: true,
            items: 1,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: false,
            autoplayTimeout: 2000,
            margin: 15,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });

    /*--------------------------
    today-menu isotope
    ---------------------------*/

    $('.food-menu-list').isotope({
    	itemSelector: '.single-menu',
    	filter: "*"
    });

    $('.food-menu-list-menu li').click(function(){
    	var selector = $(this).attr('data-filter');

    	$('.food-menu-list').isotope({
    		filter: selector,
    	})
    //changing active class with click event
    $('.food-menu-list-menu .active').removeClass('active');
    $(this).addClass('active');
});



   /*----------------------------
   pogo-slider-start
   ----------------------------*/

   var mySlider = $('.pogoSlider').pogoSlider({
   	pauseOnHover: false
   }).data('plugin_pogoSlider');


    /*-----------------------------
    navbar-sticky-header-start
    ------------------------------*/

    $(window).on('scroll',function() {    
    	var scroll = $(window).scrollTop();
    	if (scroll < 100) {
    		$("#sticky-header").removeClass("sticky");
    	}else{
    		$("#sticky-header").addClass("sticky");
    	}
    });



    /*---------------------------------
    speacial-proomotion area-owl-carousel
    ----------------------------------*/

    $('.menu-discount-offer').owlCarousel({
    	merge: true,
    	video: true,
    	items: 1,
    	smartSpeed: 1000,
    	loop: true,
    	nav: false,
    	dots:true,
    	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    	autoplay: false,
    	autoplayTimeout: 2000,
    	margin: 15,
    	responsiveClass: true,
    	responsive: {
    		0: {
    			items: 1
    		},
    		600: {
    			items: 1
    		},
    		1000: {
    			items: 1
    		}
    	}
    });

});