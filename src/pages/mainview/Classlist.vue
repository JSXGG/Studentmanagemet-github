<template>

        <div>
            <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;margin-bottom: 10px">
                <x-button style="background-color: #ff2d6a" class="btn" @click.native="clickOntheEnter('11')" type="primary">一键签到</x-button>
            </div>

              <cell     v-for="(item,index) in items " :title=item.name is-link >

                    <img  v-if="item.value==0"   @click="huang('11')"  width="40" height="40" style="margin-right: 15px;":src="icon1">
                    <img v-else    width="40" height="40"  style="margin-right: 15px;":src="icon1">
                    <img  v-if="item.record==0"  width="40" height="40" style="margin-right: 15px;":src="icon2">
                    <img  v-else   width="40"   height="40" style="margin-right: 15px;":src="icon3">


            </cell>

        </div>


</template>
<style>

</style>
<script>

//    import {
//        Cell,
//        XButton
//    } from 'vux'
//    export default {
//        data () {
//            return {
//                items: [
//                    {name: '张学友', value: '0',icon: require('../../assets/early.png')},
//                    {name: '黄家驹', value: '0',icon: require('../../assets/Atnoon.png')},
//                    {name: '谭咏麟', value: '0',icon: require('../../assets/evening.png')},
//                ],
//
//                icon0: require('../../assets/Sign_00.png'),
//                icon1: require('../../assets/Sign_01.png'),
//                icon2: require('../../assets/lx_0.png'),
//                icon3: require('../../assets/lx_1.png'),
//            }
//        },
//        components: {
//           Cell,  XButton
//
//        },methods: {
//            reloadData: function () {
//                this.$store.commit('COMM_CONF', {
//                    isBack: false,   //是否显示返回
//                    title: '学生考勤',  //显示标题内容
//                    isHeader: true,  //是否显示头部标题
//                    isFooter: true,
//                    tabBarIndex: 0
//                });
//
//            }},clickOntheEnter()
//        {
//           console.log('444');
//        }
//
//
//    }
    import Service from 'service/student'

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
                    {name: '张学友', value: '0',icon: require('../../assets/early.png')},
                    {name: '黄家驹', value: '0',icon: require('../../assets/Atnoon.png')},
                    {name: '谭咏麟', value: '0',icon: require('../../assets/evening.png')},
                ],

                icon0: require('../../assets/Sign_00.png'),
                icon1: require('../../assets/Sign_01.png'),
                icon2: require('../../assets/lx_0.png'),
                icon3: require('../../assets/lx_1.png'),


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

            },


            huang (Index) {
                console.log(Index);


            },  clickOntheEnter (Index) {
                console.log(Index);



            },

        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider, Checklist, Group, Cell, Checker, CheckerItem, Popup, Actionsheet, Toast, XButton,Tab, TabItem

        }


    }

</script>
