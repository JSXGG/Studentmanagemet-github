<template>
    <div>
        <div class="app-container">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .app-container {
        width: 100%;
        position: absolute;
        bottom: 60px;
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


