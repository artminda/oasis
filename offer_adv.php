<!DOCTYPE html>
<html>
<head>
    <?php include_once("includes/head.php") ?>
</head>
<html class="indexbg">
<?php include_once("includes/nav.php") ?>
<body class="production account-namespace offers-controller new-action">
<div class="hidden" data-resource="User" data-user-token="95e0e094-795f-4d5b-9efd-67cabf2518a5"></div>




<div class="offers-common-width">
    <div class="container read-width offers-new-title">
        <h2>
            发布普通广告
        </h2>
        <div class="rule">
            <p>发布自己的 ETH 交易广告适合经常交易的用户，如果您只想购买或出售一次，建议您直接从<a
                        href="/buy_offers?currency=eth&amp;fiat_currency=cny&amp;payment_type=all">广告列表</a>中下单交易。</p>

            <div class="offer-rule-link">
                <i class="fa fa-lightbulb-o"></i> <a href="/offers/guides">新手发布广告前，我该注意什么？</a>
            </div>
            <div class="offer-rule-link">
                <i class="fa fa-lightbulb-o"></i> <a target="_blank" rel="noopener noreferrer"
                                                     href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002051972">如何管理我的广告？</a>
            </div>

            <ul class="offer-new-rule">
                <li class="offer-rule-title">广告规则：</li>
                <p>1. 发布<u>出售 ETH</u> 广告费：<strong>2018-12-31 23:59 之前免费</strong></p>
                <p>2. 订单成交手续费为<span>成交额的 0.5 %</span>
                    <small class="offer-rule-focus">
                        ( 例：成交金额为 1 ETH，则手续费为 0.005 ETH。
                        使用 OTB 支付可获 50% 折扣 <a href="/account">去设置</a>
                        )
                    </small>
                </p>

                <p>3. 广告展示有效期为<strong> 14 天</strong></p>
                <p>4. <a href="https://otcbtc.zendesk.com/hc/zh-cn/articles/360013735152">关于自动改价的说明</a></p>
            </ul>

        </div>
    </div>
</div>

