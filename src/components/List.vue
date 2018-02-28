<template>
<li class="card ">
    <div class="card-main">
        <div class="card-hd">
            <router-link :to="{path: detail.titleurl.split('.')[0]}"  class="img"><img v-bind:src="detail.titlepic" width="300" height="260" v-bind:alt="detail.title"></router-link>
            <a class="btn-collect" id="collect-add" data-classid="3" data-id="8439" style="display: inline;"><span>加入收藏</span></a>
            <a class="btn-love" onclick="bAct.btnLove(this,3,8439)" style="display: inline;"><i></i></a>
        </div>
        <div class="card-bd">
            <div class="bd-quote"><router-link :to="{path: detail.titleurl.split('.')[0]}" >{{detail.title}}</router-link></div>
            <div class="bd-info">
                <ul class="stats-list">
                    <li class="post z">0</li>
                    <li class="like y">{{detail.likenum}}</li>
                </ul>
            </div>
        </div>
    </div>
</li>
</template>

<script>
export default {
    name: 'List',
    props:['detail'],
    data() {
        return {

        }
    }
}
</script>
