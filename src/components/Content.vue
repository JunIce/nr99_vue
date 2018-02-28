<template>
<div id="goodsMain" class="wrap goodsContent cl">
  <div class="goodsContLeft z">
    <div class="goodborder">
      <div class="goodsInfoPart">
        <div class="goodstitleLike cl">
          <span class="location y">当前位置：<a href="/">首页</a> &gt; <a href="/show/nanzhuang/">男装</a> &gt;</span>
          <span class="sharer z"><a href="/member/620" target="_blank"><img :src="detail.userpic" width="36" height="36" alt="">{{detail.username}}</a>于{{newstime}}分享</span>
        </div>
        <div class="mainIntro">
          <div class="main_pinglun" v-html="detail.appraise"></div>
          <div class="main_picture">
             <p v-for="m in imgs">
                <img :src="m" :alt="detail.title"/>
             </p>
          </div>
          <div class="bsh_dpqq"><img src="http://www.nr99.com/assets/images/bsh_erwn.png"></div>
          <div class="price_place cl"><span class="price_1 z">价格：7800人民币</span><span class="place_1 y">购买处：
    <span title="Louis Vuitton">Louis Vuitton</span></span>
          </div>
          <div class="main_tags" v-if="detail.tags !== undefined && detail.tags.length > 0"><img src="http://www.nr99.com/assets/images/biaoqian.png">
                <a v-for="tag in detail.tags" :href="tag.tagid">{{tag.tagname}}</a>
          </div>
        </div>
      </div>
      <div class="main_count">
        <span class="main_like" onclick="bAct.btnLove(this,2,7790)">喜欢<i class="count">{{detail.likenum}}</i></span>
        <span class="main_collect" id="collect-add_1" data-classid="2" data-id="7790"><span>收藏</span><i class="count">{{detail.favanum}}</i></span>
        <span href="javascript:;" class="main_share albumshare">分享
         <div class="bdsharebuttonbox shareList cl bdshare-button-style1-24" data-bd-bind="1519786527994">
    <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a></div>

    </span>
      </div>
      <div class="commodity-response">
        <ul class="ul-tabbar">
          <li class="ul-tab">回应</li>
        </ul>
        <div class="ul-contents">
          <div class="ul-content">
            <div class="cont_pls" data-classid="2" data-id="7790">
              <p class="no-story-post">还没有关于这个东西的评论...</p>
            </div>

            <div class="story-editor cl">
              <span class="postitem-avatar">
    								<img src="/assets/images/member_36x36.gif" alt="">
    							</span>
              <div class="no-login-pl">
                <div class="pl_tip_login">
                  您还没登录，请<a href="javascript:;" onclick="upload.login()">登录</a>或<a href="javascript:;" onclick="upload.register()">注册</a>后再来评论！
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="goodsContRight y">
    <div class="userInfo">
      <div class="avatar"><a href="/member/620"><img :src="detail.userpic" width="80" height="80" :alt="detail.username"></a></div>
      <div class="contUsername"><a href="/member/620">{{detail.username}}</a></div>
      <div class="fans"><a href="javascript:;" data-uid="620" onclick="bAct.addFollow(this)">关注TA</a></div>
    </div>
    <div class="favaUserlist">
      <h4>TA们也收藏了此商品</h4>
      <ul class="cl">
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {
  api
} from '../api'

export default {
  name: 'Content',
  data() {
    return {
      detail: {},
      imgs: [],
      newtime: '',
    }
  },
  created() {
      let {classid, id} = this.$route.params;
      let url = api.infoDetail + '/' + classid + '/' + id;
      fetch(url,{
          method: 'GET',
      })
      .then(res => res.json())
      .then(data => {
          this.detail = data[0]
          console.log(data[0])
      })
      .catch(err => {
          console.error(err)
      })
  },
  methods:{
    formateTime(time) {
        let date = new Date(parseInt(time));
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return m + "-" + d;
    }
  },
  watch: {
      detail: function(detail) {
          //newstime
          let time = detail.newstime;
          this.newstime = this.formateTime(time);
          // imgs
          let imgs = detail.comm_imgs.split('###');
          imgs.map(m => {
              if(m == '' || null) return;
              this.imgs.push(m.replace('300x260', '600x600'));
          })
      }
  }

}
</script>
