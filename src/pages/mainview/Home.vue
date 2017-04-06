<template>
    <div style="padding: 15px;">

        <button-tab>
            <button-tab-item :value="value" @on-item-click="consoleIndex(0)" selected>考勤</button-tab-item>
            <button-tab-item @on-item-click="consoleIndex(1)">考勤记录</button-tab-item>
        </button-tab>
        <div v-if="value==0" style="margin-top: 10px;">

            <divider>请选择缺勤的同学</divider>
            <group>
                <cell class="cellId" style="height: 30px" v-for="(item,index) in items"
                      :title="item.name" @click.native="onClick(index)" :value="item.record"
                      is-link>
                    <img v-if="item.value==0" slot="icon" width="25" style="display:block;margin-right:15px;"
                         :src="icon0">
                    <img v-else slot="icon" width="25" style="display:block;margin-right:15px;" :src="icon1">
                </cell>
            </group>
            <div style="margin-left: 10px;margin-right:10px;margin-bottom: 60px;margin-top: 20px">

                <actionsheet v-model="show5" :menus="menus5" @on-click-menu="click" @on-click-menu-delete="onDelete"
                             show-cancel>
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
        XButton
    } from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: '张学友', value: '0', record: ''},
                    {name: '郭富城', value: '0', record: ''},
                    {name: '刘德华', value: '0', record: ''},
                    {name: '黎明', value: '0', record: ''},
                    {name: '黄家强', value: '0', record: ''},
                    {name: '黄彦祖', value: '0', record: ''},
                    {name: '张家辉', value: '0', record: ''},
                    {name: '吴孟达', value: '0', record: ''},
                    {name: '周星驰', value: '0', record: ''},
                    {name: '黄嘉良', value: '0', record: ''},
                    {name: '黄渤', value: '0', record: ''},
                    {name: '张晓军', value: '0', record: ''},
                    {name: '陈奕迅', value: '0', record: ''},
                ],
                value: '0',
                show5: false,
                a: '',
                icon0: require('../../assets/q_0.png'),
                icon1: require('../../assets/q_1.png'),
                menus5: [
                    {
                        label: '出勤状况<br/><span style="color:#666;font-size:12px;">请选择出勤情况</span>',
                        type: 'info'
                    },
                    {
                        label: '请假',
                        type: 'primary',
                        value: '1'
                    },
                    {
                        label: '迟到',
                        type: 'warn',
                        value: '2'

                    },
                    {
                        label: '缺勤',
                        type: 'warn',
                        value: '3'
                    }]

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
                let self = this;
                self.value = consoleIndex;

            },
            onClick (Index) {
                console.log(Index);
                let self = this;
                self.show5 = true;
                this.a = Index;


            },
            onDelete(){

            },
            click (key) {
                console.log(key);
                let self = this;
                self.show5 = false;
                let Name = this.items[this.a];

                if (key != 'cancel') {
                    let value = {name: Name.name, value: '1', record: key}
                    this.items.splice(this.a, 1, value);
                } else {
                    let value = {name: Name.name, value: '0', record: ''}
                    this.items.splice(this.a, 1, value);
                }


            }, submit()
            {


            }
        },
        components: {
            ButtonTab,
            ButtonTabItem,
            Divider, Checklist, Group, Cell, Checker, CheckerItem, Popup, Actionsheet, Toast, XButton

        },


    }
</script>
