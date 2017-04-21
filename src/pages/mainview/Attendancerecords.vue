<template>
    <div>
        <cell style="height: 25px" v-for="(item,index) in items " @click.native="onClick(index)" :title=item.name
              is-link>
            <img slot="icon" width="30" style="display:block;margin-right:5px;" :src="iconxs">
            <img v-if="item.value==0" width="25" height="25" style="margin-right: 10px;margin-top: 8px" :src="icon1">
            <img v-else width="25" height="25" style="margin-right: 10px;margin-top: 8px" :src="icon1">
            <img v-if="item.record==0" width="25" height="25" style="margin-right: 15px;margin-top: 8px" :src="icon2">
            <img v-else width="25" height="25" style="margin-right: 10px;margin-top: 8px" :src="icon3">


        </cell>

    </div>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    import {Group, Cell, XButton} from 'vux'

    export default{
        data(){
            return {
                msg: 'hello vue',
                items: [
                    {name: '张学友', value: '0', icon: require('../../assets/selected.png')},
                    {name: '黄家驹', value: '0', icon: require('../../assets/uncheck.png')},
                    {name: '谭咏麟', value: '0', icon: require('../../assets/uncheck.png')},
                    {name: '张学友', value: '0', icon: require('../../assets/selected.png')},
                ],
                icon0: require('../../assets/uncheck.png'),
                icon1: require('../../assets/uncheck.png'),
                icon2: require('../../assets/uncheck.png'),
                icon3: require('../../assets/selected.png'),
                iconxs: require('../../assets/students.png'),

            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '考勤记录',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 0
                });
            },

        },
        components: {
            Group, Cell, XButton

        },

    }
</script>
