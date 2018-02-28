<template>
    <yd-slider autoplay="3000">
        <yd-slider-item v-for="item in items">
            <a :href="item.href">
                <img :src="item.img">
            </a>
        </yd-slider-item>
        <!-- <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
            </a>
        </yd-slider-item> -->
    </yd-slider>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {

            }
        },
        props:{
            items:Array
        }
    }
</script>