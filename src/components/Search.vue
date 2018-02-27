<template>
    <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                value1: ''
            }
        },
        methods: {
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        }
    }
</script>