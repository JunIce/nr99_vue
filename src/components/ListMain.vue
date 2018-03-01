<template>
    <div class="wrap contMain cl">
        <div class="mainList z">
            <ul class="main-card cl" >
                <template v-for="m in cont">
                    <List  :detail="m"/>
                </template>
            </ul>
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
            pageBol: false
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
