<template>
    <div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return {}
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '学习报告',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 0
                });
            },
        },
        components: {}
    }
</script>
