"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Unnamed Website  
*/

$(function(){
    $(document).ready(function() {
        // handle the swipe event on div.carousel
        $( "div.carousel" ).on( "swiperight", swiperightHandler );
        $( "div.carousel" ).on( "swipeleft", swipeleftHandler );
    });

    function swiperightHandler(event) {
        this.carousel('prev');
    }

    function swipeleftHandler(event) {
        this.carousel('next');
    }
    
});