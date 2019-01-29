"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Unnamed Website  
*/

$(function(){
    $(document).ready(function() {

        // Expand navbar when hover over it
        // let navbarHeight = $(".").height();
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
    
    $('ul.nav li.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

});