<template>
  <div id="app">
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Home,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{ padding:0;margin:0;font:12px/1.5 Tahoma,arial,"\5b8b\4f53",sans-serif;background-color:#f1f2f3;}
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,input,textarea,blockquote,p{padding:0; margin:0;}
li{list-style-type:none;}
img{vertical-align:top;border:0;}
ol,ul{list-style:none;}
cite,code,em,th,i{font-weight:normal; font-style:normal;}
a{text-decoration:none; outline:none; color:#333;}
.z{float:left;}
.y{float:right;}
.cl {*zoom:1;}
.cl:after{clear:both;content:".";display:block;margin:0;padding:0;font-size:0;height:0;line-height:0;overflow:hidden;}
.wrap{width: 960px;margin: 0 auto;}
.mt30{margin-top:30px;}
.pageMain {border: 1px solid #dedfe0;background-color: #fff;margin-top: 20px;border-radius: 5px;}
#header {background-color: #fff;border-bottom: 1px solid #e7e7e7;}
.headWrap{height: 64px;}
#column_list{border-top: 1px solid #e7e7e7;}
.logo a {display: block;height: 64px;width: 78px;text-indent: -9999em;background: url(./assets/images/logo.png) left center no-repeat;}
.logo_sm p{margin: 22px 0 0 20px;width: 150px;height: 25px;line-height: 25px;border-left: 1px solid #c5c5c5;color: #a5a5a5;text-indent: 20px;letter-spacing: 2px;}
.column_list ul{height:40px;float:left;padding-left:20px;}
.column_list ul li{float:left;}
.column_list ul li a{display: inline-block; width:auto; line-height: 38px;border-bottom: 2px solid #fff;height: 38px;font: 16px/38px "microsoft yahei";color:#575757;}
.column_list ul li.last a{color:#888;}
.column_list ul li a:hover,.column_list ul li a.on{border-color:#ff4466;}
.column_list ul li.pre{width:4px;padding: 0 18px;line-height: 40px;font-size: 16px;color: #ccc;}
.column_list ul li.last1 a{color:#ff4466;}
.column_list ul li.last1 a:hover{border:none;}
.shopping_sun{display:inline-block;}
.shopping_sun a{float:right;color: #ff4466;margin:11px 5px 11px 0;}
.shopping_sun img{float:right;margin:13px 15px 13px 0;}
.columnSwitch {margin:24px 0 0 15px;position: relative;}
.imgLink { height: 20px;width:45px;}
.imgLink i,.avatarName .nameLink i,.class_fl i {overflow: hidden;display: inline-block;width: 10px;height: 10px;margin-top:5px;margin-left: 4px;background: url(./assets/images/down_up.png) 0 0 no-repeat;
-webkit-transition: -webkit-transform 0.2s ease-out;
-moz-transition: -moz-transform 0.2s ease-out;
-o-transition: -o-transform 0.2s ease-out;
transition: transform 0.2s ease-out;}
.imgLink a {display: inline-block; float: left;}
.columnSwitch:hover i,.avatarName .nameLink:hover i,.avatarHover .nameLink i {-webkit-transform: rotateZ(-180deg);-moz-transform: rotateZ(-180deg);-o-transform: rotateZ(-180deg);transform: rotateZ(-180deg);}
.shopLink {display: none;position: absolute;}
.shopLink a{color: #f46;}
.searchBox {margin:18px 0 0 50px; width: 285px;height: 30px;border: 1px solid #c5c5c5;border-radius: 3px;}
.searchInput input {border: 0;height: 24px;margin:3px 0 3px 5px;color: #444;width: 240px;line-height:24px;outline:none;}
.searchSubmit input { border:0;background: url(./assets/images/searchBtn.png) center center no-repeat; height: 30px;line-height: 100px; width: 38px;cursor: pointer;overflow: hidden;}
.searchInput .keyfocus { color: #333;}
/*鏈櫥褰昪ss*/
.noLogin { line-height: 64px;}
.regIco {margin-top: 15px; height:49px;}
.regIco a { display:block;float:left;width: 36px; height:36px;line-height:36px;text-indent: -9999px;background: url(./assets/images/back_image.png) -74px 0 no-repeat;}
.regIco a.qqLogin{ background-position: -114px 0;margin-right:5px;}
.regIco a.qqLogin:hover{background-position: -114px -40px;}
.regIco a.wbLogin:hover{background-position: -74px -40px;}
.loginText { padding-left:20px;}
.preLine { width: 1px; background-color: #ebebeb; height: 24px;margin-top: 23px;}
.loginLink,.regLink {display: block;text-decoration: none;width: 52px;height: 28px;line-height: 28px;vertical-align: middle;text-align: center;margin:20px 15px 0;font: 16px/28px "microsoft yahei"; color:#8d8d8d;}
.loginLink:hover,.regLink:hover{color: #f46;}
/*login in*/
.avatarName {position: relative;z-index:899;}
.avatarName .nameLink{display: block;line-height: 64px;height: 64px;}
.avatarName .nameLink img {display: block;-webkit-border-radius:36px;-moz-border-radius:36px;
border-radius:36px;float: left;margin-top: 15px}
.avatarName .nameLink span {display: block;float: left;margin: 0 7px;}
.avatarName .nameLink i {margin-top: 28px;margin-left: 0;}
.selfSet,.uploadIco ul {border:1px solid #e7e7e7;background-color: #fff;width: 155px;position: absolute;_position: absolute;right:-20px;top:64px;display: none;z-index: 898;}
.selfSet li a:hover{background-color: #ebebeb}
.selfSet li a {color: #7a7a7a;display:block;height: 32px; line-height: 32px;padding: 0 14px;}
.selfSet li a i{display:block;float: left; width: 16px; height: 16px;background: url(./assets/images/back_image.png) 0 0 no-repeat;margin: 7px 5px 0 0;}
.selfSet .home i {background-position: -181px -8px;}
.selfSet .set i {background-position: -233px -8px;margin-top: 9px;}
.selfSet .out i {background-position: -259px -8px;margin-top: 9px;}
.selfSet .loginout {border-top: 1px solid #ebebeb;}
.selfSet .loginout a{margin:7px 0 10px; }
.fansLink {width:70px;line-height: 64px;position: relative;text-align:center;}
.uploadIco{height: 64px; margin-right: 10px;position: relative;z-index:899;}
.uploadIco a.upload{display: block;width: 31px; height: 27px; background: url(./assets/images/back_image.png) 0 -49px no-repeat;margin-top: 20px;}
.uploadIco ul {position: absolute;padding-bottom: 10px;right: -65px;_position: absolute;z-index:898;}
.uploadIco li {margin-top: 10px;}
.uploadIco li a:hover{background-color: #ebebeb}
.uploadIco li a {display: block;height: 32px;line-height: 32px;color: #7a7a7a;padding: 0 32px;}
.uploadIco li a i {display: block;width: 20px; height: 20px;float: left; margin:8px 8px 0 0;}
.uploadIco a.s_album i{background:url(./assets/images/fabufx.png) 0 0 no-repeat;background-size: contain;}
.uploadIco a.g_album i{background:url(./assets/images/gonglve.png) 0 0 no-repeat;background-size: contain;}
.msgLink{width:90px;position: relative;text-align:center;z-index:899;}
.msgLink a.msgLinks{display: block;line-height: 64px;height: 64px;}
.head_msgs{border: 1px solid #d4d5d6;background-color: #fff;width: 130px;position: absolute;_position: absolute;right: -30px;top: 64px;display: none;z-index: 898;border-bottom:none;}
.head_msgs li{position:relative;z-index: 897;}
.head_msgs li a{ color: #7a7a7a;display: block;height: 32px;line-height: 32px;padding: 0 14px;border-bottom: 1px solid #d4d5d6;}
.head_msgs li a:hover{background-color: #f5f5f5;}
.head_msgs li i,.msgLink .msg_num{display: block;width:15px;height:15px;background-color: #f50;color:#fff;position: absolute;z-index: 896;right:14px;top:9px;border-radius:50%;text-align: center;line-height: 15px;}
.msgLink .msg_num{right:15px;top:25px;}
/*鐧诲綍椤甸潰css鐗囨*/
#loginPageMain{border: 1px solid #dedfe0;background-color: #fff;margin-top:20px;padding: 80px 130px;width: 700px;}
.loginPageLeft {height: 350px;width: 420px;border-right: 1px dashed #ccc;}
.loginPageLeft h4,.loginPageRight h3,.getPasswordMain h3,.reg_choose_main h3,.registerMain h3,.regBindMain h3,#setsPasswd h3{padding: 30px 0;font:400 18px/1.5 "Microsoft yahei";}
.loginPageLeft ul li{height: 32px; line-height: 32px;color: #666;}
.loginPageLeft .login_email,.loginPageLeft .login_password{margin-bottom: 15px;}
.login_email input,.login_password input,.login_key_key input{ border: 1px solid #d4d4d4;height: 28px;width: 178px;padding:0 5px;line-height:28px;}
.login_key_key input {width:90px;}
.login_email label,.login_password label,.login_key_key label{width: 60px;float: left;text-align:right;padding-right:4px;font: 14px/32px "Microsoft Yahei";}
.login_remember{padding-left: 64px;}
.login_remember label {line-height:32px;}
.login_submit input,.reg_submit_sub input,.regBindMain .reg_submit_sub input,.setsPwd_submit input {width: 64px; height: 30px;border: 0;color: #fff;background: url(./assets/images/back_image.png) -112px -81px no-repeat;cursor: pointer;margin:15px 0 0 64px;}
.login_submit a {color: #0376b0;text-decoration: underline;padding-left: 30px;}
.site_connect a{display: block;width: 194px; height: 40px; text-indent: -9999px;background:url(./assets/images/back_image.png) 0 -150px no-repeat;margin-bottom: 30px;}
.site_connect a.qq_connect{background-position: 0 -194px;}
.site_connect a.db_connect{background-position: 0 -238px;}
.loginPageRight{width:210px;}
/*椤佃剼css鐗囨*/
.footAd{margin: 30px 0 30px 47px;}
.footAd a{display: inline-block;margin-right: 5px;}
#footer{background-color: #e1e2e3;border-top: 1px solid #d8d9da;color: #8d8d8d; text-align: center;margin-top:15px;padding:20px 0;}
#footer p{line-height:25px;}
#footer a{color: #8d8d8d;}
/*娴獥鐧诲綍*/
.psLoginMain {padding-top: 40px;}
.loginLeft li {line-height: 32px;color: #666;}
.loginLeft .login_email,.loginLeft .login_password{height: 62px;}
.loginLeft .login_submit {height:auto;}
.quickLogin .site_connect a {background: url(./assets/images/box_share.png) 0 0 no-repeat; width: 112px; height: 34px;margin-bottom: 25px;}
.quickLogin .site_connect .wb_connect { background-position: -228px 0;}
.quickLogin .site_connect .qq_connect { background-position: -114px 0;}
.quickLogin h3 {font:normal 16px/1 "Microsoft yahei";padding-bottom: 20px;}
.quickLogin{width: 170px;}
.loginLeft .wrong_tips{margin-left: 0;}
.loginLeft .login_submit input{margin-left: 64px;}
.loginLeft .login_remember {padding-left: 64px;}
/*娴獥娉ㄥ唽*/
.RegisterMain{width:100%;margin-top:10px;}
.RegisterMain ul{margin-left:25px;}
.RegisterMain li,.avatarInfo li{height: 32px; line-height:32px; margin-top: 20px;}
.RegisterMain li label,.avatarInfo li label,.setsPasswdMain li label,.setsPasswdMain .userNames{font:14px/32px "Microsoft Yahei";width: 80px;display: inline-block;text-align: right;color: #777;float:left;}
.RegisterMain li input,.avatarInfo li input,.setsPasswdMain li input{width: 210px; height: 28px; border:1px solid #c5c5c5;padding: 0 5px;line-height:28px;}
.RegisterMain .reg_key_key input{width: 100px;margin-right: 15px;}
.RegisterMain .reg_submit_sub input{width:64px;border: 0;height: 30px;margin:0 0 0 80px;}
.popBox .psmessage{padding:20px 0;text-align:right;height:30px;line-height:30px;color:#333;}
.popBox .psmessage a{display:inline-block;margin-right:20px;text-align:center;height: 30px;color: #0af;cursor: pointer;}
/*鏀惰棌鍥剧墖css*/
.imageHans {width:600px; height: 260px;}
.imageHans .chooseAlbum {margin-bottom:20px;}
.imageHans .albumList_s {top:30px;}
.imageHans .titleBox{padding: 5px 10px;width: 270px;background-color: #F7F7F7; height: 65px;}
.imageHans .uploadImg_sl {padding: 5px;border-bottom: 0;}
.imageHans .uploadImg_sl img {padding: 0;}
.imageHans .favaImgages{margin: 15px 0 0 35px;}
/*涓撹緫椤甸潰*/
.albumContent {border: 1px solid #dedfe0;background-color: #FFF;margin-top: 10px;}
.albumHead {height: 83px; border-bottom: 1px solid #efefef;}
.albumContent .mainList li {margin:35px 35px 0 0;}
.albumHead .nameData{padding-left: 35px;width: 240px;}
.albumHead .nameData h1{font:normal 18px/45px "microsoft yahei";}
.albumHead .nameData span{color: #999;}
.albumHead .albumDesc {padding-top: 33px;color: #888;width: 540px;}
.albumHead .likeico i{margin: 30px 0 0;}
.albumshare {position: relative;}
.albumshare .share{display: block;width: 40px; height: 32px;border: 1px solid #d6d6d6;
	-webkit-border-radius:2px;
	-moz-border-radius:2px;
	border-radius: 2px;text-align: center;background-color: #FFF;}
.albumshare .shareon{ border-right:1px solid #FFF;border-top-right-radius:0;border-bottom-right-radius:0;}
.albumshare .share i{width: 20px; height: 20px;display: inline-block;background: url(./assets/images/shareico.png) -12px -40px no-repeat;margin-top: 6px;}
.albumshare .shareList {display:none;width:0px;height: 24px;line-height:24px;position: absolute;top: 0;left: 78px;overflow:hidden;background-color: #FFF;}
.albumshare .shareList span{display: block;float: left;color: #666;font-size: 14px;}
.albumshare .shareList a{padding:0px;display: block;float:left;width: 24px; height: 24px;margin: 0 10px 0 0;}
.editAlbum a{display: block;width: 55px;height: 32px;border: 1px solid #D6D6D6;font: 14px/32px '瀹嬩綋';text-align: center;
	-webkit-border-radius:2px;
	-moz-border-radius:2px;
	border-radius: 2px;margin-top: 25px;}
/*閿欒鎻愮ず*/
.right_tips ,.wrong_tips{display:inline;width:15px;height:15px;background:url(./assets/images/back_image.png) -181px -52px no-repeat;margin:8px 0 0 10px;float:left;}
.wrong_tips {background-position:-207px -52px;}
.span_tips {color:#e51f1f;padding-left:5px;font-family:"microsoft yahei";display:block;float:left;line-height:32px;}
/*寮瑰眰css鐗囨*/
.muskBox {position: fixed;background-color:#ccc;opacity:0.8;filter:alpha(opacity=80);left: 0;top: 0;width: 100%;height: 100%;z-index: 1000;}
.popBox {width: 484px;background-color: #fff; position: absolute;left:30%;top: 10%;z-index: 1010;border: #B0B0B0;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2),0px 0px 5px rgba(0, 0, 0, 0.2);_position:absolute;border-radius:5px;}
.popTitle{height: 45px;line-height: 45px;border-bottom: 1px solid #ebebeb;position:relative;text-align: center;}
.popTitle span{font: 20px/45px "Microsoft yahei";color:#333;}
.popTitle p{font: 20px/45px "Microsoft yahei";color:#0af;display:inline;}
.popTitle a{display: block;width: 32px; height: 32px;text-indent: -9999em;background: url(./assets/images/close_pn.png) 0 0 no-repeat;position: absolute;right:-10px;top:-10px;}
.popTitle a:hover{background-position:0 -32px;}
.popMain {width: 420px;height: 220px;border:4px dashed #e1e1e1;margin: 32px;}
.uploadTip{ text-align: center;color: #6d6d6d;padding:45px 0;}
.popUploadBox {margin: 0 auto;overflow:hidden;height:30px;}
.popUploadBox .upload_imgbtn{width:100%;height:100%;cursor: pointer;position:absolute;filter:alpha(opacity=0); opacity:0;outline:none;}
.activeBtn {background-position: 0 -116px;}
.albumMain ul{padding:40px 40px 0;}
.albumMain .album_1 { height: 30px; line-height: 30px;}
.albumMain .inputTitle{width: 50px; padding-right: 10px;color: #777;text-align: right;}
.albumMain .albumName input{height: 26px;width: 270px;border: 1px solid #d4d4d4;padding:0 5px;}
.albumMain .sampleText,.albumList_s .sampleText {padding:5px 0 20px 60px;width: 270px;color: #999;line-height: 20px;}
.albumMain .desBox textarea{width: 270px; height: 63px;padding:5px;border: 1px solid #d4d4d4;}
.inputWraning {background-color: #faffbd;}
.albumCreate{margin:20px 0 0 60px;}
.albumCreate input {width: 66px; height: 30px; line-height: 30px;cursor: pointer;border: 0;color: #fff;background-color: #22b4f6;font-size: 14px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;}
/*鍙戝竷瀹屾垚*/
.prompt {margin: 48px 32px 0 116px; padding: 0 0 48px 0;}
.done_d {background:url(./assets/images/done_bs.gif) 0 0 no-repeat;}
.error_d {background:url(./assets/images/error_bs.gif) 0 0 no-repeat;}
.prompt h3 { padding-top: 6px;padding-left:50px;color:#666;font-size: 14px;font-weight: normal;}
.prompt h3 a {text-decoration: none;  color: #5678a0;}
.prompt h3 a:hover,.sgcoll-over-bot a:hover,.continuCreate a:hover {color: #f14382;text-decoration: underline;}
.sgcoll-over-bot,.continuCreate {padding: 20px 0 20px;text-align:center;border-top: 1px solid #e0e0e0;background-color:#f8f8f8;color:#bbbbbb;}
.sgcoll-over-bot a,.continuCreate a {text-decoration: underline;color: #5678a0;font-size:14px;}
/*鎻愮ず淇℃伅*/
.tipBox{width: 400px; height: 160px;}
.tipBox .prompt{margin-top: 35px;}
/*杩斿洖椤堕儴*/
.return{position:fixed !important;display:none;width:48px;height:50px;right: 50px !important;bottom: 50px !important;left:auto;top:auto;text-align: center;font-size: 12px;-webkit-border-radius: 3px;-moz-border-radius: 3px;-ms-border-radius: 3px;border-radius: 3px;overflow: hidden;cursor: pointer;color: #fff;background:url(/assets/images/assets/images/returnbg.png) no-repeat center;}
.return span{display:none;padding: 8px 12px 10px;width:24px;height:32px;line-height:18px;}
.return a{display:inline-block;padding: 8px 12px 10px;width:24px;height:32px;background:url(/assets/images/assets/images/returnUP.png) no-repeat center;}
.return:hover span{display:block;}
.return:hover a{display:none;}
/*鍠滄娴眰*/
.tipImg { width:100px; height:57px;  background:url(./assets/images/tipbg.png) no-repeat;}
.tipLike { background-position:0 0;}
.tipWas { background-position:0 -236px;}
/*qq鐧诲綍鏈縺娲�*/
.qqBind {line-height:65px;}
.qqBind a {margin-left: 10px;}
.qqBind span {color: #f00;font-family: microsoft yahei;}


/*棣栭〉閮ㄥ垎css*/
.contMain{margin-top: 10px;}
/* 鐑棬鏍囩 */
.mainIndex{background:#fff;border-radius:5px;border: 1px solid #dfdfdf;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);
box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);padding:20px 30px 10px;}
.mainIndex span,.mainMenu .hot_tags span{float:left;padding:5px 10px;background-color:#ffbb33;border-radius:3px;color:#fff;}
.hot_tags {padding-top:10px;border-top:1px dashed #d2d2d2;}
.mainIndex ul,.hot_tags ul{}
.mainIndex ul li,.hot_tags ul li{float:left;border-right:1px solid #d5d5d5;margin:5px 0 15px 10px;}
.mainIndex ul li:first-child,.hot_tags ul li:first-child{margin:5px 0 15px 30px;}
.mainIndex ul li:last-child,.hot_tags ul li:last-child{border:none;}
.mainIndex ul li a,.hot_tags ul li a{display:block;margin:0 15px;letter-spacing: 1px;color:#4f4f4f;}
.mainIndex ul li a:hover,.hot_tags ul li a:hover{color:#ff4466;}
/*鍒楄〃椤礳ss*/
.mainMenu,.mainZtintro{background:#fff;border-radius:5px;border: 1px solid #dfdfdf;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);
box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);padding:30px 30px 10px;}
.mainZtintro{padding:30px 80px;}
.mainZtintro .ztimg{margin-right: 100px;}
.mainZtintro .ztimg img{width:100px;height:100px;}
.mainZtintro .intro{padding-right:80px;border-right:1px solid #e1e1e1;}
.mainZtintro .intro p{height:25px;color:#909090;}
.mainZtintro .zt_intro{margin-left: 60px;}
.mainZtintro .zt_intro span{display:block;padding-left:28px;height:33px;line-height: 33px;color:#707070;}
.mainZtintro .zt_intro_1 {background:url(/assets/images/zhuye.png) left no-repeat;}
.mainZtintro .zt_intro_2 {background:url(/assets/images/tmall.png) left no-repeat;}
.mainZtintro .zt_intro_3 {background:url(/assets/images/jingdong.png) left no-repeat;}
.mainZtintro .zt_intro a{text-decoration: underline;color:#707070;}
.menu_alls .menu_all{width:220px;margin-right:22px;}
.menu_alls .menu_all_4{float:right;margin:0;width:170px;}
.menu_all .menu_allt i{display:inline-block;background:url(/assets/images/allbgs.png) no-repeat;width:18px;height:18px;float:left;margin:2px 10px 0 0;}
.menu_all .menu_allt h3{float:left;}
.menu_all_1 .menu_allt i{background-position: 0 -54px;}
.menu_all_2 .menu_allt i{background-position: 0 0;}
.menu_all_3 .menu_allt i{background-position: 0px -72px;}
.menu_all_4 .menu_allt i{background-position: 0px -90px;}
.menu_all_5 .menu_allt i{background-position: 0px -54px;}
.menu_all_6 .menu_allt i{background-position: 0px -72px;}
.menu_all_7 .menu_allt i{background-position: 0px -108px;}
.menu_all_8 .menu_allt i{background-position: 0px -130px;width:24px;height:24px;}
.menu_all_9 .menu_allt i{background-position: 0px -18px;}
.menu_all_10 .menu_allt i{background-position: 0px -36px;}
.menu_all ul{float:left;width:150px;margin-top: 10px;}
.menu_all ul li{min-width:60px;_width:60px;margin-bottom:20px;}
.menu_all ul li a{letter-spacing: 1px;color:#4f4f4f;}
.menu_all ul li.activeColor a,.menu_all ul li a:hover{color: #f46;}
.menu_alls .menu_all_5,.menu_alls .menu_all_6{width:48%;margin: 0;overflow:hidden;}
.menu_alls .menu_all_6{width:44%;}
.menu_alls .menu_all_f{width:100%;margin: 0;overflow:hidden;}
.menu_all_5 ul,.menu_all_6 ul,.menu_all_f ul{float:left;margin: 10px 0 0;width:100%;overflow:hidden;}
.menu_all_5 ul li,.menu_all_6 ul li,.menu_all_f ul li{float:left;margin:0 30px 20px 0;}
.mainTitle{height:36px;margin: 15px 0;}
.mainZtname {height:36px;margin: 10px 0;}
.mainTitle h1{float:left;padding:0 30px 0 40px;font-size: 22px;line-height: 31px;background:url(/assets/images/tags.png) no-repeat;background-position: 4px 7px;color:#666;}
.mainZtname h1{float:left;font-size: 22px;height:22px;line-height:22px;color:#666;padding-left:15px;border-left:4px solid #ff4466;margin-top:7px;}
.mainZtname a{float: right;color:#ff4466;margin-right: 15px;line-height: 36px;}
.mainTitle a.on {color: #444;background-color: #ddd;border:none;padding:8px 16px;}
.mainTitle a{display: inline-block;float:left;color:#888;padding:8px 16px;background-color: #fff;}
.mainTitle .hotnew a{border:solid 1px #ddd;}
.mainTitle .tablist{margin-left:30px;border:solid 1px #ddd;border-left:none;}
.mainTitle .tablist a{border-left:solid 1px #ddd;}
.mainList{overflow: hidden;}
.mainList ul.main-card{width:990px;overflow: hidden;}
.mainList li.card {float:left;position: relative; margin: 0 27px 40px 0;}
.mainList li.liRight{float:right;margin:0 0 40px 0;}
.mainList .card-main{width:300px;background-color: #fff;border:solid 1px #dfdfdf;overflow:visible; -webkit-border-radius:4px;-moz-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);}
.mainList .card-hd .img img,.likePart .img img{vertical-align: middle;border-radius: 3px 3px 0 0;}
.mainList .card-hd .img img:hover,.likePart .img img:hover{filter:alpha(opacity=80); opacity:0.8;}
.mainList .card-hd{position: relative;height: 260px;overflow: hidden;  border-radius: 3px 3px 0 0;}
.mainList .card-hd .btn-collect,.mainList .card-hd .btn-love{font-size: 12px;-webkit-border-radius: 4px;-moz-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;padding:8px 15px;vertical-align: middle;cursor: pointer;position:absolute;z-index:12;top:20px;}
.mainList .card-hd .btn-love{padding:8px 12px;}
.mainList .card-hd .btn-collect{left:20px;background: #db5140;color:#fff;background-image: -webkit-linear-gradient(bottom,#a02713,#c0341e 7%,#e0614d 92%,#ee6f5b);}
.mainList .card-hd .btn-collect:hover{background: #d8442b;background-image: -webkit-linear-gradient(bottom,#962412,#a83725 7%,#c15848 92%,#d06b5b);}
.mainList .card-hd .btn-love{right:20px;background: #e7e7e7;background-image: -webkit-linear-gradient(bottom,#babbbb,#dedede 9%,#efefef 96%,#f1f2f4);}
.mainList .card-hd .btn-love:hover{background: #d3d3d3;background-image: -webkit-linear-gradient(bottom,#a8a8a8,#c9c9c9 9%,#dddcdc 96%,#e4e6e6);}
.mainList .card-hd .btn-love i{background: url(./assets/images/btn-like.png) no-repeat 0 -80px;width:20px;height:18px;display:inline-block;}
.mainList .card-hd .btn-love:hover i{background: url(./assets/images/btn-like.png) no-repeat 0 -40px;}
.mainList .card-bd {padding:10px 20px 0px 20px;height: 120px;}
.mainList .card-bd .bd-quote{color:#5d5c5c;word-wrap: break-word;
word-break: break-word;line-height:24px;}
.mainList .card-bd .bd-info{position: absolute;bottom: 15px;left: 20px;right: 20px;}
.mainList .card-bd .bd-info ul{overflow: hidden;padding:0 10px;}
.mainList .card-bd .bd-info ul li{height:16px; font-size:15px;color:#aeaeae; padding-left:20px; line-height:16px;}
.mainList .card-bd .bd-info ul li.list-count{background:url("./assets/images/shoucang.png") no-repeat;}
.mainList .card-bd .bd-info ul li.like{background:url("./assets/images/xihuan.png") no-repeat;}
.mainList .card-bd .bd-info ul li.post{margin-right:0px;background:url("./assets/images/pinglun.png") no-repeat;}
.pageIndex {margin:0 0 20px 0;width:100%;text-align:center;}
.pageIndex a,.pageIndex b {display: inline-block;font: 14px/1.5 "Microsoft yahei";background-color: #e1e2e3;padding: 4px 12px;margin-right: 5px;}
.pageIndex b, .pageIndex a:hover {color: #fff;background-color: #de533c;}

/*涓婁紶鍥剧墖澶勭悊椤�*/
.imgHandler{height: 560px;top: 0;}
.uploadImg_sl{background-color: #f7f7f7;padding: 5px 0; text-align: center;border-bottom: 1px solid #ebebeb;}
.uploadImg_sl img{padding: 3px;background-color: #fff;}
.xh_list {padding-left: 20px;position: relative;}
.xh_list h4{margin: 20px 0 5px;}
.chooseAlbum .chooseAlbumLink {display: block;width: 260px;height: 24px;overflow: hidden;line-height: 1.8;padding: 2px 20px 0 4px;border: 1px solid #d4d4d4;background: url(./assets/images/icons.gif) right -29px no-repeat;}
.chooseAlbum .chooseAlbumLink:hover{background-position: right 1px;color: #238fdb;background-color: #d7eafb;}
.imgAreatext,.tagsInput,.add_album{position: relative;}
.imgAreatext textarea,.tagsInput input{width: 415px;height: 60px;padding: 5px;border:1px solid #d4d4d4;}
.imgAreatext label,.tagsInput label,.add_album label{position: absolute;left: 5px; top: 5px;color: #aaa;}
.tagsInput input{height: 26px;padding: 0 5px;}
.submit_btn input,.submit_album input,.image_sub input {border: 0;width: 66px;height: 30px;background-color: #22b4f6;color: #fff;font-size: 14px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius: 2px;cursor: pointer;margin-top: 15px;}
.albumList_s{border: 1px solid #ccc;width: 284px;background-color: #f7f7f7;position: absolute;z-index: 930;display: none;top: 55px;left: 20px;}
.album_conts_list {height: 140px;background-color: #fff;overflow:hidden;overflow-y:scroll;}
.album_conts_list a:hover{color: #238fdb;background-color: #d7eafb;}
.album_conts_list a{display: block;height: 26px; line-height: 26px;color: #666;padding:0 5px;}
.add_album input{width: 170px; height: 28px;border: 1px solid #d4d4d4;padding:0 5px;}
.submit_album input {margin:0 0 0 8px;}
.album_create_form{margin: 8px 0 8px 8px;}
.albumList_s .sampleText{margin: 0 0 8px 8px;padding: 0;}
/*涓婁紶妯″潡鏍峰紡*/

.popUploadBox .cancel { text-align:center;}
.popUploadBox .cancel a {color:blue;text-decoration:underline;}
/*鍥剧墖鍐呭椤靛乏渚�*/
.goodsContent{margin-top: 10px;position: relative;}
.goodsContLeft,.goodsContRight {width: 700px;}
.goodborder{float:left;background-color:#fff;border: 1px solid #dedfe0;-webkit-border-radius: 4px;-moz-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);}
.goodsInfoPart{padding: 0 29px 20px;border-bottom: 1px solid #dedfe0;}
.goodstitleLike{padding:28px 0;}
.goodstitleLike .location{letter-spacing:3px;word-wrap: break-word;color:#999;font-size:13px;}
.goodstitleLike .location a,.goodstitleLike .sharer a{color:#5188a6;}
.goodstitleLike .location a:hover,.goodstitleLike .sharer a:hover{color:#0af;}
.goodstitleLike .sharer a{margin-right:10px;}
.goodstitleLike .sharer a img{border-radius:50%;margin:-10px 15px 0;}
.goodstitleLike .sharer{word-wrap: break-word;color:#999;font-size:13px;}


.mainIntro h1{text-align: center;margin-bottom: 20px;font-family:"Microsoft yahei";font-weight: normal;color: #333;}
.mainIntro .main_pinglun{word-wrap: break-word;color:#616161;font: 16px/1.8 "Microsoft yahei";padding:0 20px;margin-bottom:20px;}
.mainIntro .bsh_dpqq{text-align:center;color: #ff4466;font: 16px/1.8 "Microsoft yahei";margin-bottom: 20px;}
.mainIntro .price_place{border-top:1px dashed #dedfe0;border-bottom:1px dashed #dedfe0;line-height:40px; margin:0 0 20px 0;padding:0 20px;word-wrap: break-word;color: #616161;font: 15px/40px "Microsoft yahei";}
.mainIntro .price_1,.mainIntro .place_1{display:block;}
.mainIntro .price_1{width: 150px;}
.mainIntro .place_1{width: 450px;}
.mainIntro .place_1 a{color: #5188a6;}
.mainIntro .place_1 a img{vertical-align: middle; margin: -2px 0 0 3px;}
.mainIntro .place_1 a:hover{color: #0af;}
.mainIntro .main_picture p{text-align:center;margin-bottom:25px;}
.mainIntro .main_tags{padding:0 20px;margin-bottom:30px;text-align:right;}
.mainIntro .main_tags a{display:inline-block;color:#5188a6;margin:0 0 0 10px;height:16px;line-height:16px;}

.mainIntro div{position:relative;margin:4px 0;}
.mainIntro div span{position: absolute;top: 10px;right: 10px;color: #fff;font-size: 20px; border-radius: 50%;border: 1px solid #fff;width: 25px;height: 25px;text-align: center;line-height: 25px;}

.main_count{padding: 30px 49px;border-bottom: 1px solid #dedfe0;}
.main_count>span{padding-left:35px;display:inline-block;height:24px;margin-right:25px;font: 16px/24px "Microsoft yahei";color:#616161;cursor:pointer;}
.main_count .main_like{background: url(./assets/images/xihuan_b.png) no-repeat;}
.main_count .main_like:hover{color:#f66;}
.main_count .main_like i,.main_count .main_collect i{margin-left:10px;}
.main_count .main_collect{background: url(./assets/images/shoucang_b.png) no-repeat;}
.main_count .main_collect:hover{color:#f5a70f;}
.main_count .main_share{background: url(./assets/images/fenxiang.png) no-repeat;margin-right:0;}
.main_count .main_share:hover{color:#0af;}
.likePart span.mblike {display:block;font-weight:bold;color:#aaa;margin:20px 0 20px 0;font: 20px/1 "microsoft yahei";}
.likePart li.card{float:left;width: 210px; border:solid 1px #ddd;background-color: #fff;position: relative; margin: 0 31px 32px 0;overflow: hidden; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius: 4px;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);}
.likePart li.liRight{float:right;margin:0 0 32px 1px;}
.likePart .card-hd{position: relative;height: 194px;overflow: hidden;}
.likePart .card-hd .hd-price{position: absolute;right: 0;bottom: 0;line-height: 1;padding: 8px 12px;color: #fff;background: #b9b9b9;background: rgba(185,185,185,0.8);filter:alpha(opacity=80);}
.likePart .card-bd {padding:10px 20px 10px 20px;height: 50px;}
.likePart .card-bd .bd-title {margin-bottom:20px;}
.likePart .card-bd  a{font-size:13px;color:#a68b54;}
.likePart .card-bd  a:hover{color:#985d3e;}
.commodity-response {width:698px;background: #fafafa;border-radius:4px;}
.commodity-response .ul-tabbar{display: inline-block;width:100%;}
.commodity-response .ul-tab {display: inline-block;float:left;vertical-align: top;border-top: 3px solid transparent;font-size: 14px;padding: 8px 20px;position: relative;cursor: pointer;border-top-color: #e79005;color: #333;}
.commodity-response .ul-tab:after {content: "";display: block;border-right: 1px dotted #999;height: 19px;position: absolute;right: 0;top: 8px;}
.commodity-response .ul-tab:last-child:after {border-right: 0;}
.commodity-response .ul-content {padding:0 20px 0px;}
.ul-contents .story-postlist {border-bottom: 1px solid #efefef;}
.ul-contents .story-postitem:first-child {border-top: 0;}
.ul-contents .story-postitem {overflow: hidden;padding: 18px 0;border-top: 1px solid #efefef;}
.ul-contents .story-editor {padding-bottom:20px;}
.ul-contents .story-postitem a{color:#985d3e;}
.ul-contents .story-postitem a:hover,.ul-contents .story-collection a:hover{color:#6c4028;}
.ul-contents .story-collection {padding: 20px 0px;background: #fafafa;}
.ul-contents .story-collection li:first-child {margin-top: 0;}
.ul-contents .story-collection li {overflow: hidden;line-height: 30px;margin: 20px 0;text-align:left;}
.ul-contents .story-collection .avatar {margin-right: 35px;}
.ul-contents .story-collection a {color: #985d3e;float:left;}
.ul-contents .story-collection p{float:left;margin:0 5px;}
.ul-contents .story-collection .avatar img {width: 30px;height: 30px;border-radius: 30px;}
.ul-contents .story-collection .time {float: right;color: #999;}
.ul-contents .story-postitem .postitem-refer {font-size: 12px;margin-bottom: 10px;border-left: 2px solid #ccc;padding-left: 10px;}
.story-postitem .postitem-refer .refer-text {color: #999;}
.story-postitem .postitem-refer .refer-author {margin-left:6px;color: #985d3e;}
.story-postitem .postitem-hd {margin-bottom: 4px;}
.story-postitem .postitem-avatar, .story-editor .postitem-avatar {float: left;margin-right: 20px;}
.story-postitem .postitem-avatar img,.story-editor .postitem-avatar img {width: 40px;height: 40px;border-radius: 40px;}
.story-postitem .postitem-time {float: right;color: #999;}
.story-postitem .postitem-bd {overflow: hidden;}
.story-postitem .postitem-content .postitem-text {font-size: 13px;word-wrap: break-word;word-break: break-all;color:#333;}
.story-postitem:hover .postitem-actions {visibility: visible;}
.story-postitem .postitem-actions {visibility: hidden;float: right;}
.story-postitem .postitem-action {display: inline-block;float:left;vertical-align: top;color: #985d3e;cursor: pointer;margin-left: 8px;}
.story-postform .postitem-content {border: 1px solid #ccc;background: #fff;text-align: right;}
.story-editor .postitem-content {overflow: hidden;position: relative;}
.story-postform .hidden{display:none;}
.story-postform .postitem-refer {background: #f6f6f6;overflow: hidden;padding: 10px 18px;text-align: left;font-size: 13px;}
.postitem-content .postitem-refer a.refer-author{color:#985d3e;}
.postitem-content .postitem-refer a.refer-close {float: right;font-size: 18px;line-height: 1;color: #999;font-weight: 300;}
.story-postform .postitem-refer span.refer-text {border-left: 2px solid #999;padding-left: 12px;color: #666;}
.postitem-content textarea.myexpand{width:590px;padding: 10px 12px;box-sizing: border-box;outline: 0;vertical-align: middle;margin: 1px;border:0;overflow: hidden; word-wrap: break-word; height: 36px;}
.postitem-content .js-add-post {padding: 5px 16px;margin-bottom: 3px;color: #fff;background-color: #de533c;border: 1px solid #de533c;-webkit-border-radius: 3px;-moz-border-radius: 3px;-ms-border-radius: 3px;border-radius: 3px;font-size: 12px;line-height: 15px;margin-right:3px;vertical-align: middle;cursor: pointer;border:none;}
.postitem-content .js-add-post:hover{background-color: #d8442b;}
.story-pager .paginator {margin: -3px 0 0 0;text-align: right;padding: 18px 0;}
.paginator {width: 100%;zoom: 1;font-size: 14px;color: #aaa;margin: 20px 0;line-height: 150%;text-align: center;
}
.paginator a,.paginator b {margin-left:5px;background: #dcdcdc;color: #fff!important;display: inline-block;vertical-align: top;padding: 0 8px;}
.paginator b {background: #e79005;}
.no-story-post{color:#555;margin:15px 0 20px;}
.pl_tip_login{border:1px solid #ccc;background-color:#fff;width:598px;height:68px; text-align:center;line-height:68px;position:absolute;}
.pl_tip_login a{color:#0af;margin:0 5px;}
.no-login-pl{position:relative;width: 598px;float:right;height:70px;}
/*鍥剧墖鍐呭椤靛彸渚�*/
.goodsContRight {width: 248px;background-color: #fff;  border: 1px solid #dedfe0;-webkit-border-radius:4px;-moz-border-radius: 4px;-ms-border-radius: 4px;border-radius: 4px;-webkit-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);box-shadow: 0 1px 2px 0 rgba(158,158,158,0.2);}
.userInfo,.firstFava {border-bottom: 1px solid #eeefef;height: 210px;}
.userInfo .avatar{text-align: center;padding-top: 25px;}
.userInfo .avatar img,.firstPic img,.favaUserlist li img{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;}
.contUsername{text-align: center;font: 18px/1 "microsoft yahei";padding: 15px 0;}
.userInfo .fans{text-align:center;}
.userInfo .fans a{padding:6px 14px;background:#128323;color:#fff;border-radius:3px;}
.favaUserlist h4{text-align: center;font: 16px/50px "microsoft yahei";}
.favaUserlist ul{padding-left: 20px;}
.favaUserlist li {float: left;margin: 0 0 15px 15px;}
/*鍥剧墖娴忚澶у浘*/
#browse{display:none;}
.browse-block{position:fixed;left:0;top:0;right:0;bottom:0;z-index: 998;background-color: #ccc;opacity:0.8;
filter: Alpha(Opacity=80);_position: absolute;}
.browse-frame{position:fixed;left:0;top:0;right:0;bottom:0;z-index: 999;text-align: center;_position: absolute;}
.browse-frame:before{content: "";width: 0;height: 100%;display: inline-block;vertical-align: middle;}
.browse-main{overflow: visible!important;}
.browse-main{display: inline-block;vertical-align: middle;-webkit-border-radius: 3px;-moz-border-radius: 3px;-ms-border-radius: 3px;border-radius: 3px;-webkit-box-shadow: 0 0 9px rgba(0,0,0,0.1);-moz-box-shadow: 0 0 9px rgba(0,0,0,0.1);-ms-box-shadow: 0 0 9px rgba(0,0,0,0.1);box-shadow: 0 0 9px rgba(0,0,0,0.1);position: relative;z-index: 2;background: #fff;}
.browse-close{cursor:pointer;background: url(./assets/images/close_view.png) 0 0 no-repeat;}
.browse-close{width: 24px;height: 23px;line-height: 21px;top: 8px!important;right: 8px;}
.browse-close{position: absolute;z-index: 1;}
.browse-close:hover{background: url(./assets/images/close_view.png) 0 -24px no-repeat;}
.browse-content{position: relative;font-size: 12px;}
.browse-prev{left:-45px;}
.browse-prev,.browse-next{position: absolute;z-index: 1;top: 50%;margin-top: -25px;width: 40px;height: 40px;cursor: pointer;}
.browse-prev i{background:url(./assets/images/next_prev.png) no-repeat -40px 0;}
.browse-next i{background:url(./assets/images/next_prev.png) no-repeat 0 0;}
.browse-prev i,.browse-next i{display:inline-block;position: relative;z-index: 5;width: 40px;height: 40px;filter:alpha(opacity=60);opacity: 0.6;}
.browse-next{right:-45px;}
.browse-prev em,.browse-next em{-webkit-border-radius: 5px;-moz-border-radius: 5px;-ms-border-radius: 5px;-o-border-radius: 5px;border-radius: 5px;position: absolute;display:inline-block;width: 100%;height: 40px;top: 0;left: 0;background: black;filter:alpha(opacity=30);opacity: 0.3;z-index:3;}
.browse-prev:hover i,.browse-next:hover i{filter:alpha(opacity=90);opacity: 0.9;}
.browse-image{min-width:300px;min-height: 300px;line-height: 200px;-webkit-border-radius: 3px;-moz-border-radius: 3px;-ms-border-radius: 3px;border-radius: 3px;overflow: hidden;position: relative;background: url(./assets/images/loading.gif) no-repeat 50% 50%;_width:600px;}
.browse-image img{vertical-align: middle;display:inline-block;min-width:300px;max-height:600px;}
/*鍒楄〃鏀荤暐*/
.gl_main{background:#fff;border-radius:5px;border:1px solid #dfdfdf;-webkit-box-shadow:0 1px 2px 0 rgba(158,158,158,0.2);-moz-box-shadow:0 1px 2px 0 rgba(158,158,158,0.2);-ms-box-shadow:0 1px 2px 0 rgba(158,158,158,0.2);box-shadow:0 1px 2px 0 rgba(158,158,158,0.2);padding:30px 60px 10px;}
.gl_sonlist{border-left:solid 3px #ff4466;overflow:hidden;padding-left:10px;margin-bottom:5px;}
.gl_sonlist li{float:left;width:60px;text-align:center;}
.gl_sonlist li a{display:inline-block;line-height:16px;height:16px;font:16px/16px "microsoft yahei";color:#575757;}
.gl_sonlist li a.on{color:#ff4466;}
.gl_conlist{padding-top:30px;border-top:solid 1px #f1f2f3;}
.gl_conlist .gl_conall{float:left;display:inline-block;}
.gl_conlist h2,.gl_conlist .gl_users,.gl_conlist p{float:left;width:600px;margin-left:30px;}
.gl_onecon{margin-bottom:70px;position:relative;z-index:99;}
.gl_conlist .gl_users{margin:15px 0 15px 30px;}
.gl_conlist .gl_users img{border-radius:50%;}
.gl_conlist h2 a{font:18px/18px "microsoft yahei";}
.gl_conlist .gl_users span{display:inline-block;height:26px;line-height:26px;color:#999;}
.gl_conlist .gl_users span a{color:#0af;}
.gl_conlist p{font:16px/28px "microsoft yahei";color:#555;word-wrap:break-word;word-break:break-all;}
.gl_dc{position:absolute;z-index:98;right:10px;bottom:0;width:120px;}
.gl_dc span{height:16px;font-size:15px;color:#aeaeae;padding-left:20px;line-height:16px;}
.gl_d{background:url("./assets/images/xihuan.png") no-repeat;}
.gl_c{float:right;background:url("./assets/images/pinglun.png") no-repeat;}
.main_glnr{word-wrap:break-word;color:#616161;font:16px/1.8 "Microsoft yahei";padding:0 20px;margin-bottom:20px;}
.main_glnr pre,.main_glnr p{white-space: pre-wrap;overflow:hidden;font-family:"Microsoft yahei"}


.uploadifive-button{background: url(./assets/images/add.png) no-repeat;
    background-size: 80px 80px;
    background-position: 50%;
	border: 3px dashed #ccc;
}
</style>
