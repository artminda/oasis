<!DOCTYPE>

<head>

    <?php include_once("includes/head.php") ?>

</head>
<body class="indexbg">
<?php include_once("includes/nav.php") ?>

<section id="login_banner">
    <div class="py-5 d-flex b_h_bg">
        <div class="container pt-3 mt-5 py-0">
            <div class="row">
                <div class="col-md-7 b_h_bnt">
                    <h1 class="display-3 mb-3 b_h1_w">領先全球的交易平台</h1>
                    <button type="submit" class="b_bnt_colo btn-primary" data-toggle="modal" data-target="#exampleModal"
                            data-whatever="@getbootstrap">登入</button>
                    <button type="submit" class="b_bnt_colo btn-primary" data-toggle="modal" data-target="#exampleModal2"
                            data-whatever="@getbootstrap">註冊</button>
                </div>
            </div>
        </div>
    </div>
</section>
<!--彈跳登入內容-->

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">登入</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="form-group2">
                    <input type="text" class="form-control" placeholder="帳號">
                </div>
                <div class="form-group2">
                    <input type="password" class="form-control" placeholder="密碼">
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary">提交</button>
            </div>
        </div>
    </div>
</div>


<!--彈跳註冊內容-->

<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">註冊</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="form-group2">
                    <input type="text" class="form-control" placeholder="姓名">
                </div>
                <div class="form-group2">
                    <input type="email" class="form-control" placeholder="信箱">
                </div>
                <div class="form-group2">
                    <input type="email" class="form-control" placeholder="電話">
                </div>
                <div class="form-group2">
                    <input type="email" class="form-control" placeholder="line ID">
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary">提交</button>
            </div>
        </div>
    </div>
</div>


<section id="adv_banner">
    <div class="container pb-5" >
    <h2 class="mb-4 mt-sm-5 text-light title_weight">官方主題活動</h2>
    <div class="b_mm">
        <div class="row">
            <div class="col-md-3 col-6"><img class="img-fluid d-block" src="img/banner1.jpg"></div>
            <div class="col-md-3 col-6"><img class="img-fluid d-block" src="img/banner2.jpg"></div>
            <div class="col-md-3 col-6"><img class="img-fluid d-block" src="img/banner3.jpg"></div>
            <div class="col-md-3 col-6"><img class="img-fluid d-block" src="img/banner4.jpg"></div>
        </div>
    </div>
        <div class="b_mss">
            <div class="container">
                <div class="row">
                    <div class="text-center mx-auto col-lg-8 ">
                        <div class="carousel slide carousel-fade" data-interval="3000" data-ride="carousel" id="carousel1">
                            <div class="carousel-inner">
                                <div class="carousel-item active"><img class="d-block w-100" src="img/banner1.jpg"></div>
                                <div class="carousel-item"><img class="d-block w-100" src="img/banner2.jpg"></div>
                                <div class="carousel-item"><img class="d-block w-100" src="img/banner3.jpg"></div>
                                <div class="carousel-item"><img class="d-block w-100" src="img/banner4.jpg"></div>
                            </div>
                            <ol class="carousel-indicators" style=" margin-bottom: 0;">
                                <li class="active" data-slide-to="0" data-target="#carousel1"></li>
                                <li data-slide-to="1" data-target="#carousel1"></li>
                                <li data-slide-to="2" data-target="#carousel1"></li>
                                <li data-slide-to="3" data-target="#carousel1"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
    <!--=======================
    跑馬燈
    =========================-->
    <div id="dw_running">
        <marquee>
            <span style=""><a data-target="#exampleModalCenter" data-toggle="modal" href="">最新公告 : 已完成 BCHABC、BCHSV 分發並開啟交易</a></span>
        </marquee>
    </div> <!-- Modal -->
    <div aria-hidden="true" aria-labelledby="exampleModalCenterTitle" class="modal fade" id="exampleModalCenter"
         role="dialog" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">已完成 BCHABC、BCHSV 分發並開啟交易</h5>
                    <button aria-label="Close" class="close" data-dismiss="modal" type="button"><span
                                aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    即日起註冊會員就可以參加北海道抽獎雙人來回機票一次
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal" type="button">關閉</button>
                    <button class="btn btn-primary" type="button">走吧 ! 抽獎去</button>
                </div>
            </div>
        </div>
    </div>
    <!--=======================
    折線圖
    =========================-->

</div>
<section id="chart-line">
<div class="py-3">
    <div class="container">
        <div class="row b_bg_cooo b_bg_border">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-4 chart-line">
                        <h1 class="mt-5 text-light"><span>BTC/USD</span> <span
                                    style="color: greenyellow;">6461.42</span></h1>
                        <p class="mt-2"><span style="color: #adff2fa8;">+0.72%</span> TODAY <span>HIGH=<span>6520</span></span>
                            <span>LOW=</span><span>6422</span></p>
                    </div>
                    <div class="col-md-8" style="overflow: hidden; padding: 0px;">
                        <!--div class="col-md-8"><canvas id="SAAAA"   ></canvas-->
                        <div id="co_1" style="height: 300px; min-width: 740px;color:#fff"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<!--=======================