<div class="offers-new-content">
    <div class="offers-common-width">
        <div class="container read-width">

            <form novalidate="novalidate" class="simple_form new_sell_offer" id="new_sell_offer"
                  action="/account/offers" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden"
                                                                                       value="✓"><input type="hidden"
                                                                                                        name="authenticity_token"
                                                                                                        value="rt+QZAXbeK25gAyEY9RkkrEPbN6XeXK8VjzXhRMTgsN6J703vxTytpAcUkoR+d3kvnlXMeTt5piECt7MJDn4fw==">
                <div class="row offer-new-i-want">
                    <div class="col-md-12">

                    </div>
                </div>

                <!-- 我想 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title">
                            我想
                            <br><span class="trade-title-required">必填</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group select required sell_offer_type"><select
                                    class="select required js-refreshable form-control"
                                    data-refreshable-attribute="offer_type" name="sell_offer[type]"
                                    id="sell_offer_type">
                                <option selected="selected" value="SellOffer">出售</option>
                                <option value="BuyOffer">购买</option>
                            </select></div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group select required sell_offer_currency"><select id="offer-currency"
                                                                                            class="select required js-refreshable form-control"
                                                                                            data-refreshable-attribute="currency"
                                                                                            name="sell_offer[currency]">
                                <option value="ada">ADA</option>
                                <option value="btc">BTC</option>
                                <option selected="selected" value="eth">ETH</option>
                                <option value="eos">EOS</option>
                                <option value="otb">OTB</option>
                                <option value="xrp">XRP</option>
                                <option value="gxc">GXC</option>
                                <option value="neo">NEO</option>
                                <option value="bchabc">BCHABC</option>
                                <option value="ltc">LTC</option>
                                <option value="zec">ZEC</option>
                                <option value="usdt">USDT</option>
                                <option value="qtum">QTUM</option>
                                <option value="trx">TRX</option>
                                <option value="bcat">BCAT</option>
                                <option value="mt">MT</option>
                                <option value="xmx">XMX</option>
                                <option value="eosram">EOSRAM</option>
                                <option value="oct">OCT</option>
                                <option value="sac">SAC</option>
                                <option value="bchsv">BCHSV</option>
                                <option value="ae">AE</option>
                                <option value="ait">AIT</option>
                                <option value="bcd">BCD</option>
                                <option value="bnb">BNB</option>
                                <option value="btm">BTM</option>
                                <option value="bto">BTO</option>
                                <option value="dew">DEW</option>
                                <option value="iost">IOST</option>
                                <option value="kin">KIN</option>
                                <option value="knc">KNC</option>
                                <option value="lrc">LRC</option>
                                <option value="mds">MDS</option>
                                <option value="omg">OMG</option>
                                <option value="pra">PRA</option>
                                <option value="ruff">RUFF</option>
                                <option value="snt">SNT</option>
                                <option value="tnb">TNB</option>
                                <option value="uip">UIP</option>
                                <option value="xlm">XLM</option>
                                <option value="zil">ZIL</option>
                                <option value="zrx">ZRX</option>
                            </select></div>
                    </div>
                    <div class="convert-mark">
                        <i class="fa fa-exchange" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group select required sell_offer_fiat_currency"><select
                                    id="offer-fiat-currency" class="select required js-refreshable form-control"
                                    data-refreshable-attribute="fiat_currency" name="sell_offer[fiat_currency]">
                                <option selected="selected" value="cny">人民币</option>
                                <option value="krw">韩元</option>
                                <option value="jpy">日元</option>
                                <option value="usd">美元</option>
                                <option value="hkd">港币</option>
                            </select></div>
                    </div>
                </div>

                <!-- 出售价设置 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            出售价设置
                            <br><span class="trade-title-required">必填</span>
                        </div>
                    </div>

                    <div class="col-md-offset-2 form-block">

                        <div class="col-md-12 radio-inline">
                            <div class="form-group radio_buttons optional sell_offer_margin_type"><input type="hidden"
                                                                                                         name="sell_offer[margin_type]"
                                                                                                         value=""><span
                                        class="radio"><label for="sell_offer_margin_type_float"><input
                                                data-behavior="margin-type-switch" class="radio_buttons optional"
                                                type="radio" value="float" checked="checked"
                                                name="sell_offer[margin_type]"
                                                id="sell_offer_margin_type_float">浮动价格</label></span><span
                                        class="radio"><label for="sell_offer_margin_type_fixed"><input
                                                data-behavior="margin-type-switch" class="radio_buttons optional"
                                                type="radio" value="fixed" name="sell_offer[margin_type]"
                                                id="sell_offer_margin_type_fixed">固定价格</label></span></div>
                        </div>

                        <div class="col-md-6 margin-float-module">
                            <div class="offer-new-label-title">市场价对标交易所</div>
                            <div class="form-group select optional sell_offer_crypto_source"><select
                                        id="js-crypto-source-select" class="select optional form-control"
                                        name="sell_offer[crypto_source]">
                                    <option value="bitstamp">Bitstamp</option>
                                    <option value="coinmarketcap">Coinmarketcap</option>
                                    <option value="bitfinex">Bitfinex</option>
                                    <option selected="selected" value="average">各平台最新成交均价（Average）</option>
                                    <option value="binance">Binance</option>
                                </select></div>
                        </div>

                        <div class="col-md-6">
                            <input type="hidden" name="market_price" id="js-offer-market_price"
                                   value="702.29044259542234275" data-market-price="702.29044259542234275"
                                   data-decimal-scale="2">
                            <div class="col-md-6 offer-new-fiat-price">
                                <div class="offer-new-label-title">
                                    您的报价
                                </div>
                                <div class="form-group decimal optional disabled sell_offer_price"><input
                                            id="js-offer-price" value="702.29"
                                            class="numeric decimal optional disabled form-control" disabled="disabled"
                                            type="number" step="any" name="sell_offer[price]" previous-price="702.29">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group reference-price-warpper">
                                    <label for="_________">当前市场最低出售价</label>
                                    <input type="number" name="market_reference_price" id="market_reference_price"
                                           value="695" disabled="disabled" class="form-control disabled">
                                </div>
                            </div>
                        </div>


                        <div class="margin-float-module">
                            <div class="col-md-12 offer-appreciation" data-is-mobile="false">
                                <div class="offer-new-label-title">
                                    溢价设置
                                    <span class="offer-new-label-title-tip">（注意：您的报价为浮动价格，实际交易价格将以用户下单时的价格为准 <a
                                                href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002203051"
                                                target="_blank">关于浮动价格的说明</a>
