<template>
    <div>
        <sdheader></sdheader>
        <div class="app-container">
            <home></home>
        </div>
        <sdfoot></sdfoot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .app-container {
        margin-top: 55px;
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

</style>
<script>
    import home from './pages/Home.vue';
    import sdheader from './components/Header/SDheader.vue'
    import sdfoot from './components/Foot/SDfoot.vue'
    export default {
        data () {
            return {}
        },
        //计算属性，获取。
        computed: {
            commConf: function () {
                console.log(this.$store.getters.commConf)
                return this.$store.getters.commConf
            }
        },
        components: {
            home,
            sdheader,
            sdfoot
        }
    }
</script>


