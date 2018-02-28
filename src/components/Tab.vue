<template>
    <div>
    <yd-tabbar fixed>
        <yd-tabbar-item  :active="currentIndex==index" @click.native="setActive(index)" v-for="(tab,index) in tabs" :key="index" :title="tab.title" :link="tab.link">
            <yd-icon :name="tab.icon" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <!-- <yd-tabbar-item title="首页" link="/">
            <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="#">
            <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="my">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item> -->
    </yd-tabbar>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                tabs:[
                    {title:'首页',link:'/index',icon:'home'},
                    {title:'分类',link:'/category',icon:'type'},
                    {title:'购物车',link:'/shopping_cart',icon:'shopcart'},
                    {title:'个人中心',link:'/my',icon:'ucenter-outline'}
                ],
                currentIndex:null,
                currentPath:''
            }
        },
        methods: {
            setActive:function(index){
                this.currentIndex = index
                console.log(index)
            }
        },
        created() {
            console.log(this.$router.currentRoute.path)
            this.currentPath = this.$router.currentRoute.path
        }
    }
</script>