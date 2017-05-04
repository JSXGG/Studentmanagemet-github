<template>
    <div>
        <tab :animate="true">
            <tab-item @on-item-click="consoleIndex(0)" selected>考勤</tab-item>
            <tab-item @on-item-click="consoleIndex(1)">考勤记录</tab-item>
        </tab>
        <div v-if="value==0">
            <cell v-for="(item,index) in items " @click.native="onClick(index)" :title=item.name is-link>
                <img slot="icon" width="30" style="display:block;margin-right:5px;" :src="item.icon">
            </cell>
        </div>
        <div v-else>
            <cell v-for="item in dateItems " :title='item' @click.native="AttendanceRecords(item)"
                  is-link>
                <img slot="icon" width="25" style="display:block;margin-right:5px;" :src="icon0">
            </cell>
        </div>
    </div>
</template>
<style>
</style>
<script>
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
        XButton, Tab, TabItem
    } from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: ' 午托', value: '0', icon: require('../../assets/hz.png')},
                    {name: ' 晚托', value: '0', icon: require('../../assets/hz.png')},
                ],
                dateItems: [],
                value: '0',
                show5: false,
                a: '',
                icon0: require('../../assets/ls.png'),
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '学生考勤',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 0,
                    showMore:false,
                });
            },
            consoleIndex (consoleIndex) {
                this.value = consoleIndex;
                if (consoleIndex == 1) {
                    this.getdatesbyclassid();
                }
            },
            getdatesbyclassid(){
                var that = this;
                Service.getdatesbyclassid().then(function (ret) {
                    if (ret && ret.data && ret.data.data) {
                        that.dateItems = ret.data.data;
                    }
                });
            },
            onClick (Index) {
                if (Index == 0) {
                    this.$router.push({name: 'Mandatoryattendance', params: {type: '1'}});
                } else {
                    this.$router.push({name: 'Mandatoryattendance', params: {type: '2'}});
                }
            },
            //进入日期记录。
            AttendanceRecords (item) {
                this.$router.push({name: 'Attendancerecords', params: {date: item}});
            }
        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider, Checklist, Group, Cell, Checker, CheckerItem, Popup, Actionsheet, Toast, XButton, Tab, TabItem
        }
    }
</script>
