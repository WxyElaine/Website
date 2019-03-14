<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Company Introduction Page
-->

<!DOCTYPE html>
<html>
    <head>
        <title>公司简介---加枫福德商贸有限公司</title>
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
        <link href="/css/article.css" type="text/css" rel="stylesheet" />
        <link href="/intro.css" type="text/css" rel="stylesheet" />
        <script src="/js/navbar.js" type="text/javascript"></script>
    </head>

    <body id="intropage">
        <!--Navigation Bar-->
        <?php include_once("navbar.html"); ?>
        
        <!--Introduction-->
        <div class="jumbotron" id="maincontent">
            <h1>加枫福德商贸有限公司</h1>
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
            <div id="logo_and_slogan">
                <img id="logo" src="/pic/logo.jpeg" alt="LOGO"/>
                <div id="slogan">
                    <p>新时代 新中产 优生活</p>
                    <p>加枫福德商贸有限公司竭诚祝您</p>
                    <p>乐享佳品 事业兴旺 健康延年</p>
                    <p>热忱邀请您莅临<br class="break">本公司的加拿大生活体验馆</p>
                    <p>品尝美食醇酒</p>
                    <p>全方位了解我们的产品文化</p>
                    <img id="flag" src="/pic/flag_of_canada.svg" alt="Flag of Canada"/>
                    <p><b>源自天然 简单纯正</b></p>
                    <p><b>卓越品质 健康保障</b></p>
                    <p><b>来自加拿大</b></p>

                </div>    
            </div>
            
            <!--Public Domain, <a href="https://en.wikipedia.org/w/index.php?curid=33285599">Link</a>-->
            
        </div>
        
        <!--Contact Information-->
        <?php include_once("contact.html"); ?>
    </body>
</html>
