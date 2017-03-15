<template>
    <div class="mt-header">
        <XHeader :left-options="{showBack: commConf.isBack}">{{commConf.title}}</XHeader>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .mt-header{
        position: fixed;
        width: 100%;
        left: 0px;
        height: 46px;
        top: 0px;
        z-index: 10000;
    }
</style>
<script>
    import { XHeader } from 'vux'

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
            XHeader
        }
    }
</script>
