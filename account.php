<!DOCTYPE html>
<html>

<head>
    <?php include_once("includes/head.php") ?>
    <link rel="stylesheet" href="css/account.css" type="text/css">
    <link rel="stylesheet" href="css/responsive.css" type="text/css">
</head>

<!--------------------------------------------
--------------- navbar --------------------->


<body class="accountbg">
<?php include_once("includes/nav.php") ?>
<section id="account-main">

    <!---帳戶資訊---->
    <div class="container m_f_buttom100">

    <section id="m-title">
        <div class="row">
            <div class="col-md-3 pt-3 text-center">
                <h1 class="text-light text-bold">
                    我的
                </h1>
            </div>
        </div>
    </section>

        <!---帳戶資訊---->
        <div class="row  py-2">


            <div class="col-12">
                <div class="b_bg_cooo boo_rr_1">
                    <div class="row ">
                        <div class="col-sm-10 mx-auto pt-2">
                            <marquee><span style=""><a href="">最新公告 : 已完成 BCHABC、BCHSV 分發並開啟交易
                            </a></span></marquee>
                        </div>
                        <div class="col-md-6 p-3 d-flex justify-content-center my-sm-2 ">
                            <div class="p-1 mr-2">
                                <img class="img-fluid rounded-circle" src="img/user_pic.png">
                            </div>
                            <p class="text-light">
                                u1542781265<br>artminda@rocketsz.com<br>上次登录： 2018-11-28 10:11<br>评价数：
                                +0/-0<br>我的徽章： 去领取</p>
                        </div>

                        <div class="col-md-6">

                            <div class="py-3">

                                <div class="wte_c">

                                    <a class="btn btn-light butt_b" href="#">修改資料</a>
                                    <a class="btn btn-light butt_b" href="#">修改密碼</a>
                                    <a class="btn btn-light butt_b" href="#">登出</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!------------------------->

        <div class="row py-1">
            <div class="col-md-3">

                <div class="b_bg_cooo bb_hp_100 boo_rr_1">
                    <div class="sidebar__auth">
                        <p class="sidebar__auth--title">
                            <img src="img/IDVerification.png" alt="Idverification">
                            <span class="bb_f_c">
                        身份验证：
                      </span>
                        </p>
                        <p class="sidebar__auth--title"><a class="security-tips-danger text-light btn btn-primary"
                                                           data-toggle="collapse" data-target="#collapseExample"
                                                           aria-expanded="false" aria-controls="collapseExample"
                                                           href="#">我需要完成哪些验证&emsp;<i class="fa fa-question-circle"
                                                                                      aria-hidden="true"></i></a></p>
                        <div class="collapse" id="collapseExample">
                            <p class="bb-item"><i class="fa fa-check success green-text"></i> <a href=""
                                                                                                 class="text-light">
                                    手机验证 </a></p>
                            <p class="bb-item"><i class="fa fa-check success green-text"></i> <a href=""
                                                                                                 class="text-light">
                                    邮箱验证 </a></p>
                            <p class="bb-item"><i class="fa fa-check unfinished"></i><a
                                        class="btn-link-style text-muted" href="/account/verification_methods/edit">
                                    实名验证</a></p>
                            <p class="bb-item"><i class="fa fa-check unfinished "></i><a class="text-muted"
                                                                                         href="/account/advanced_identity_verifications/new">
                                    进阶验证</a></p>

                        </div>
                    </div>

                   
                    <div class="sidebar__auth">
                        <p class="sidebar__auth--title custom-tooltip">
                            <img src="img/SecurityVerification.png" alt="Securityverification">
                            <span class="bb_f_c" data-toggle="tooltip">安全验证： </span>
                        </p>
                        <p><a class="security-tips-danger text-light btn btn-primary" data-toggle="collapse"
                              data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"
                              href="#">如何提高账户安全性&emsp;<i class="fa fa-question-circle" aria-hidden="true"></i></a></p>
                        <div class="collapse" id="collapseExample2">
                            <p class="bb-item green-text"><i class="fa fa-check unfinished"></i><a
                                        class="btn-link-style text-light" href="#"> 两步验证</a></p>
                            <p class="bb-item"><i class="fa fa-check unfinished"></i><a
                                        class="btn-link-style text-muted" href="#"> 防钓鱼码</a></p>

                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-9 py-2">
                <div class="b_bg_cooo bb_hp_100 boo_rr_1 pa_0">
                    <div class="m-3">
                        <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="" class="bb_f_26 bb_f_cw50 active nav-link" data-toggle="pill"
                                                    data-target="#tabone">
                                    我的帳戶 </a></li>
                            <li class="nav-item"><a href="" class="bb_f_26 bb_f_cw50 nav-link" data-toggle="pill"
                                                    data-target="#tabtwo">
                                    獎勵中心 </a></li>
                            <li class="nav-item"><a href="" class="bb_f_26 bb_f_cw50 nav-link" data-toggle="pill"
                                                    data-target="#tabthree">
                                    幣托 </a></li>
                        </ul>
                        <div class="tab-content mt-2">
                            <div class="tab-pane fade show active" id="tabone" role="tabpanel">
                                <p class="text-muted">充值、提币请点击导航栏<a href="#">「钱包」</a></p>

                                <div class="col-md-12">


                                    <h3 class="bb_c">OTB折抵設定</h3>

                                    <div class="row"
                                         style="background: #0000006e; border: 1px #ffffff5c solid; color: whitesmoke; padding-top: 5px;">

                                        <div class="col-md-9">
                                            <span class="foo_si">使用OTB支付交易手續費 ( 50%折扣 ) </span>

                                        </div>
                                        <div class="col-md-3">
                                            <div class="onoffswitch">
                                                <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox"
                                                       id="myonoffswitch" checked>
                                                <label class="onoffswitch-label" for="myonoffswitch">
                                                    <span class="onoffswitch-inner"></span>
                                                    <span class="onoffswitch-switch"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="pt-3 bb_c">場外交易設定</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-12"><a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w"
                                                              href="#">認證商家申請</a>
                                        <a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w" href="#">收款帳號設置</a>
                                        <a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w" href="#">信任名單</a>
                                        <a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w" href="#">黑名單</a>
                                        <a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w" href="#">手機號碼設置</a>
                                    </div>
                                </div>
                                <h1 class="pt-3 bb_c">幣幣交易設定</h1>
                                <a class="btn btn-light btn-block text-left bbg_ba_c bb_c_w" href="#">API 管理</a>
                            </div>

                            <div class="tab-pane fade red-packet-center" id="tabtwo" role="tabpanel">
                                <h4 class="text-muted pt-3">我的紅包</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class=" text-center redpocket">
                                            <p class="text-muted">暫無紅包</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="tabthree" role="tabpanel">
                                <p class="text-muted pt-3">When, while the lovely valley teems with vapour around me,
                                    and the meridian
                                    sun strikes the
                                    upper surface.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--==========================================
  ================footer ===================-->
<?php include_once("includes/footer.php") ?>

<!--手機下方漂浮功能-->
<?php include_once("includes/m-fn-buttom.php") ?>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js">
</script>
</body>
</html>