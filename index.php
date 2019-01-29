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
        <link href="mainstyle.css" type="text/css" rel="stylesheet" />
        <script src="navbar.js" type="text/javascript"></script>
        <script src="index.js" type="text/javascript"></script>
        <link href="index.css" type="text/css" rel="stylesheet" />
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
        <div class="jumbotron" id="gallery">       
            <div id="theCarousel" class="carousel slide">
                <ol class="carousel-indicators">
                    <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#theCarousel" data-slide-to="1"></li> 
                    <li data-target="#theCarousel" data-slide-to="2"></li> 
                    <li data-target="#theCarousel" data-slide-to="3"></li>
                    <li data-target="#theCarousel" data-slide-to="4"></li>
                    <li data-target="#theCarousel" data-slide-to="5"></li>
                    <li data-target="#theCarousel" data-slide-to="6"></li>
                    <li data-target="#theCarousel" data-slide-to="7"></li>
                    <li data-target="#theCarousel" data-slide-to="8"></li>
                    <li data-target="#theCarousel" data-slide-to="9"></li>
                    <li data-target="#theCarousel" data-slide-to="10"></li>
                    <li data-target="#theCarousel" data-slide-to="11"></li>
                    <li data-target="#theCarousel" data-slide-to="12"></li>
                    <li data-target="#theCarousel" data-slide-to="13"></li>
                    <li data-target="#theCarousel" data-slide-to="14"></li>
                    <li data-target="#theCarousel" data-slide-to="15"></li>
                    <li data-target="#theCarousel" data-slide-to="16"></li>
                    <li data-target="#theCarousel" data-slide-to="17"></li>
                    <li data-target="#theCarousel" data-slide-to="18"></li>
                    <li data-target="#theCarousel" data-slide-to="19"></li>
                    <li data-target="#theCarousel" data-slide-to="20"></li>
                </ol>
                
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="blue.jpg" alt="Papercarving-Blue" />
                        <div class="carousel-caption">
                            <p>Papercarving</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="yellow.jpg" alt="Papercarving-Yellow" />
                        <div class="carousel-caption">
                            <p>Papercarving</p>
                        </div>
                    </div>
                </div>
                
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