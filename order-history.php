<!DOCTYPE html>
<html>

<head>
<?php include_once("includes/head.php")?> 
  
<link rel="stylesheet" href="css/order-history.css">
</head>

<!--------------------------------------------
--------------- navbar --------------------->


<body class="accountbg">
<?php include_once("includes/nav.php")?>
    
    <section id="account-main">
   
    <!---帳戶資訊---->
    <div class="container m_f_buttom100">
    
     <div class="row">
            <div class="col-md-3 pt-3 text-center">
              <h1 class="text-light text-bold">
                  我的錢包
              </h1>
            </div>
        </div>  
    
    <!---帳戶資訊---->
     
    
            <div class="py-2" >
        <div class="b_bg_cooo bb_hp_100 boo_rr_1 pa_0">
              <div class="m-1">
                <ul class="nav nav-tabs">
                  <li class="nav-item"> <a href="" class="bb_f_26 bb_f_cw50 active nav-link" data-toggle="pill" data-target="#tabone">
                  总资产估值 </a> </li>
                  <li class="nav-item"> <a href="" class="bb_f_26 bb_f_cw50 nav-link"  data-toggle="pill" data-target="#tabtwo">
                  充值纪录 </a> </li>
                  <li class="nav-item"> <a href="" class="bb_f_26 bb_f_cw50 nav-link" data-toggle="pill" data-target="#tabthree">
                  交易纪录 </a> </li>
                </ul>
                <div class="tab-content mt-2">
                  <div class="tab-pane fade show active" id="tabone" role="tabpanel">
                   
    
                      <div class="col-md-12">
                    
                         
                            <h3 class="bb_c">总资产估值</h3>
            
                <div class="row" style="background: #0000006e; border: 1px #ffffff5c solid; height: 75px; color: whitesmoke; padding-top: 5px;">
              
                <div class="col-md-9">
                           <span class="foo_si"><b> 0 </b></span>
                         
                </div>           
                </div>
                <div class="row">
                <p class="text-light text-right">隐藏0资产钱包</p>
                                                                             
                <div class="onoffswitch2 o-left">
                   
                    <input type="checkbox" name="onoffswitch " class="onoffswitch-checkbox" id="myonoffswitch" checked>
                      <label class="onoffswitch-label" for="myonoffswitch">
                            <span class="onoffswitch-inner"></span>                           
                      </label>
                </div>                
                  </div>                
                          </div>                      
                          </div>
                                                                              
                  <div class="tab-pane fade red-packet-center" id="tabtwo" role="tabpanel">
                    <h4 class="text-muted pt-3">充值紀錄</h4>
                    <div class="row">
            
                  </div>
                  </div>
                    
                  <div class="tab-pane fade" id="tabthree" role="tabpanel">
                    <p class="text-muted pt-3">When, while the lovely valley teems with vapour around me, and the meridian
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
    <!--------------------------------------------
      ----------------footer --------------------->
    
     <!--手機下方漂浮功能-->
     <?php include_once("includes/footer.php")?>

<!--手機下方漂浮功能-->
<?php include_once ("includes/m-fn-buttom.php") ?>

     
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"></script>
</body>

</html>