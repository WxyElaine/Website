"use strict";
/* global $*/

/*  
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product Gallery
*/

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

let productType = "";
let galleryLayout = "";
let modalLayout = "";

/**
 * Get the local JSON file from the given file path.
 * @filepath {string} path of the JSON file
 * @callback {function} function to call after JSON is loaded
 */
function loadJSON(filepath, callback) {
    // determine the product type of JSON data
    const splitFilepath = filepath.split("/");
    productType = splitFilepath[splitFilepath.length - 1].split(".")[0];
    // add specific layout identifier to different product type
    // default layout: col-md-3
    galleryLayout = "col-md-3";
    if (productType == "ice") {
        galleryLayout = "col-md-2";
        modalLayout = "modalice";
    } else if (productType == "red") {
        modalLayout = "modalred";
    } else if (productType == "white") {
        modalLayout = "modalwhite";
    } else if (productType == "food") {
        galleryLayout = "col-md-4";
    }
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
        let product = actual_JSON[i][i];
        let cell = createProduct(product, i);
        // append the new element
        $("#productlist").append(cell);
        if (productType != "food") {
            createModal(product, i);
        }
    }
    if (productType != "food") {
        // add functionalities to "prev" and "next" button in each modal
        $("div[id^='modalnum']").each(function(){
            let currentModal = $(this);
            // click prev
            currentModal.find('.btn-prev').click(function(){
                toggleFade();
                currentModal.modal('hide');
                currentModal.prev("div[id^='modalnum']").modal('show');
                toggleFade();
            });
            // click next
            currentModal.find('.btn-next').click(function(){
                toggleFade();
                currentModal.modal('hide');
                currentModal.next("div[id^='modalnum']").modal('show');
                toggleFade();
            });
        });
    }
}

function toggleFade() {
    $("div[id^='modalnum']").each(function() {
        $(this).toggleClass("fade");
    });
}

/**
 * Create a product div using product information.
 * @param product {JSON} JSON object containing information of the product
 * @param index {int} unique identifier of the product
 */
function createProduct(product, index) {
    let gridItem = document.createElement("div");
    let thumbnail = document.createElement("div");
    gridItem.classList.add(galleryLayout);
    thumbnail.classList.add("thumbnail");
    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    if (productType != "food") {
        productInfo.setAttribute("data-toggle", "modal");
        productInfo.setAttribute("data-target", "#modalnum" + index);
    }
    let img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.classList.add("product-img");
    let caption = document.createElement("p");
    caption.classList.add("product-caption");
    let productName = document.createElement("span");
    productName.classList.add("product-name-caption");
    productName.innerText = product.name;
    caption.appendChild(productName);
    if (productType != "food") {
        productInfo.appendChild(img);
        let price_list = product.price.split(' ');
        let price = document.createElement("span");
        price.classList.add("product-price-caption");
        price.innerText = '\n\n' + price_list[0] + ' ' + price_list[1] + '\n' + price_list[2] + ' ' + price_list[3];
        caption.appendChild(price);
        productInfo.appendChild(caption);
    } else {
        let link = document.createElement("a");
        link.setAttribute("href", product.href);
        link.appendChild(img);
        link.appendChild(caption);
        productInfo.appendChild(link);
    }
    thumbnail.appendChild(productInfo);
    gridItem.appendChild(thumbnail);
    return gridItem;
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
    $(modal).addClass(modalLayout);
    $(modal).attr("id", "modalnum" + index);
    $(modal).attr("tabindex", "-1");
    $(modal).attr("role", "dialog");
    $(modal).attr("aria-labelledby", "exampleModalCenterTitle");
    $(modal).attr("aria-hidden", "true");
    let modal_dialog = document.createElement("div");
    $(modal_dialog).addClass("modal-dialog");
    $(modal_dialog).addClass("modal-dialog-centered");
    $(modal_dialog).attr("role", "document");
    let modal_content = document.createElement("div");
    $(modal_content).addClass("modal-content");
    let modal_header = document.createElement("div");
    $(modal_header).addClass("modal-header");
    // modal title
    let modal_title = document.createElement("h5");
    $(modal_title).addClass("modal-title");
    $(modal_title).attr("id", "exampleModalLongTitle");
    $(modal_title).text("产品信息");
    // close window button
    let button = document.createElement("button");
    $(button).attr("type", "button");
    $(button).attr("id", "close-button-top");
    $(button).addClass("close");
    $(button).attr("data-dismiss", "modal");
    $(button).attr("aria-label", "Close");
    let span = document.createElement("span");
    $(span).attr("aria-hidde", "true");
    $(span).html("&times;");
    button.appendChild(span);
    modal_header.appendChild(modal_title);
    modal_header.appendChild(button);
    let modal_body = document.createElement("div");
    $(modal_body).addClass("modal-body");
    
    loadInfo(modal_body, product);
    
    let modal_footer = document.createElement("div");
    $(modal_footer).addClass("modal-footer");
    // go to previous product button
    let prev_button = document.createElement("button");
    $(prev_button).attr("type", "button");
    $(prev_button).addClass("btn");
    $(prev_button).addClass("btn-default");
    $(prev_button).addClass("btn-prev");
    $(prev_button).text("上一个");
    // go to next product button
    let next_button = document.createElement("button");
    $(next_button).attr("type", "button");
    $(next_button).addClass("btn");
    $(next_button).addClass("btn-default");
    $(next_button).addClass("btn-next");
    $(next_button).text("下一个");
    
    // close window button (in the bottom right)
    let close_button = document.createElement("button");
    $(close_button).attr("type", "button");
    $(close_button).addClass("btn");
    $(close_button).addClass("btn-default");
    $(close_button).attr("data-dismiss", "modal");
    $(close_button).text("关闭");
    
    modal_footer.appendChild(prev_button);
    modal_footer.appendChild(next_button);
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
    // add product image
    let img = document.createElement("img");
    img.classList.add("info-img");
    // add detailed product information
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = product[key];
        if (key === "name") {
            let title = document.createElement("h2");
            title.classList.add("info-title");
            // remove all newline characters in the title,
            // and replace all whitespaces with the newline character
            title.innerText = value.replace(/\n/g, '').replace(' ', '\n');
            info_body.appendChild(title);
        } else if (key === "engl") {
            let engl = document.createElement("p");
            engl.classList.add("info-engl");
            engl.innerText = value;
            info_body.appendChild(engl);
        } else if (key == "price") {
            let price = document.createElement("p");
            price.classList.add("info-price");
            let price_list = value.split(' ');
            // retail label and price
            let retail = document.createElement("span");
            retail.classList.add("retail");
            retail.innerText = price_list[0];
            price.appendChild(retail);
            let retailPrice = document.createElement("span");
            retailPrice.classList.add("retail-price");
            retailPrice.innerText = ' ' + price_list[1];
            price.appendChild(retailPrice);
            // add space between two prices
            let space = document.createElement("span");
            space.style.padding = "0.5em";
            price.appendChild(space);
            // group label and price
            let group = document.createElement("span");
            group.classList.add("group");
            group.innerText = price_list[2];
            price.appendChild(group);
            let groupPrice = document.createElement("span");
            groupPrice.classList.add("group-price");
            groupPrice.innerText = ' ' + price_list[3];
            price.appendChild(groupPrice);
            // append the price paragraph
            info_body.appendChild(price);
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
            img.alt = product.name;
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

function showLargeImg() {
    
}