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
            classid: '',
        }
    },
    mounted() {
        // this.$nextTick(function () {
        //     window.addEventListener('scroll', this.onScroll)
        // })
    },
    methods:{
        onScroll() {
            let scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
            let winHeight =  document.body.offsetHeight;
            let innerHeight = window.innerHeight;

            if(parseInt(winHeight - scrollTop - innerHeight) < 350)  console.log(parseInt(winHeight - scrollTop))
        }
    },
    beforeUpdate() {
        let classid = this.$route.query.classid;
        this.classid = classid
    },
    created() {
        fetch(api.homeNewInfo,{
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            this.cont = data
        })
        .catch(err => {
            console.error(err)
        })
    },
    watch: {
        classid:function(val){
            fetch(api.classInfo + '/' + val,{
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                this.cont = data
            })
            .catch(err => {
                console.error(err)
            })
        }
    },
    components:{
        List
    }
}
</script>
