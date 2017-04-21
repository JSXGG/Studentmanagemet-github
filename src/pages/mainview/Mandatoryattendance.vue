<template>

        <div>
            <!--<div style="margin-left: 10px;margin-right:10px;margin-top: 20px;margin-bottom: 10px">-->
                <!--<x-button style="background-color: #ff2d6a" class="btn" @click.native="clickOntheEnter('11')" type="primary">一键签到</x-button>-->
            <!--</div>-->

              <cell v-for="(item,index) in items "  style="height: 30px; ":title=item.firstname+item.lastname is-link >


                    <img slot="icon" width="30" style="display:block;margin-right:5px;" :src="iconxs">

                    <img  v-if="item.value==0"   @click="Signin1(index)"  width="30" height="30" style="margin-right: 20px;margin-top: 8px":src="icon1">
                    <img v-else   @click="Cancelthecheckin1(index)" width="30" height="30"  style="margin-right: 10px;margin-top: 8px":src="icon1">
                    <img  v-if="item.record==0"  @click="Signin1(index)"  width="30" height="30" style="margin-right: 10px;margin-top: 8px":src="icon2">
                    <img  v-else   width="30" @click="Cancelthecheckin1(index)"  height="30" style="margin-right: 15px;margin-top: 8px":src="icon3">


            </cell>

        </div>


</template>
<style>

</style>
<script>
    import Service from 'service/user'

    import {
        ButtonTab,
        ButtonTabItem,
        Divider,
        Checklist,
        Group,
        Cell,
        Checker,
        CheckerItem,
        Popup,
        Actionsheet,
        Toast,
        XButton,Tab, TabItem
    } from 'vux'
    export default {
        data () {
            return {
                items: [
//                    {name: '张学友', value: '0',icon: require('../../assets/selected.png')},
//                    {name: '黄家驹', value: '0',icon: require('../../assets/uncheck.png')},
//                    {name: '谭咏麟', value: '0',icon: require('../../assets/selected.png')},
                ],

                icon0: require('../../assets/selected.png'),
                icon1: require('../../assets/selected.png'),
                icon2: require('../../assets/selected.png'),
                icon3: require('../../assets/selected.png'),
                iconxs: require('../../assets/students.png'),


            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '学生考勤',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 0
                });
                this.getAccessclass(this.$route.params.Id);

            }, getAccessclass(Id){

                var that = this;
                Service.getstudentlistbymoment(Id).then(function (response) {
                    console.log(response.data.data);
                    that.items=response.data.data;
                    var  a =that.items[0];
                    console.log(a.address);

                });
            },
            /*签到1*/
            Signin1 (Index) {
                console.log('签到1'+Index);

            },
            /*取消签到1*/
            Cancelthecheckin1 (Index) {
                console.log('取消签到1'+Index);

            },
            /*签到2*/
            Signin2 (Index) {
                console.log('签到2'+Index);


            },
            /*取消签到2*/
            Cancelthecheckin2 (Index) {
                console.log('取消签到2'+Index);

            },


        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider, Checklist, Group, Cell, Checker, CheckerItem, Popup, Actionsheet, Toast, XButton,Tab, TabItem

        }


    }

</script>
