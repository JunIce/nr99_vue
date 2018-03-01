/* eslint-disable */
<template>
    <div class="wrap contMain cl">
        <div class="mainMenu cl">
            <div class="menu_alls cl">
                <div class="menu_all menu_all_1 z" v-for="(tag,index) in infoTags">
                    <div class="menu_allt cl"><h3>{{index}}</h3></div>
                    <ul>
                        <li class="z" v-for="t in tag"><router-link :to="{path: t.tpath}">{{t.tname}}</router-link></li>
                    </ul>
                </div>
            </div>
        </div>

                    <div class="mainList z">
                        <ul class="main-card cl" >
                            <template v-for="m in cont">
                                <List  :detail="m"/>
                            </template>
                        </ul>
                    </div>
                    <div class="pageIndex z">
                        <a href="/show/nvzhuang/">首页</a>
                        <a href="/show/nvzhuang/3.html">上一页</a>
                        <a href="/show/nvzhuang/2.html">2</a>
                        <a href="/show/nvzhuang/3.html">3</a>
                        <b>4</b>
                        <a href="/show/nvzhuang/5.html">5</a>
                        <a href="/show/nvzhuang/6.html">6</a>
                        <a href="/show/nvzhuang/7.html">7</a>
                        <a href="/show/nvzhuang/8.html">8</a>
                        <a href="/show/nvzhuang/9.html">9</a>
                        <a href="/show/nvzhuang/10.html">10</a>
                        <a href="/show/nvzhuang/11.html">11</a>
                        <a href="/show/nvzhuang/12.html">12</a>
                        <a href="/show/nvzhuang/5.html">下一页</a>
                        <a href="/show/nvzhuang/162.html">尾页</a>
                    </div>

    </div>

</template>

<script>

import {api} from '../api'
import List from './List'

export default {
    name: 'ListMain',
    data() {
        return {
            cont: [],
            page: 1,
            pageBol: false,
            infoTags: {}
        }
    },
    mounted() {
        this.fetchData(this.$route)
        window.addEventListener('scroll', this.onScroll)
    },
    methods:{
        onScroll() {
            let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
            let winHeight =  document.body.offsetHeight;
            let innerHeight = window.innerHeight;

            this.pageBol = parseInt(winHeight - scrollTop - innerHeight) < 350 ? true : false;
        },
        fetchData(route) {
            let routeName = route.name;
            let classid = route.query.classid;
            let url = routeName == 'index' ? api.homeNewInfo : api.classInfo + '/' + classid;

            url += '?page='+ this.page +'&page_size=15'

            fetch(url ,{
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                this.cont = this.cont.concat(data);
            })
            .catch(err => {
                console.error(err)
            })

            let url2 = api.infoType + '?classid=' + classid;
            fetch(url2 ,{
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                this.infoTags = data;
                console.log(this.infoTags)
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    watch: {
        '$route'(to, from) {
            if(to.path !== from.path) {
                this.cont=[]
                this.page = 1
                this.fetchData(to)
            }
        },
        pageBol(val) {
            if(val) {
                this.page += 1;
            }
        },
        page(page){
            this.fetchData(this.$route)
        }
    },
    components:{
        List
    }
}
</script>
