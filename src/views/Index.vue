<template>
    <div>
        <search></search>
        <slider></slider>
        <grids></grids>    
        <rollNotice></rollNotice>
        <list></list>
    </div>
</template>

<script type="text/babel">
    import Search from '@/components/Search'
    import Tab from '@/components/Tab'
    import Grids from '@/components/Grids'
    import Slider from '@/components/Slider'
    import RollNotice from '@/components/RollNotice'
    import List from '@/components/List'
    export default {
        data() {
            return {
                data: []
            }
        },
        components: { Search,Tab,Grids,Slider,RollNotice,List },
        mounted: function() {
            this.$http.get('/api/data').then(res => {
                this.data = res.data
                //console.log(this.data)
            })
        }
    }
</script>