市場列表圖
=========================-->
<div class="text-center py-2">
    <div class="container">
        <div class="row b_bg_cooo b_bg_border">
            <div class="col-md-12">
                <div class="text-center">
                    <div class="row">
                        <div class="col">
                            <h1 class="hh11">市場</h1>
                        </div>
                        <div class="col py-4">
                            <div class="co_x_3">
                                <span class="icon"><i class="fa fa-search"></i></span> <input id="search"
                                                                                              placeholder="Search"
                                                                                              type="search">
                            </div>
                        </div>
                    </div>
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-target="#tabone" data-toggle="tab">收藏</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-target="#tabtwo" data-toggle="tab">BTC交易區</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-target="#tabthree" data-toggle="tab">ETH交易區</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-target="#tabtfour" data-toggle="tab">USDT交易區</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="tab-content mt-2">
                            <div class="tab-pane fade show active" id="tabone" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-dark">
                                        <thead>
                                        <tr class="green-text">
                                            <th scope="col">交易對象</th>
                                            <th scope="col">最新成交價格</th>
                                            <th scope="col">24H漲跌幅度</th>
                                            <th scope="col">24H最高</th>
                                            <th scope="col">24H最低</th>
                                            <th scope="col">24H成交量</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tabtwo" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-dark">
                                        <thead>
                                        <tr class="green-text">
                                            <th scope="col">交易對象</th>
                                            <th scope="col">最新成交價格</th>
                                            <th scope="col">24H漲跌幅度</th>
                                            <th scope="col">24H最高</th>
                                            <th scope="col">24H最低</th>
                                            <th scope="col">24H成交量</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tabthree" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-dark">
                                        <thead>
                                        <tr class="green-text">
                                            <th scope="col">交易對象</th>
                                            <th scope="col">最新成交價格</th>
                                            <th scope="col">24H漲跌幅度</th>
                                            <th scope="col">24H最高</th>
                                            <th scope="col">24H最低</th>
                                            <th scope="col">24H成交量</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tabtfour" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-striped table-dark">
                                        <thead>
                                        <tr class="green-text">
                                            <th scope="col">交易對象</th>
                                            <th scope="col">最新成交價格</th>
                                            <th scope="col">24H漲跌幅度</th>
                                            <th scope="col">24H最高</th>
                                            <th scope="col">24H最低</th>
                                            <th scope="col">24H成交量</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-danger">2.29%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">XRP/ETH</th>
                                            <td>0.00291818/3.47CNY</td>
                                            <td class="text-success">3%</td>
                                            <td>0.00302909</td>
                                            <td>0.00302909</td>
                                            <td>66672.0333333300000eETH</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="py-sm-5 py-3">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="fcolo"><span class="badge badge-light">:</span>友情連結</h4>
                <ul class="" id="likk">
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">非小号</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币头条</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">DapDap</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">推比特</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">比特之家</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">加密世界杯</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">Vipchain</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">比特之窗</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币牛牛</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">区块网</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">比特一下</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币问</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">HB.io</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">嘻哈财经</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">口袋比特</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币圈子</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">比特家</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币问</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">HB.io</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">嘻哈财经</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">口袋比特</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">币圈子</a>
                    </li>
                    <li class="text-mlb">
                        <a class="text-muted" href="#" target="_blank">比特家</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<section id="help-info" >
<div class="container">
    <div class="row text-center">
        <div class="col-md-4">
            <h3 class="fcolo"><span class="badge badge-light">:</span>
            新手入門 </h3>

                <ul>
                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>
                </ul>
        </div>

        <div class="col-md-4 ">
            <h3 class="fcolo"><span class="badge badge-light">:</span>常見問題</h3>
            <div class="text-center  p-i-s0  text-muted">

                <ul>
                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="col-md-4 ">
            <h3 class="fcolo"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span class="badge badge-light">:</span>驗證問題</h3>
            <div class="text-center b_li_none p-i-s0  text-muted">

                <ul>
                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>

                    <a class="text-muted b_li_none" href="">
                        <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                    </a>
                </ul>

            </div>
        </div>
    </div>
</div>
</section>

<section id="help-info-m" >
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <h3 class="text-light btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    新手入門
                </h3>
                <div  class="collapse" id="collapseExample">

                    <ul>
                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>
                    </ul>
                </div>
            </div>

            <div class="col-md-4">
                <h3 class="text-light btn-dark" type="button" data-toggle="collapse" data-target="#question" aria-expanded="false" aria-controls="collapseExample">
                    常見問題
                </h3>
                <div  class="collapse" id="question">

                    <ul>
                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <h3 class="text-light btn-dark" type="button" data-toggle="collapse" data-target="#verification" aria-expanded="false" aria-controls="collapseExample">
                    驗證問題
                </h3>
                <div  class="collapse" id="verification">

                    <ul>
                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何購買數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>

                        <a class="text-muted b_li_none" href="">
                            <li><i class="fa fa-question-circle pr-1"></i>如何出售數字幣</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!--
    <script type="text/javascript">
        (function () {
            var options = {
                telegram: "123456", // Telegram bot username
                call_to_action: "Message us", // Call to action
                position: "right", // Position may be 'right' or 'left'
            };
            var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();
    </script>
-->
<!--================================
footer
====================================-->
<?php include_once("includes/footer.php") ?>
<script src="https://code.jquery.com/jquery-3.3.1.min.js">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ></script>
<script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>


<!--手機下方漂浮功能-->
<?php include_once ("includes/m-fn-buttom.php") ?>


<!-- Script: Smooth scrolling between anchors in the same page -->

<script src="js/smooth-scroll.js">
</script>
<style>
    .highcharts-button {
        display: none;
    }

    .highcharts-navigator-outline {
        display: none
    }

    .highcharts-series .highcharts-series-2 {
        display: none
    }
</style>
<script src="js/line%20chart.js">
</script>


</body>
</html>