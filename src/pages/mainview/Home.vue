<template>
    <div>

        <tab :animate="true">
            <tab-item  @on-item-click="consoleIndex(0)" selected>考勤</tab-item>
            <tab-item  @on-item-click="consoleIndex(1)"  >考勤记录</tab-item>
        </tab>
       <div v-if="value==0">


               <cell   v-for="(item,index) in items "  @click.native="onClick(index)"  :title=item.name   is-link>
                   <img slot="icon" width="30" style="display:block;margin-right:5px;" :src="item.icon">
               </cell>

       </div>
        <div v-else>

            <cell   v-for="(item,index) in items " title=' 2016-3-8 12:35:48 ' @click.native="AttendanceRecords(index)" is-link value="早托">
                <img slot="icon"  width="25" style="display:block;margin-right:5px;" :src="icon0" >
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
        XButton,Tab, TabItem
    } from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: ' 早托', value: '0',icon: require('../../assets/hz.png')},
                    {name: ' 午托', value: '0',icon: require('../../assets/hz.png')},
                    {name: ' 全托', value: '0',icon: require('../../assets/hz.png')},
                ],
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
                    tabBarIndex: 0
                });

               this.getclass(6)
            },

             getclass(classid)
            {

                console.log(classid);
                var that = this;
                Service.getstudentlist(classid).then(function (response) {
                    if (response.data && response.data.data) {

                        console.log('获取到的学生'+response.data);

                    }
                    else {

                    }
                });
            },
            consoleIndex (consoleIndex) {
                console.log(consoleIndex);
                let self = this;
                self.value = consoleIndex;

            },
            onClick (Index) {
                console.log(Index);

                this.$router.push({name: 'classlist', params: {type: '已绑定'}});


            },  AttendanceRecords (Index) {
                console.log(Index);

                this.$router.push({name: 'Attendancerecords', params: {Id: '5'}});


            },

        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider, Checklist, Group, Cell, Checker, CheckerItem, Popup, Actionsheet, Toast, XButton,Tab, TabItem

        }


    }
</script>