）</span>
                                </div>

                                <div class="offer-appreciation-slider col-md-8">
                                    <div class="clearfix">
                                        <!-- 溢价设置 -->
                                        <span>-70</span> <input type="range" min="-70" max="70" value="0"
                                                                class="offer-appreciation-slider-button"
                                                                id="js-margin-range" step="0.001"> <span>70</span>
                                    </div>
                                    <div class="text-center">
                                        <div class="offer-new-margin-info">
                                            计价公式：
                                            <div class="offer-new-margin-number" id="js-origin-market-price">702.290
                                            </div>
                                            CNY *
                                            <div class="offer-new-margin-number" id="js-margin-number">1.17610</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group decimal optional sell_offer_margin"><label
                                                class="decimal optional control-label"
                                                for="sell_offer_margin">溢价</label>
                                        <div class="input-group">
                                            <span class="input-group-addon input-group-addon-add"
                                                  aria-describedby="margin_minus">-</span>
                                            <span class="input-group-addon-percent">%</span>
                                            <input label="false"
                                                   class="numeric decimal optional form-control premium-text-color"
                                                   id="js-offer-commission" step="0.001" type="number" value="0"
                                                   name="sell_offer[margin]">
                                            <span class="input-group-addon input-group-addon-add"
                                                  aria-describedby="margin_plus">+</span>
                                        </div>
                                        <div class="margin-percent-tip">(溢价率仅到小数点后3位)</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="min-max-price">
                                    <div class="offer-new-label-title">可接受最低单价
                                        <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top"
                                           title=""
                                           data-original-title="该设置可帮助您在价格剧烈波动时保持稳定的报价，比如设置最低价为 2000，而市场价处于 2000 以下时，您的广告将依旧以 2000 的价格展示"></i>
                                        <span class="offer-new-label-title-tip">(留空，则不设置)</span>
                                    </div>
                                    <div class="form-group decimal required sell_offer_minimum_price"><input min="100"
                                                                                                             class="numeric decimal required form-control"
                                                                                                             type="number"
                                                                                                             step="any"
                                                                                                             name="sell_offer[minimum_price]"
                                                                                                             id="sell_offer_minimum_price">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- 交易方式 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            交易方式
                            <br><span class="trade-title-required">必填</span>
                        </div>
                    </div>
                    <div class="form-block">
                        <div class="col-md-10">
                            <div class="payment-types-select">
                                <div class="form-group check_boxes required sell_offer_payment_types"><input
                                            type="hidden" name="sell_offer[payment_type_ids][]" value=""><span
                                            class="checkbox"><label for="sell_offer_payment_type_ids_1"><input
                                                    class="check_boxes required" type="checkbox" value="1"
                                                    name="sell_offer[payment_type_ids][]"
                                                    id="sell_offer_payment_type_ids_1">银行转帐</label></span><span
                                            class="checkbox"><label for="sell_offer_payment_type_ids_2"><input
                                                    class="check_boxes required" type="checkbox" value="2"
                                                    name="sell_offer[payment_type_ids][]"
                                                    id="sell_offer_payment_type_ids_2">支付宝</label></span><span
                                            class="checkbox"><label for="sell_offer_payment_type_ids_3"><input
                                                    class="check_boxes required" type="checkbox" value="3"
                                                    name="sell_offer[payment_type_ids][]"
                                                    id="sell_offer_payment_type_ids_3">微信</label></span><span
                                            class="checkbox"><label for="sell_offer_payment_type_ids_4"><input
                                                    class="check_boxes required" type="checkbox" value="4"
                                                    name="sell_offer[payment_type_ids][]"
                                                    id="sell_offer_payment_type_ids_4">Paypal</label></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 交易限额 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            交易限额
                            <br><span class="trade-title-required">必填</span>
                        </div>
                    </div>
                    <div class="clearfix form-block">
                        <div class="col-md-5">
                            <div style="width:80%; float:left;">
                                <div class="offer-new-label-title">最小限额 <span class="offer-new-label-title-tip">（一次交易的最低的交易限制）</span>
                                </div>
                                <div class="form-group decimal optional sell_offer_minimum_amount"><input min="100"
                                                                                                          placeholder="100"
                                                                                                          class="numeric decimal optional form-control"
                                                                                                          type="number"
                                                                                                          step="any"
                                                                                                          name="sell_offer[minimum_amount]"
                                                                                                          id="sell_offer_minimum_amount">
                                </div>
                            </div>
                            <div class="pull-left" style="padding-top: 40px; padding-left: 10px; font-size: 16px;">
                                CNY
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div style="width:80%; float:left;">
                                <div class="offer-new-label-title">最大限额 <span class="offer-new-label-title-tip">（一次交易的最高的交易限制）</span>
                                </div>
                                <div class="form-group decimal optional sell_offer_max_amount"><input min="100"
                                                                                                      placeholder="1000"
                                                                                                      class="numeric decimal optional form-control"
                                                                                                      type="number"
                                                                                                      step="any"
                                                                                                      name="sell_offer[max_amount]"
                                                                                                      id="sell_offer_max_amount">
                                </div>
                            </div>
                            <div class="pull-left" style="padding-top: 40px; padding-left: 10px; font-size: 16px;">
                                CNY
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 交易说明 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            交易说明
                            <div class="trade-title-tip">所有用户可见</div>
                            <div class="trade-title-recommend">建议填写</div>
                        </div>
                    </div>
                    <div class="form-block">
                        <div class="col-md-10">
                            <trix-toolbar id="trix-toolbar-1">
                                <div class="button_groups">
  <span class="button_group text_tools">
    <button type="button" class="bold" data-trix-attribute="bold" data-trix-key="b" title="Bold">Bold</button>
    <button type="button" class="italic" data-trix-attribute="italic" data-trix-key="i" title="Italic">Italic</button>
    <button type="button" class="strike" data-trix-attribute="strike" title="Strikethrough">Strikethrough</button>
    <button type="button" class="link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k"
            title="Link">Link</button>
  </span>

                                    <span class="button_group block_tools">
    <button type="button" class="quote" data-trix-attribute="quote" title="Quote">Quote</button>
    <button type="button" class="code" data-trix-attribute="code" title="Code">Code</button>
    <button type="button" class="list bullets" data-trix-attribute="bullet" title="Bullets">Bullets</button>
    <button type="button" class="list numbers" data-trix-attribute="number" title="Numbers">Numbers</button>
    <button type="button" class="block-level decrease" data-trix-action="decreaseBlockLevel" title="Decrease Level"
            disabled="">Decrease Level</button>
    <button type="button" class="block-level increase" data-trix-action="increaseBlockLevel" title="Increase Level"
            disabled="">Increase Level</button>
  </span>

                                    <span class="button_group history_tools">
    <button type="button" class="undo" data-trix-action="undo" data-trix-key="z" title="Undo" disabled="">Undo</button>
    <button type="button" class="redo" data-trix-action="redo" data-trix-key="shift+z" title="Redo"
            disabled="">Redo</button>
  </span>
                                </div>

                                <div class="dialogs">
                                    <div class="dialog link_dialog" data-trix-attribute="href" data-trix-dialog="href">
                                        <div class="link_url_fields">
                                            <input type="url" required="" name="href" placeholder="Enter a URL…"
                                                   disabled="disabled">
                                            <div class="button_group">
                                                <input type="button" value="Link" data-trix-method="setAttribute">
                                                <input type="button" value="Unlink" data-trix-method="removeAttribute">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </trix-toolbar>
                            <trix-editor class="formatted_content trix-content"
                                         input="sell_offer_offer_terms_trix_input_sell_offer" contenteditable=""
                                         trix-id="1" toolbar="trix-toolbar-1">
                                <div><!--block-->1. 订单有效期为15分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您&nbsp;<br>2.
                                    如果您无法在15分钟内完成付款，请点击「延长订单有效期」按钮&nbsp;<br>3. 开始交易后数字币由系统锁定托管，请安心下单<br><br></div>
                            </trix-editor>
                            <input type="hidden" name="sell_offer[offer_terms]"
                                   id="sell_offer_offer_terms_trix_input_sell_offer"
                                   value="<div>1. 订单有效期为15分钟，请您及时在有效期内付款并点击「标记付款已完成」按钮，我才可以释放数字币给您&amp;nbsp;<br>2. 如果您无法在15分钟内完成付款，请点击「延长订单有效期」按钮&amp;nbsp;<br>3. 开始交易后数字币由系统锁定托管，请安心下单<br><br></div>">
                        </div>
                    </div>
                </div>

                <!-- 交易备注 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            交易备注
                            <div class="trade-title-tip">客户下单后可见</div>
                            <div class="trade-title-recommend">建议填写</div>
                        </div>
                    </div>
                    <div class="form-block">
                        <div class="col-md-10">
                            <div class="form-group text optional sell_offer_trading_instruction"><textarea
                                        style="min-height: 200px;" class="text optional form-control"
                                        name="sell_offer[trading_instruction]" id="sell_offer_trading_instruction">请勿在汇款备注内填写比特币、BTC、OTC等任何数字币有关字眼，防止您的汇款被银行拦截

