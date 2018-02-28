<template>
    <div>
        <search></search>
        <slider :items="banners"></slider>
        <grids></grids>    
        <rollNotice></rollNotice>
        <list :items="goods"></list>
    </div>
</template>

<script type="text/babel">
    import { getGoods } from '@/api/goods'
    import { getBanners } from '@/api/banners'
    import Search from '@/components/Search'
    import Tab from '@/components/Tab'
    import Grids from '@/components/Grids'
    import Slider from '@/components/Slider'
    import RollNotice from '@/components/RollNotice'
    import List from '@/components/List'
    export default {
        data() {
            return {
                goods: [],
                banners:[]
            }
        },
        components: { Search,Tab,Grids,Slider,RollNotice,List },
        mounted: function() {
            getGoods().then(res => {
                this.goods = res.data
            })
            getBanners().then(res => {
                this.banners = res.data
            })
            // this.$http.get('/api/goods').then(res => {
            //     this.goods = res.data
            // })
            // this.$http.get('/api/banners').then(res => {
            //     this.banners = res.data
            // })

        }
    }
</script>