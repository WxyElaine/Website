"use strict";
/*global fetch*/
/*global DOMParser*/
/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Company Introduction Page  
*/

$(function(){
    $(document).ready(function(){
        // include HTML for navigation bar
        // $("#includenavbar").load("navbar.html"); 
        load("navbar.html", document.getElementById("includenavbar"));

        // // make the selected navbar item bold
        // if (document.getElementById("includenavbar") != null) {
        //     console.log(document.getElementById("front"));
        //     $("#front").addClass("active");
        // }

    });
    
    function load(url, element) {
        // fetch(url)
        //     .then(function(response) {
        //         return response.text()
        //     })
        //     .then(function(html) {
        //         element.innerHTML = html;
        //     })
        
        let req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.send(null);
    
        element.innerHTML = req.responseText; 
    }
});