银行帐号：xxxx xxxx xxxx xxxx
支付宝帐号：xxxxxxx
微信帐号：xxxxx
下单后可以直接加我微信跟我联系，我会尽快回复。</textarea></div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <a class="btn btn-theme-light" role="button" data-toggle="collapse" href="#advanced"
                       aria-expanded="false" aria-controls="advanced">
                        显示高级选项 <i class="fa fa-angle-down"></i>
                    </a>
                </div>

                <div class="collapse " id="advanced">
                    <!-- 自动回复消息 -->
                    <div class="row">
                        <div class="col-md-2">
                            <div class="trade-title form-block">
                                自动回复消息
                                <div class="trade-title-optional">选填</div>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="col-md-10">
                                <div class="offer-new-label-title">问候语<span class="offer-new-label-title-tip">（客户下单后，对话框自动发出此内容；留空，则不设置）</span>
                                </div>
                                <div class="form-group string optional sell_offer_auto_reply_message"><input
                                            class="string optional form-control"
                                            placeholder="支付宝账号：xxxxx；银行卡号：xxxxx；..." type="text" value=""
                                            name="sell_offer[auto_reply_message]" id="sell_offer_auto_reply_message">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-10 col-md-offset-2">
                            <div class="auto-reply-closing">
                                <div class="offer-new-label-title">结束语<span class="offer-new-label-title-tip">（订单完成后，对话框自动发出此内容；留空，则不设置）</span>
                                </div>
                                <div class="form-group string optional sell_offer_finished_auto_reply_message"><input
                                            class="string optional form-control" placeholder="请查收账户，期待下次交易；..."
                                            type="text" name="sell_offer[finished_auto_reply_message]"
                                            id="sell_offer_finished_auto_reply_message"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 限制设置 -->
                    <div class="row">
                        <div class="col-md-2">
                            <div class="trade-title form-block">
                                限制设置
                                <div class="trade-title-optional">选填</div>
                            </div>
                        </div>
                        <div class="form-block">
                            <div class="col-md-4">
                                <div class="offer-new-label-title">同时最大处理订单数 (0 = 不限制)
                                    <i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title=""
                                       data-original-title="设置该限制，可以避免大量订单同时涌进，导致处理不过来的情况，比如当您设定为 2 时，最多只会有 2 笔订单可同时向您下单，其余买家会看到「广告主处理订单已达上限，请稍候再试」，待您处理完后才允许下一笔订单进入"></i>
                                </div>
                                <div class="form-group integer optional sell_offer_order_processing_max"><input step="1"
                                                                                                                min="0"
                                                                                                                class="numeric integer optional form-control"
                                                                                                                type="number"
                                                                                                                value="0"
                                                                                                                name="sell_offer[order_processing_max]"
                                                                                                                id="sell_offer_order_processing_max">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-md-offset-2">
                            <div class="buyer-min-successful-orders">

                                <div class="form-group integer optional sell_offer_buyer_min_successful_orders"><label
                                            class="integer optional control-label"
                                            for="sell_offer_buyer_min_successful_orders">买家必须成交过几次 (0 =
                                        不限制)</label><input min="0" class="numeric integer optional form-control"
                                                           type="number" step="1" value="0"
                                                           name="sell_offer[buyer_min_successful_orders]"
                                                           id="sell_offer_buyer_min_successful_orders"></div>
                                <br>
                                <div class="form-group boolean optional sell_offer_need_taker_identified">
                                    <div class="checkbox"><input value="0" type="hidden"
                                                                 name="sell_offer[need_taker_identified]"><label
                                                class="boolean optional" for="sell_offer_need_taker_identified"><input
                                                    class="boolean optional" type="checkbox" value="1"
                                                    name="sell_offer[need_taker_identified]"
                                                    id="sell_offer_need_taker_identified">买家必须通过实名验证</label></div>
                                </div>
                                <div class="form-group boolean optional sell_offer_need_advanced_identity_identified">
                                    <div class="checkbox"><input value="0" type="hidden"
                                                                 name="sell_offer[need_advanced_identity_identified]"><label
                                                class="boolean optional"
                                                for="sell_offer_need_advanced_identity_identified"><input
                                                    class="boolean optional" type="checkbox" value="1"
                                                    name="sell_offer[need_advanced_identity_identified]"
                                                    id="sell_offer_need_advanced_identity_identified">买家必须通过进阶验证</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 col-md-offset-2 tips-text">
                            ⚠️ 设置限制可以让您筛选出可信度更高的交易对象，但过多的限制也将降低您接收订单的机率。
                        </div>
                    </div>

                </div>


                <!-- 注意事项 -->
                <div class="row">
                    <div class="col-md-2">
                        <div class="trade-title form-block">
                            注意事项
                        </div>
                    </div>
                    <div class="form-block">
                        <div class="col-md-10">
                            <div class="offer-rule">
                                <ul>
                                    <li>OTCBTC 为了保证用户的交易安全，将采用数字货币托管系统。严禁绕过平台私下交易，违者将自行承担损失，且<strong>永久封号</strong>。</li>
                                    <li>请在交易说明及交易备注中，详细写下您所希望的交易条件，以及与您交易所需注意的事项，明确的信息将提升您的交易成功机率及评价。</li>
                                    <li>请勿在 OTCBTC 尝试欺诈行为，违者将会导致账号被冻结，并承担法律责任。</li>
                                    <li><span class="text-highlight">发布广告后请履行契约精神，恶意抬价或者是反悔，被投诉将冻结账户 3-14 天不等。</span>
                                    </li>
                                </ul>


                                <hr>

                                <h4><strong>注意！注意！注意！务必详细阅读以下信息，以确保您的交易安全</strong></h4>

                                <ul>
                                    <li>交易过程中，请先确认款项入帐后再释放数字货币。</li>
                                    <li>交易过程中，不要透露与您账户安全有关的敏感资讯。</li>
                                    <li>不要直接透露你的电子邮箱给买家，否则有可能会收到诈骗信件，及对账户安全造成危害。</li>
                                    <li>永远确保你在正确的 OTCBTC 网站上，请将网站记录在书签上，避免误闯钓鱼网站。</li>
                                    <li>OTCBTC 员工将不会以官方名义与您进行交易，请不要与自称是 OTCBTC 的员工交易，避免利益损失。</li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>

                <!-- 发布按钮 -->
                <div class="row">
                    <div class="col-md-12">
                        <hr>
                    </div>
                    <div class="col-md-8 col-md-offset-2 text-center">
                        <a class="btn btn-theme btn-long disabled" href="#">发布广告</a>
                    </div>
                </div>


                <script>
                    if (typeof $('.help-block').first().offset() !== 'undefined') {
                        $('html, body').animate({
                            scrollTop: $('.help-block').first().offset().top - 200
                        }, 1000);
                    }
                </script>


            </form>
        </div>
    </div>
