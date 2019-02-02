<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Unnamed Website
-->

<!DOCTYPE html>
<html>
    <head>
        <title>未命名</title>
        <meta charset="utf-8"> 
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
                    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!--Customized stylesheets and js-->
        <link href="/css/mainstyle.css" type="text/css" rel="stylesheet" />
        <script src="/js/navbar.js" type="text/javascript"></script>
        <script src="/index.js" type="text/javascript"></script>
        <link href="/index.css" type="text/css" rel="stylesheet" />
    </head>

    <body id="frontpage">
    	<!--Navigation Bar-->
        <?php include_once("navbar.html"); ?>

        <!--Welcome Words-->
        <div class="jumbotron" id="logo">
            <h1>欢迎</h1>
            <div>
                
            </div>
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
        
        <!--Contact Information-->
        <?php include_once("contact.html"); ?>

    </body>
</html>