<!-- 
    Xinyi Wang & Yuchen Wang
    01/14/18
    Product: Milk Powder
-->

<!DOCTYPE html>
<html>
    <head>
        <title>Go Milk高美可奶粉---加枫福德商贸有限公司</title>
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
        <link href="/css/article.css" type="text/css" rel="stylesheet" />
        <link href="/food/food.css" type="text/css" rel="stylesheet" />
        <!--powder.css-->
        <link href="/food/powder.css" type="text/css" rel="stylesheet" />
    </head>

    <body id="foodpage">
        <!--Navigation Bar-->
        <?php include_once("../navbar.html"); ?>
        
        <!--Content-->
        <div class="jumbotron">
            <div id="maincontent">
                <h1>农产品|Go Milk高美可奶粉</h1>
                <a id="product_list_link" href="#jump_target">查看产品列表>></a>
                <div class="introtext intro-head">
                    <img class="pic-m center" src="/food/powder/powder1.jpg" alt="奶粉图片">
                    <div>
                        <p>Go Milk来自于新西兰乳品品牌有限公司。</p>
                        <p>
                            Go Milk采用优质天然的新西兰食品配料，拥有先进的的制造加工设备仪器，制造过程在
                            最高质量的食品安全生产环境里进行，保持了乳制品的纯净和天然。
                            Go Milk在全球快速消费品市场大量的货架供应，在乳业领域具有举足轻重的地位。
                            其所有产品的生产和包装都在最优质的食品安全环境下进行，从而达到国际最高标准。
                        </p>
                    </div>
                </div>
                <div class="introtext" id="introtext-sub-p">
                    <h3 class="subtitle-s">100&#37;新西兰南岛奶源</h3>
                    <p>新西兰与各大陆隔绝，无动植物病虫害，无环境污染。</p>
                    <p>新西兰严格限制重工业发展，被誉为&quot;全球最后一片净土&quot;。</p>
                    <p>独特的温带海洋性气候，雨量充沛，孕育了肥美的牧场。</p>
                    <p>
                        0度控温，24小时内完成从取奶到灌装流程，新鲜卫生巴氏+红外线消毒，
                        保证杀菌到位的同时保留营养物质。
                    </p>
                    <p>新西兰乳品研究所、奥克兰产品检测中心和第三方质量检测。</p>
                    <p>奶粉出口由新西兰风险管控委员会RMP监管。</p>
                    <p>每袋奶粉可全程追溯。</p>
                </div>
                <div class="highlight">
                    <h2>产品特点</h2>
                    <ul>
                        <li>
                            100&#37;源自新西兰原生态牧场，纯天然奶源
                        </li>
                        <li>不添加速溶剂、香精、香料</li>
                        <li>非转基因，不含激素，不含防腐剂</li>
                        <li>清淡口味，纯正奶香，不上火</li>
                        <li id="jump_target">保留了完整的多样的脂溶性维生素，营养全面，味道浓郁</li>
                    </ul>
                </div>
                <div class="types">
                    <h2>产品规格</h2>
                    <div class="product">
                        <img class="product-img" src="/food/powder/1.jpg" alt="奶粉图片">
                        <div>
                            <h3>高美可脱脂奶粉</h3>
                            <h4>零售 ¥169<span style="padding: 0.5em;"></span>团购 ¥129</h4>
                            <p>规格：800g/罐</p>
                        </div>
                        <img class="product-img" src="/food/powder/2.jpg" alt="奶粉图片">
                        <div>
                            <h3>高美可全脂奶粉</h3>
                            <h4>零售 ¥169<span style="padding: 0.5em;"></span>团购 ¥129</h4>
                            <p>规格：800g/罐</p>
                        </div>
                    </div>
                </div>
                <div class="tip">
                    <h2>食用小贴士</h2>
                    <ul>
                        <li>全脂奶粉：</br>
                            30g兑227ml的水，为一杯全脂牛奶
                        </li>
                        <li>脱脂奶粉：</br>
                            25g兑250ml的水，为一杯脱脂奶
                        </li>
                        <li>冷水冲泡为佳，冲泡后进行冷藏提升口感</li>
                        <li>切忌高温冲泡，会结块并破坏热敏感营养物质</li>
                        <li>适用人群：2岁以上人群</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!--Contact Information-->
        <?php include_once("../contact.html"); ?>
    </body>
</html>