<template>
    <div style="padding: 15px;">

        <button-tab>
            <button-tab-item   :value="value" @on-item-click="consoleIndex(0)" selected>考勤</button-tab-item>
            <button-tab-item    @on-item-click="consoleIndex(1)">考勤记录</button-tab-item>
        </button-tab>
        <div v-if="value==0" style="margin-top: 10px;" >

            <divider>请选择缺勤的同学</divider>

                <group >
                    <cell class="cellId" style="height: 30px" v-for="(item,index) in items"
                          :title="item.name" @click.native="onClick(index)" :value="item.record"
                          is-link>
                        <img  v-if="item.value==0" slot="icon" width="25" style="display:block;margin-right:15px;" :src="icon0">
                        <img  v-else  slot="icon" width="25" style="display:block;margin-right:15px;" :src="icon1">
                    </cell>
               </group>
            <div style="margin-left: 10px;margin-right:10px;margin-bottom: 60px;margin-top: 20px">

                <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click(1)">
                </actionsheet>
                <x-button class="btn" @click.native="submit" type="primary">上传数据</x-button>

            </div>

        </div>

        <div v-else>

        </div>
    </div>
</template>

<style>

</style>
<script>
    import { ButtonTab, ButtonTabItem, Divider, Checklist,Group,Cell,Checker,CheckerItem,Popup, Actionsheet,Toast,XButton} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: '张学友', value: '0',record:'出勤'},
                    {name: '郭富城', value: '1',record:'缺勤'},
                    {name: '刘德华', value: '1',record:'缺勤'},
                    {name: '黎明',  value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},
                    {name: '黄家驹', value: '1',record:'缺勤'},


                ],value: 0,
                icon0:require('../../assets/q_0.png'),
                icon1:require('../../assets/q_1.png'),
                menus5: [{
                    label: '出勤状况<br/><span style="color:#666;font-size:12px;">请选择出勤情况</span>',
                    type: 'info'
                }, {
                    label: '请假',
                    type: 'primary',
                    value: 'primary'
                }, {
                    label: '迟到',
                    type: 'warn',
                    value: 'primary'

                }, {
                    label: '缺勤',
                    type: 'warn',
                    value: 'primary'

                }],
                show5: false,

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
            },
            consoleIndex (consoleIndex) {
                console.log(consoleIndex);
                this.value=consoleIndex;

            },
            onClick (Index) {

                this.show5="true"

            },
            click (key) {
                console.log(key)
                this.show5="false"

            },
        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider,Checklist,Group,Cell,Checker,CheckerItem,Popup, Actionsheet,Toast,XButton

        },



}
</script>
