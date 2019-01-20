"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Unnamed Website  
*/

$(function(){
    $(document).ready(function() {
        // include HTML for navigation bar
        // $("#includenavbar").load("navbar.html");
        console.log($("#front"));
        $("#front").addClass("active");
        
        // handle the swipe event on div.carousel
        $( "div.carousel" ).on( "swiperight", swiperightHandler );
        $( "div.carousel" ).on( "swipeleft", swipeleftHandler );

        // Expand navbar when hover over it
        // var navbarHeight = $(".").height();
        // $(".box").mouseenter(function(){
        //     $(this).animate({
        //         height: "300"
        //     });
        // }).mouseleave(function(){
        //     $(this).animate({
        //         height: boxHeight
        //     });
        // });
    });

    function swiperightHandler(event) {
        this.carousel('prev');
    }

    function swipeleftHandler(event) {
        this.carousel('next');
    }
    
    
});