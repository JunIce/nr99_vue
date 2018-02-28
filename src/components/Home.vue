<template>
<div>
<div id="header" class="cl">
  <div class="headWrap wrap">
    <div class="logo z"><a href="/">粘人网</a></div>
    <div class="logo_sm z">
      <p>服装配饰&nbsp;&nbsp;晒单分享</p>
    </div>
    <div class="searchBox z">
      <form name="simpleSearch" action="/e/search/index.php" method="post">
        <input type="hidden" name="classid" value="0">
        <input type="hidden" name="show" value="title,appraise">
        <div class="searchInput z"><input type="text" name="keyboard" value=""></div>
        <div class="searchSubmit y"><input type="submit" name="submit" value="搜索"></div>
      </form>
    </div>

    <div class="headRight">
      <!--登录区域 start-->

      <div class="noLogin">

        <a href="javascript:;" class="regLink y">注册</a>
        <div class="preLine y"></div>
        <a href="javascript:;" class="loginLink y">登录</a>
      </div>
      <!--登录区域 end-->
    </div>
  </div>
  <div id="column_list">
    <div class="column_list wrap cl">
      <ul>
        <template v-for="(m) in menu">
            <li ><router-link :to="{ path: '/show/' + m.classpath , query:{ classid: m.classid}}" >{{m.classname}}</router-link></li>
            <li class="pre">|</li>
        </template>
        <li class="last"><a href="/e/tool/feedback/?bid=1">问题反馈</a></li>
      </ul>
    </div>
  </div>
</div>
<router-view></router-view>
</div>
</template>

<script>

import {api} from '../api'

export default {
    name: 'Header',
    data() {
        return {
            menu: []
        }
    },
    mounted() {
        fetch(api.siteMenu,{
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            this.menu = data
        })
        .catch(err => {
            //console.error(err)
        })
    }
}
</script>