</div>


<div class="chat-widget" id="chat-room-modal">

</div>

<div id="modal-from-dom" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal-from-dom-label"
     aria-hidden="true">

</div>



<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-108130101-1', 'auto');
    ga('send', 'pageview');
</script>

<!-- Start segment.com SDK -->
<script>
    !function () {
        var analytics = window.analytics = window.analytics || [];
        if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
            analytics.factory = function (t) {
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function (t, e) {
                var n = document.createElement("script");
                n.type = "text/javascript";
                n.async = !0;
                n.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a);
                analytics._loadOptions = e
            };
            analytics.SNIPPET_VERSION = "4.1.0";
            analytics.load("euID6JW8JtLBPGQihj3tlDMpnSoHqOe5");
            analytics.identify("409369");

            if (window.gon !== undefined && gon.tracking_js !== undefined) {
                window.analytics.page(gon.tracking_js.page, gon.tracking_js.properties)
            }

            [].forEach.call(
                document.querySelectorAll("[data-segment-event-type][data-segment-event-name]"),
                function (trackedElement) {
                    let eventType = trackedElement.dataset.segmentEventType;
                    let eventName = trackedElement.dataset.segmentEventName;

                    trackedElement.addEventListener(eventType, function () {
                        if (eventName) {
                            window.analytics.track(eventName)
                        }
                    });
                }
            );

        }
    }();
