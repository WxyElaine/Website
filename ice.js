"use strict";
/* global $*/

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Ice wine  
*/

$(function(){
    const TRANSLATION = {
		"country": "原产国",
		"producer": "制造商",
		"type": "葡萄品种",
		"abv": "酒精度",
		"volume": "容量",
		"juice": "原果汁含量",
		"storage": "储藏",
		"expiration": "保质期"
	};
    
    $(document).ready(function() {

        // load ice.json and insert HTML elements for each ice wine product
        loadJSON(function(response) {
            // parse JSON string into object
            let actual_JSON = JSON.parse(response);
            // create HTML element for each product
            for (let i = 0; i < actual_JSON.length; i++) { 
                let product = actual_JSON[i][i];
                let cell = createProduct(product, i);
                // append the new element
                $("#productlist").append(cell);
                createModal(product, i);
            }
        });

    });

    /**
     * Get the local JSON file containing data for ice wine.
     */
    function loadJSON(callback) {   
        let xobj = new XMLHttpRequest();
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
    
    /**
     * Create a product div using product information.
     * @param product {JSON} JSON object containing information of the product
     */
    function createProduct(product, index) {
        let col_md_2 = document.createElement("div");
        let thumbnail = document.createElement("div");
        col_md_2.classList.add("col-md-2");
        thumbnail.classList.add("thumbnail");
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productInfo.setAttribute("data-toggle", "modal");
        productInfo.setAttribute("data-target", "#modal" + index);
        let img = document.createElement("img");
        img.src = product.img;
        img.classList.add("product-img");
        let caption = document.createElement("p");
        caption.innerText = product.name;
        caption.classList.add("product-caption");
        productInfo.appendChild(img);
        productInfo.appendChild(caption);
        thumbnail.appendChild(productInfo);
        col_md_2.appendChild(thumbnail);
        return col_md_2;
    }
    
    /**
     * Create a modal for a product to display its information.
     * @param product {JSON} information of the object
     * @param index {int} unique identifier of the product
     */
    function createModal(product, index) {
        let modal = document.createElement("div");
        $(modal).addClass("modal");
        $(modal).addClass("fade");
        $(modal).attr("id", "modal" + index);
        $(modal).attr("tabindex", "-1");
        $(modal).attr("role", "dialog");
        $(modal).attr("aria-labelledby", "exampleModalCenterTitle");
        $(modal).attr("aria-hidden", "true");
        let modal_dialog = document.createElement("div");
        $(modal_dialog).addClass("modal-dialog");
        $(modal_dialog).attr("role", "document");
        let modal_content = document.createElement("div");
        $(modal_content).addClass("modal-content");
        let modal_header = document.createElement("div");
        $(modal_header).addClass("modal-header");
        let modal_title = document.createElement("h5");
        $(modal_title).addClass("modal-title");
        $(modal_title).attr("id", "exampleModalLongTitle");
        $(modal_title).text("产品信息");
        let button = document.createElement("button");
        $(button).attr("type", "button");
        $(button).addClass("close");
        $(button).attr("data-dismis", "modal");
        $(button).attr("aria-label", "Close");
        let span = document.createElement("span");
        modal_header.appendChild(modal_title);
        modal_header.appendChild(button);
        let modal_body = document.createElement("div");
        $(modal_body).addClass("modal-body");
        
        loadInfo(modal_body, product);
        
        let modal_footer = document.createElement("div");
        $(modal_footer).addClass("modal-footer");
        let close_button = document.createElement("button");
        $(close_button).attr("type", "button");
        $(close_button).addClass("btn");
        $(close_button).addClass("btn-primary");
        $(close_button).attr("data-dismiss", "modal");
        $(close_button).text("关闭");
        modal_footer.appendChild(close_button);
        modal_content.appendChild(modal_header);
        modal_content.appendChild(modal_body);
        modal_content.appendChild(modal_footer);
        modal_dialog.appendChild(modal_content);
        modal.appendChild(modal_dialog);
        document.getElementById("modal-container").appendChild(modal);
    }
    
    /**
     * Load information of a product into a modal body.
     * @param modal_body {DOM Object} container for the product information
     * @param product {JSON} information of the product
     */
    function loadInfo(modal_body, product) {
        let info_body = document.createElement("div");
        $(info_body).addClass("info-body");
        let keys = Object.keys(product);
        let img = document.createElement("img");
        img.classList.add("info-img");
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = product[key];
            if (key === "name") {
                let title = document.createElement("h2");
                title.classList.add("info-title")
                title.innerText = value;
                info_body.appendChild(title);
            } else if (key === "special") {
                let special = document.createElement("p");
                special.classList.add("info-special");
                special.innerText = value;
                info_body.appendChild(special);
            } else if (key === "description") {
                let description = document.createElement("p");
                description.classList.add("info-description");
                description.innerText = value;
                info_body.appendChild(description);
            } else if (key === "img") {
                img.src = value;
            } else {
                let translated = TRANSLATION[key];
                let subInfo = document.createElement("p");
                subInfo.classList.add("subinfo")
                subInfo.innerText = translated + "：" + value;
                info_body.appendChild(subInfo);
            }
        }
        modal_body.appendChild(img);
        modal_body.appendChild(info_body);
    }
    
});