"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Produce and Food  
*/

$(function(){
    $(document).ready(function() {

        // load ice.json and insert HTML elements for each ice wine product
        loadJSON(function(response) {
            // parse JSON string into object
            var actual_JSON = JSON.parse(response);
            // create HTML element for each product
            for (var i = 0; i < actual_JSON.length; i++) { 
                console.log(actual_JSON[i]);
                var product = actual_JSON[i];
                var cell = "<div class=\"col-md-3\"><div class=\"thumbnail\"><a href=\"" +
                        product.href + "\">" +
                        "<img src=\"" + product.img + "\" alt=\"" + product.name + ">" +
                        "<div class=\"caption\"><p>" + product.name + "</p></div></a></div></div>";
                        
                // append the new element
                $("#productlist").append(cell); 
            }
        });
    });

    /**
     * Get the local JSON file containing data for ice wine.
     */
    function loadJSON(callback) {   
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/website/data/food.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // load succeeds
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }
    
});