</script>
<!-- End segment.com SDK -->


<script>
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
</script>


<script id="IntercomSettingsScriptTag">window.intercomSettings = {
        "email": "artminda@rocketsz.com",
        "name": "u1542781265",
        "created_at": 1542781265,
        "user_id": 409369,
        "language": "zh-CN",
        "phone_number": "937828251",
        "identified": false,
        "btc_account_address": "User Not Verified",
        "eth_account_adddres": "User Not Verified",
        "manager_user_link": "https://0tcbtc.com/manager/users/409369",
        "last_sign_in_ip": "139.162.127.155",
        "current_sign_in_ip": "122.118.22.60",
        "has_otb_quotas": false,
        "is_certified_merchant": false,
        "grade": "standard",
        "user_hash": "581e25d9e7243a786f53f7298c13ae8cd2cf1e89c6660555502179edf82cea10",
        "app_id": "rjyht4dn"
    };
    (function () {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
            ic('reattach_activator');
            ic('update', intercomSettings);
        } else {
            var d = document;
            var i = function () {
                i.c(arguments)
            };
            i.q = [];
            i.c = function (args) {
                i.q.push(args)
            };
            w.Intercom = i;

            function l() {
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.intercom.io/widget/rjyht4dn';
                var x = d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }

            if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
        ;
    })()</script>

