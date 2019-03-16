<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Website of MapleFood Trading Inc.
-->

<!DOCTYPE html>
<html>
    <head>
        <title>加枫福德商贸有限公司</title>
        <meta charset="utf-8">
        <!--For scaling on mobiles-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--jQuery & Bootstrap-->
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!--Customized stylesheets and js-->
        <link href="/css/mainstyle.css" type="text/css" rel="stylesheet" />
        <script src="/js/navbar.js" type="text/javascript"></script>
        <script src="/js/gallery.js" type="text/javascript"></script>
        <link href="/css/gallery.css" type="text/css" rel="stylesheet" />
        
        <script src="/index.js" type="text/javascript"></script>
        <link href="/index.css" type="text/css" rel="stylesheet" />
    </head>

    <body id="frontpage">
    	<!--Navigation Bar-->
    	<?php include_once("navbar.html"); ?>
        
        <!--Welcome Words-->
        <div class="jumbotron" id="company_name">
            <div>
                <div class="item">
                    <h2>加枫福德商贸有限公司</h2>
                    <h3>MapleFood Trading Inc.</h3>
                </div>
                <img id="logo" class="item" src="/pic/logo.jpeg" alt="LOGO">
            </div>
            
            <h3 id="slogan">PURE<span class="dot"></span>NATURAL<span class="dot"></span>HEALTHY LIVING</h3>
            <hr class="fancy_rule">
        </div>

        <!--Gallery-->
        <div id="gallery" class="jumbotron">       
            <div id="theCarousel" class="carousel slide">
                <ol id="indicators" class="carousel-indicators"></ol>
                <div id="inner" class="carousel-inner"></div>

                <a class="left carousel-control" href="#theCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#theCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </div>
        
        <!--Intro Text and Product Links-->
        <div id="front_tbl" class="jumbotron">
            <!--Intro Text-->
            <div id="introtext">
                <p>
                    加枫福德商贸有限公司主要致力于经销加拿大原地原产原装进口农副产品及葡萄酒及其它酒类。
                </p>
                <p>
                    公司经销的各类农产品及酒类在加拿大本地各大主流超市及商场均有销售，为您提供最纯正地道的加拿大优秀品质和浓醇风味。
                </p>
                <p>
                    加拿大地处北美高纬度地域，地广人稀，自然资源极为丰富，风景秀丽，天然无污染。
                    加拿大境内的农产品皆有政府严格的生产及质量监管系统，高质量高标准，保障全加食品安全健康。
                </p>
                <p>
                    加枫福德商贸有限公司为您提供正宗原装进口产品，为您提供全方位了解加拿大食品文化的窗口。
                </p>
                <p>
                    公司产品宗旨：源自天然，简单纯正，卓越品质，健康保障。
                </p>
            </div>
            <!--Product Links-->
            <div id="product_links">
                <div class="jumbotron jumbotron-product jumbotron-product-inline" id="food-link">
                    <a href="/food.php">
                        <p class="product-caption">
                            农产品及食品<img class="link-img-right" src="/icon/oat.png" alt="农产品及食品">
                        </p>
                    </a>
                </div>
                <div class="jumbotron jumbotron-product jumbotron-product-inline" id="ice-link">
                    <a href="/ice.php">
                        <p class="product-caption">
                            冰酒<img class="link-img-left" src="/icon/ice.png" alt="冰酒">
                        </p>
                    </a>
                </div>
                <div class="jumbotron jumbotron-product jumbotron-product-inline" id="red-link">
                    <a href="/wine/redwine.php">
                        <p class="product-caption">
                            干红葡萄酒<img class="link-img-left" src="/icon/red.png" alt="干红葡萄酒">
                        </p>
                    </a>
                </div>
                <div class="jumbotron jumbotron-product" id="white-link">
                    <a href="/wine/whitewine.php">
                        <p class="product-caption">
                            干白葡萄酒<img class="link-img-left" src="/icon/white.png" alt="干白葡萄酒">
                        </p>
                    </a>
                </div>
            </div>
        </div>
        
        <!--Contact Information-->
        <?php include_once("contact.html"); ?>

    </body>
</html>