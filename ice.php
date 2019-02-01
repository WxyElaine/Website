<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Ice Wine
-->

<!DOCTYPE html>
<html>
    <head>
        <title>冰酒</title>
        <meta charset="utf-8"> 
        <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.0.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
                    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <!--Customized stylesheets and js-->
        <link href="/css/mainstyle.css" type="text/css" rel="stylesheet" />
        <script src="/js/navbar.js" type="text/javascript"></script>
        <link href="/css/article.css" type="text/css" rel="stylesheet" />
        <script src="/js/gallery.js" type="text/javascript"></script>
        <link href="/css/gallery.css" type="text/css" rel="stylesheet" />
    </head>

    <body id="icepage">
        <!--Navigation Bar-->
        <?php include_once("navbar.html"); ?>
        
        <!--Content-->
        <!--introduction-->
        <div class="jumbotron">
            <div id="maincontent">
                <h1>冰酒</h1>
                <div class="introtext">
                    <p>
                        冰酒，最初于1794年诞生在德国的弗兰克尼Franconia，当时德国的葡萄园遭受突然来袭的霜害，
                        为了挽救损失，酿酒师将冰冻的葡萄压榨后按传统的方法发酵酿酒，意外产生出了酸甜比例平衡，
                        甘如蜂蜜般的美酒，称为冰酒。
                    </p>
                    <p>
                        冰酒是大自然赋予葡萄酒爱好者的礼物。冰酒酿造技术由德国移民带入加拿大，经改良后酿出的酒更加醇香。
                        <b>冰酒的酿造对地理气候要求极为严格</b>，<b>纬度高</b>，温度低，冬季要全然天寒地冻，
                        但其他季节却又要足够温暖，因此全球只有几个国家生产冰酒。
                    </p>
                    <p>
                        <b>加拿大是世界上唯一能够每年生产冰酒的地方</b>，全球每年三分之二以上的冰酒都产自加拿大，
                        由于得天独厚的自然条件以及反复改良的酿造技术，加拿大的主要葡萄产区尼亚加拉半岛的
                        冰酒品质也较其他地区为佳，<b>加拿大是公认的世界上最主要且品质最佳的冰酒生产国</b>。
                    </p>
                    <p>
                        加拿大冰酒Icewine，是一种甜型葡萄酒，它是利用气温在零下8度以下,在葡萄树上自然冰冻的
                        葡萄酿造的葡萄酒。Icewine是加拿大冰酒的专属名词，只有在VQA（加拿大酒商质量联盟）
                        法定产区按规定酿造的冰酒才能称之为Icewine（类似法国的香槟Champagne规定）。
                    </p>
                    <p>
                        钻石酒庄、哈伯酒庄和卡罗琳酒庄坐落于加拿大的主要葡萄产区尼亚加拉半岛，
                        均为各具特色的优质酒庄，每年生产出无数好酒销往全球各地。冰酒也是他们的重要产品线之一。
                    </p>
                </div>
            </div>
        </div>
        
        <!--product gallery-->
        <div class="jumbotron">
            <div class="row" id="productlist"></div>
            <!-- Modal -->
            <div id="modal-container"></div>
        </div>
        <script type="text/javascript">
            // load ice.json and insert HTML elements for each ice wine product
            loadJSON('/data/ice.json', loadJSONCallback);
        </script>
        
        <!--Contact Information-->
        <?php include_once("contact.html"); ?>
    </body>
</html>
