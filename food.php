<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Produce and Food
-->

<!DOCTYPE html>
<html>
    <head>
        <title>农产品及食品</title>
        <meta charset="utf-8">
        <!--For scaling on mobiles-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--jQuery & Bootstrap-->
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
                    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!--Customized stylesheets and js-->
        <link href="/css/mainstyle.css" type="text/css" rel="stylesheet" />
        <script src="/js/navbar.js" type="text/javascript"></script>
        <script src="/js/gallery.js" type="text/javascript"></script>
        <link href="/css/gallery.css" type="text/css" rel="stylesheet" />
    </head>

    <body id="foodpage">
        <!--Navigation Bar-->
        <?php include_once("navbar.html"); ?>
        
        <!--Product Image Gallery-->
        <div class="jumbotron">
            <div class="row" id="productlist"></div>
        </div>
        <script type="text/javascript">
            // load food.json and insert HTML elements for each food product
            loadJSON('/data/food.json', loadJSONCallback);
        </script>
        
        <!--Contact Information-->
        <?php include_once("contact.html"); ?>
        
    </body>
</html>
