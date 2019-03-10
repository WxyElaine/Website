"use strict";

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Website of MapleFood Trading Inc.
*/

$(function(){
    $(document).ready(function() {
        // load slideshow.json
        loadJSON('/data/slideshow.json', loadJSONCallback);
        
        // handle the swipe event on div.carousel

        // $( "div.carousel" ).on( "swiperight", swiperightHandler );
        // $( "div.carousel" ).on( "swipeleft", swipeleftHandler );
    });

    /**
     * Get the local JSON file from the given file path.
     * @filepath {string} path of the JSON file
     * @callback {function} function to call after JSON is loaded
     */
    function loadJSON(filepath, callback) {
        // load JSON
        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', filepath, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // load succeeds
                callback(xobj.responseText);
            }
        };
        xobj.send(null);  
    }
    
    /**
     * Parse the JSON file, and create DOM element to display its content.
     */
    function loadJSONCallback(response) {
        // parse JSON string into object
        let actual_JSON = JSON.parse(response);
        // create HTML element for each product
        for (let i = 0; i < actual_JSON.length; i++) { 
            let slide = actual_JSON[i][i];
            // create and append the new carousel element
            createSlide(slide, i);
        }
    }
    
    /**
     * Add a carousel slide.
     * @param slide {JSON} JSON object containing information of the slide
     * @param index {int} unique identifier of the slide
     */
    function createSlide(slide, index) {
        // add indicator
        let li = document.createElement("li");
        li.setAttribute("data-target", "#theCarousel");
        li.setAttribute("data-slide-to", index);
        if (index == 0) {
            li.classList.add("active");
        }
        $("#indicators").append(li);
        // carousel item
        let item = document.createElement("div");
        item.classList.add("item");
        if (index == 0) {
            item.classList.add("active");
        }
        let img = document.createElement("img");
        img.src = slide.src;
        img.alt = slide.name;
        let captionDiv = document.createElement("div");
        captionDiv.classList.add("carousel-caption");
        let caption = document.createElement("p");
        caption.innerHTML = slide.name;
        captionDiv.appendChild(caption);
        // append carousel elements to the carousel item
        item.appendChild(img);
        item.appendChild(captionDiv);
        $("#inner").append(item);
    }
    
    function swiperightHandler(event) {
        this.carousel('prev');
    }

    function swipeleftHandler(event) {
        this.carousel('next');
    }
});
