<template>
    <div style="width: 100%;">
        <sdheader v-if="commConf.isHeader"></sdheader>
        <div class="app-container">
            <router-view></router-view>
        </div>
        <sdfoot v-if="commConf.isFooter"></sdfoot>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .app-container {
        position: absolute;
        margin-top: 38px;
        left: 0px;
        width: 100%;
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


