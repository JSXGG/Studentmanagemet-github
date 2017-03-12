<template>
    <div>
        <mt-tabbar class="mt-tabbar" fixed v-model="selected">
            <mt-tab-item id="1">
                <img slot="icon" src="../../assets/home.png">
                主页
            </mt-tab-item>
            <mt-tab-item id="2">
                <img slot="icon" src="../../assets/home.png">
                设置
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .mt-tabbar {
        height: 55px;
    }
</style>
<script>
    export default {
        data () {
            return {
                selected: false
            }
        }
    }
</script>
