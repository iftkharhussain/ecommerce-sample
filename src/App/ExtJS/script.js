// some scripts

// jquery ready start
window.$(document).ready(function($) {
	// jQuery code


    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    
    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
        });
    
        ///////////////// fixed menu on scroll for desctop
        if ($(window).width() > 768) {
            
            $(window).scroll(function(){  
                if ($(this).scrollTop() > 125) {
                    $('.navbar-landing').addClass("fixed-top");
                }else{
                    $('.navbar-landing').removeClass("fixed-top");
                }   
            });
        } // end if
        
        //////////////////////// Fancybox. /plugins/fancybox/
        if($("[data-fancybox]").length>0) {  // check if element exists
            $("[data-fancybox]").fancybox();
        } // end if
        
        //////////////////////// Bootstrap tooltip
        if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
            $('[data-toggle="tooltip"]').tooltip()
        } // end if
    
        /////////////////////// Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a.page-scroll').click(function() {
            $('.navbar-toggler:visible').click();
        });
    
        //////////////////////// Menu scroll to section for landing
        $('a.page-scroll').click(function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 50  }, 1000);
            event.preventDefault();
        });
    
        /////////////////  items slider. /plugins/slickslider/
        if ($('.slick-slider').length > 0) { // check if element exists
            $('.slick-slider').slick();
        } // end if

}); 
// jquery end

