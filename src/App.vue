<template>
    <div>
        <!--<header></header>-->
        <sdheader></sdheader>
        <div class="app-container">
            <home></home>
        </div>
        <sdfoot></sdfoot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .app-container{
        margin-top: 55px;
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
<script>
    import home from './pages/home.vue';
    import sdheader from './components/Header/SDheader.vue'
    import sdfoot from './components/Foot/SDfoot.vue'
    export default {
        data () {
            return {}
        },
        components: {
            home,
            sdheader,
            sdfoot
        }
    }
</script>


