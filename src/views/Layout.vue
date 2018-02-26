<template>
    <yd-layout>
        <!-- <yd-navbar slot="navbar" title="NavBar">
            <router-link to="#" slot="left">
                <yd-navbar-back-icon></yd-navbar-back-icon>
            </router-link>
        </yd-navbar> -->

        <router-view/>

        <tab></tab>
        

    </yd-layout>
</template>
<script>
    import Tab from '@/components/Tab'
    export default {
        components: { Tab }
    }
</script>