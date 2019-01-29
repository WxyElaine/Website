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
            let actual_JSON = JSON.parse(response);
            // create HTML element for each product
            for (let i = 0; i < actual_JSON.length; i++) { 
                let product = actual_JSON[i][i];
                let cell = createProduct(product);
                // append the new element
                $("#productlist").append(cell);
                createmodal(product);
            }
        });
        
        
        
        
        
        
        // for the popup window when hover
        $(".trigger_popup_fricc").click(function(){
           $('.hover_bkgr_fricc').show();
        });
        $('.hover_bkgr_fricc').click(function(){
            $('.hover_bkgr_fricc').hide();
        });
        $('.popupCloseButton').click(function(){
            $('.hover_bkgr_fricc').hide();
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
    function createProduct(product) {
        let col_md_2 = document.createElement("div");
        let thumbnail = document.createElement("div");
        col_md_2.classList.add("col-md-2");
        thumbnail.classList.add("thumbnail");
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productInfo.setAttribute("data-toggle", "modal");
        productInfo.setAttribute("data-target", "#exampleModalCenter");
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
    
    /*
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">产品信息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
    */
    
    function createmodal(product) {
        let modal = document.createElement("div");
        $(modal).addClass("modal");
        $(modal).addClass("fade");
        $(modal).attr("id", "exampleModalCenter");
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
        $(modal_body).text(product.name);
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
    
});