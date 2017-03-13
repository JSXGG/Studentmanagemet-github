<template>
    <div>
        <mt-header class="mt-header" fixed :title=commConf.title>
        </mt-header>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .mt-header{
        height: 55px;
    }
</style>
<script>
    export default {
        data () {
            return {}
        },
        //计算属性，获取。
        computed: {
            commConf: function () {
                return this.$store.getters.commConf
            }
        }
    }
</script>
