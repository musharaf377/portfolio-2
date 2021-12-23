/*---------------------------------------------
Template name:  Clean
Version:        1.0

[Table of Content]

01: Preloader
02: Isotope
03: MagnificPopup
04: testimonial-slider
05: client-logo-slider
06: Counter up
07: Back to Top
08: back to top button animate
----------------------------------------------*/

(function ($) {
    "use strict";


    var win = $(window);

    /* ======= Preloader ======= */
    win.on('load', function () {
        $('#loading-area').delay('500').fadeOut(2000);
    });

    /* ======= scroll to top ======== */

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

    /* progressbar js */
    $('.demo').progressBar({
        percentage :true,
        animation :true,
        height :"7",
        barColor :"#ed143d",
        shadow :true,
    });

    /* project image vinobox */
    $('.venobox').venobox({
        share      : ['facebook', 'twitter', 'download'],
        framewidth : '600px',                        
        frameheight: '500px',
        numeratio  : true,
        arrowsColor: '#ed143d',
    }); 

    /* isotop active */ 
    var $grid = $('.project-items').isotope({
        // options
    });
    // filter items on button click
    $('.project-btn').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // header stikey menu
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20){
          $('.header-area').addClass('stikey');
        }else{
          $('.header-area').removeClass('stikey')
        }
      })

})(jQuery);