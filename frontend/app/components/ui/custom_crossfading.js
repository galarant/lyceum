/*global $ */
/*jshint unused:false */

$(window).load(function() {

    // Init Backstretch

    $(".backstretch-carousel").backstretch([
        "static/img/angel.png",
        "static/img/draft.png",
        "vendor/wolfram/img/screen-bg_3.jpg",   
        "vendor/wolfram/img/screen-bg_4.jpg",   
        "vendor/wolfram/img/screen-bg_5.jpg",   
        "vendor/wolfram/img/screen-bg_6.jpg", 
        "vendor/wolfram/img/screen-bg_7.jpg" 
    ], {duration: 1000, fade: 700});

    // Pause Backstretch

    $(".backstretch-carousel").backstretch("pause");

    $('#fullpage').fullpage({

        // Navigation
        anchors: ['welcome', 'about', 'portfolio', 'pricing', 'team', 'features', 'contact'],
        menu: '.fullpage__nav',

        // Custom selectors
        sectionSelector: '.site-wrapper',

        //Scrolling
        scrollOverflow: true,

        onLeave: function(index, nextIndex, direction){

            // Make navbar active after leaving 1st section

            if(index === 1 && nextIndex !== 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            if(index !== 1 && nextIndex === 1){
                $(".navbar").toggleClass("navbar__initial");
            }

            // Change Backstretch image on fullPage scroll

            $(".backstretch-carousel").backstretch("show", nextIndex-1);
        }
    });

});
