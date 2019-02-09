"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Navigation Bar 
*/

$(function(){
    $(document).ready(function() {

    });
    
    $('ul.nav li.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

});