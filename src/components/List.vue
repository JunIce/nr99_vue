<template>
<li class="card ">
    <div class="card-main">
        <div class="card-hd" @mouseover="userAction = !userAction" @mouseout="userAction = !userAction">
            <router-link :to="{path: detail.titleurl.split('.')[0]}"  class="img">
                <img v-bind:src="detail.titlepic" width="300" height="260" v-bind:alt="detail.title">
            </router-link>

            <a class="btn-collect" id="collect-add" :data-classid="detail.classid" :data-id="detail.id" v-show="userAction">
                <span>加入收藏</span>
            </a>
            <a class="btn-love" v-show="userAction"><i></i></a>
        </div>
        <div class="card-bd">
            <div class="bd-quote">
                <router-link :to="{path: detail.titleurl.split('.')[0]}" >{{detail.title}}</router-link>
            </div>
            <div class="bd-info">
                <ul class="stats-list">
                    <li class="post z">{{detail.favanum}}</li>
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
            userAction: false
        }
    }
}
</script>
