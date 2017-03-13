<template>
    <div>

        我是主页
    </div>
</template>


<style>

</style>
<script>
    export default {
        data () {
            return {}
        },
        beforeRouteEnter (to, from, next) {
            next(vm =>{
                vm.reloadData();
            });
        },
        methods:{
            reloadData:function (){
                this.$store.commit('COMM_CONF',{
                    isBack: false,   //是否显示返回
                    title: '主页',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true
                });
            }
        }
    }
</script>
