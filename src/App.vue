<template>
    <div style="width: 100%;height: 100%">
        <sdheader v-if="commConf.isHeader"></sdheader>
        <div class="app-container">
            <router-view></router-view>
        </div>
        <!--<div class="theboothbar-foot"></div>-->
        <sdfoot v-if="commConf.isFooter"></sdfoot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../node_modules/vux/src/styles/reset.less';
    @import '../node_modules/vux/src/styles/1px.less';
    @import '../node_modules/vux/src/styles/tap.less';
    .app-container {
        width: 100%;
        position: absolute;
        margin-top: 46px;
    }
</style>
<script>
    import home from './pages/mainview/Home.vue';
    import sdheader from './components/Header/SDheader.vue'
    import sdfoot from './components/Foot/SDfoot.vue'
    export default {
        data () {
            return {}
        },
        //计算属性，获取。
        computed: {
            commConf: function () {
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


