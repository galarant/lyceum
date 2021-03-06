/*global $ */
/*jshint unused:false */

$(window).load(function() {

    // Init Backstretch

    $(".backstretch-carousel").backstretch([
        "static/img/myrtle_broadway_new.jpg",
        "static/img/modern.jpg",
        "static/img/conference_hall.png",
        "vendor/wolfram/img/screen-bg_5.jpg",   
        "vendor/wolfram/img/screen-bg_6.jpg", 
        "vendor/wolfram/img/screen-bg_7.jpg" 
    ], {duration: 1000, fade: 700});

    // Pause Backstretch

    $(".backstretch-carousel").backstretch("pause");

    $('#fullpage').fullpage({

        // Navigation
        anchors: ['welcome', 'about', 'portfolio', 'team', 'features', 'contact'],
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
