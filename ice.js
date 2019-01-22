"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Ice wine  
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
                var cell = "<div class=\"col-md-2\"><div class=\"thumbnail\"><a href=\"#\">" +
                        "<img src=\"" + product.img + "\" alt=\"" + product.name + "\"" +
                        "data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"" +
                        product.name + "\"" + "></a></div></div>";
                        
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
        xobj.open('GET', '/data/ice.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // load succeeds
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }
    
});