<iframe id="intercom-frame" style="display: none;"></iframe>
<div id="intercom-container"
     style="position: fixed; width: 0px; height: 0px; bottom: 0px; right: 0px; z-index: 2147483647;">
    <div data-reactroot="" class="intercom-app intercom-app-launcher-enabled" aria-live="polite">
        <div></div>
        <iframe allowfullscreen="" class="intercom-launcher-frame intercom-launcher-frame-shadow"
                name="intercom-launcher-frame" title="Intercom Live Chat"></iframe>
        <iframe allowfullscreen="" class="intercom-launcher-discovery-frame" name="intercom-launcher-discovery-frame"
                title="Intercom Live Chat"></iframe>
        <div></div><!-- react-empty: 6 -->
        <div></div><!-- react-empty: 7 --></div>
</div>
<iframe src="https://onesignal.com/webPushAnalytics" style="display: none;"></iframe>
<div id="onesignal-bell-container"
     class="onesignal-bell-container onesignal-reset onesignal-bell-container-bottom-left">
    <div id="onesignal-bell-launcher"
         class="onesignal-bell-launcher onesignal-bell-launcher-md onesignal-bell-launcher-bottom-left onesignal-bell-launcher-theme-default onesignal-bell-launcher-active"
         style="bottom: 25px; left: 25px;">
        <div class="onesignal-bell-launcher-button">
            <svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7"
                 viewBox="0 0 99.7 99.7"
                 style="filter: drop-shadow(0 2px 4px rgba(34,36,38,0.35));; -webkit-filter: drop-shadow(0 2px 4px rgba(34,36,38,0.35));;">
                <circle class="background" cx="49.9" cy="49.9" r="49.9" style=""></circle>
                <path class="foreground"
                      d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"
                      style=""></path>
                <ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9" style=""></ellipse>
            </svg>
        </div>
        <div class="onesignal-bell-launcher-badge"
             style="filter: drop-shadow(0 2px 4px rgba(34,36,38,0));; -webkit-filter: drop-shadow(0 2px 4px rgba(34,36,38,0));;"></div>
        <div class="onesignal-bell-launcher-message">
            <div class="onesignal-bell-launcher-message-body"></div>
        </div>
        <div class="onesignal-bell-launcher-dialog"
             style="filter: drop-shadow(0px 2px 2px rgba(34,36,38,.15));; -webkit-filter: drop-shadow(0px 2px 2px rgba(34,36,38,.15));;">
            <div class="onesignal-bell-launcher-dialog-body"></div>
        </div>
    </div>
