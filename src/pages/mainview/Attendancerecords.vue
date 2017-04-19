<template>
    <div>
         <cell  style="height: 30px" v-for="(item,index) in items "  @click.native="onClick(index)"  :title=item.name is-link>



             <img  v-if="item.value==0"   width="30" height="30" style="margin-right: 10px;":src="icon1">
             <img v-else  width="30" height="30" style="margin-right: 10px;":src="icon1">

             <img  v-if="item.record==0"  width="30" height="30" style="margin-right: 10px;":src="icon2">
             <img  v-else   width="30" height="30" style="margin-right: 10px;":src="icon3">


         </cell>

    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import {Group, Cell,XButton} from 'vux'

    export default{
        data(){
            return{
                msg:'hello vue',
                items: [
                    {name: '张学友', value: '0',icon: require('../../assets/early.png')},
                    {name: '黄家驹', value: '0',icon: require('../../assets/Atnoon.png')},
                    {name: '谭咏麟', value: '0',icon: require('../../assets/evening.png')},
                ],
                icon0: require('../../assets/Sign_00.png'),
                icon1: require('../../assets/Sign_01.png'),
                icon2: require('../../assets/lx_0.png'),
                icon3: require('../../assets/lx_1.png'),
            }
        },  methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '考勤记录',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 0
                });

            }}, components:
           {
            Group, Cell,XButton

           }

    }
</script>
