<template>
    <div class="home">
        <group>
            <cell style="height: 40px" v-for="item in items" :title="item.name" :value="item.value"></cell>
        </group>
    </div>
</template>
<style>
</style>
<script>
    import {Cell, Group} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: '班级', value: '二年级一班'},
                    {name: '班级', value: '三年级一班'},
                    {name: '班级', value: '四年级一班'},
                    {name: '班级', value: '五年级一班'}
                ]
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.reloadData();
            });
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '主页',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true
                });
            }
        },
        components: {
            Cell,
            Group
        }
    }
</script>