</div>
<span style="border-radius: 3px !important; text-indent: 20px !important; width: auto !important; padding: 0px 4px 0px 0px !important; text-align: center !important; font: bold 11px/20px &quot;Helvetica Neue&quot;, Helvetica, sans-serif !important; color: rgb(255, 255, 255) !important; background: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzBweCIgd2lkdGg9IjMwcHgiIHZpZXdCb3g9Ii0xIC0xIDMxIDMxIj48Zz48cGF0aCBkPSJNMjkuNDQ5LDE0LjY2MiBDMjkuNDQ5LDIyLjcyMiAyMi44NjgsMjkuMjU2IDE0Ljc1LDI5LjI1NiBDNi42MzIsMjkuMjU2IDAuMDUxLDIyLjcyMiAwLjA1MSwxNC42NjIgQzAuMDUxLDYuNjAxIDYuNjMyLDAuMDY3IDE0Ljc1LDAuMDY3IEMyMi44NjgsMC4wNjcgMjkuNDQ5LDYuNjAxIDI5LjQ0OSwxNC42NjIiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PHBhdGggZD0iTTE0LjczMywxLjY4NiBDNy41MTYsMS42ODYgMS42NjUsNy40OTUgMS42NjUsMTQuNjYyIEMxLjY2NSwyMC4xNTkgNS4xMDksMjQuODU0IDkuOTcsMjYuNzQ0IEM5Ljg1NiwyNS43MTggOS43NTMsMjQuMTQzIDEwLjAxNiwyMy4wMjIgQzEwLjI1MywyMi4wMSAxMS41NDgsMTYuNTcyIDExLjU0OCwxNi41NzIgQzExLjU0OCwxNi41NzIgMTEuMTU3LDE1Ljc5NSAxMS4xNTcsMTQuNjQ2IEMxMS4xNTcsMTIuODQyIDEyLjIxMSwxMS40OTUgMTMuNTIyLDExLjQ5NSBDMTQuNjM3LDExLjQ5NSAxNS4xNzUsMTIuMzI2IDE1LjE3NSwxMy4zMjMgQzE1LjE3NSwxNC40MzYgMTQuNDYyLDE2LjEgMTQuMDkzLDE3LjY0MyBDMTMuNzg1LDE4LjkzNSAxNC43NDUsMTkuOTg4IDE2LjAyOCwxOS45ODggQzE4LjM1MSwxOS45ODggMjAuMTM2LDE3LjU1NiAyMC4xMzYsMTQuMDQ2IEMyMC4xMzYsMTAuOTM5IDE3Ljg4OCw4Ljc2NyAxNC42NzgsOC43NjcgQzEwLjk1OSw4Ljc2NyA4Ljc3NywxMS41MzYgOC43NzcsMTQuMzk4IEM4Ljc3NywxNS41MTMgOS4yMSwxNi43MDkgOS43NDksMTcuMzU5IEM5Ljg1NiwxNy40ODggOS44NzIsMTcuNiA5Ljg0LDE3LjczMSBDOS43NDEsMTguMTQxIDkuNTIsMTkuMDIzIDkuNDc3LDE5LjIwMyBDOS40MiwxOS40NCA5LjI4OCwxOS40OTEgOS4wNCwxOS4zNzYgQzcuNDA4LDE4LjYyMiA2LjM4NywxNi4yNTIgNi4zODcsMTQuMzQ5IEM2LjM4NywxMC4yNTYgOS4zODMsNi40OTcgMTUuMDIyLDYuNDk3IEMxOS41NTUsNi40OTcgMjMuMDc4LDkuNzA1IDIzLjA3OCwxMy45OTEgQzIzLjA3OCwxOC40NjMgMjAuMjM5LDIyLjA2MiAxNi4yOTcsMjIuMDYyIEMxNC45NzMsMjIuMDYyIDEzLjcyOCwyMS4zNzkgMTMuMzAyLDIwLjU3MiBDMTMuMzAyLDIwLjU3MiAxMi42NDcsMjMuMDUgMTIuNDg4LDIzLjY1NyBDMTIuMTkzLDI0Ljc4NCAxMS4zOTYsMjYuMTk2IDEwLjg2MywyNy4wNTggQzEyLjA4NiwyNy40MzQgMTMuMzg2LDI3LjYzNyAxNC43MzMsMjcuNjM3IEMyMS45NSwyNy42MzcgMjcuODAxLDIxLjgyOCAyNy44MDEsMTQuNjYyIEMyNy44MDEsNy40OTUgMjEuOTUsMS42ODYgMTQuNzMzLDEuNjg2IiBmaWxsPSIjZTYwMDIzIj48L3BhdGg+PC9nPjwvc3ZnPg==&quot;) 3px 50% / 14px 14px no-repeat rgb(230, 0, 35) !important; position: absolute !important; opacity: 1 !important; z-index: 8675309 !important; display: none; cursor: pointer !important; border: none !important; -webkit-font-smoothing: antialiased !important; top: 90px; left: 869px;">Save</span><span
        style="border-radius: 12px; width: 24px !important; height: 24px !important; background: url(&quot;data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxtYXNrIGlkPSJtIj48cmVjdCBmaWxsPSIjZmZmIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI2IiByeT0iNiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjUiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjEiIHJ5PSIxIi8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMTAiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjI0Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMCIgeT0iMTAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0Ii8+PC9tYXNrPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmYiIG1hc2s9InVybCgjbSkiLz48L3N2Zz4=&quot;) 50% 50% / 14px 14px no-repeat rgba(0, 0, 0, 0.4) !important; position: absolute !important; opacity: 1 !important; z-index: 8675309 !important; display: none; cursor: pointer !important; border: none !important; top: 88px; left: 892px;"></span>

<!--================================
footer
====================================-->
<?php include_once("includes/footer.php") ?>
<!--手機下方漂浮功能-->
<?php include_once ("includes/m-fn-buttom.php") ?>


</body>
</html>>