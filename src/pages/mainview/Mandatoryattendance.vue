<template>
    <div>
        <group>
            <selector title="当前班级" :options="selectorOptions" v-model="currentClass"></selector>
        </group>
        <group style="background: white" v-for="item in items" is-link>
            <flexbox>
                <flexbox-item :span="0.4">
                    <p style="height: 40px;line-height: 40px;margin-left: 10px">{{item.firstname+item.lastname}}</p>
                </flexbox-item>
                <flexbox-item :span="0.3">
                    <Checklist v-model="item.key1" :options="commonList1">
                    </Checklist>
                </flexbox-item>
                <flexbox-item :span="0.3">
                    <Checklist v-model="item.key2" :options="commonList2">
                    </Checklist>
                </flexbox-item>
            </flexbox>
        </group>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;margin-bottom: 10px">
            <x-button @click.native="clickOntheEnter" type="primary">保存</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import Service from 'service/user'
    import myclassService from 'service/myclass'

    import moment from 'moment';
    import {Checklist, Group, Cell, Toast, XButton, Flexbox, FlexboxItem, Selector} from 'vux'
    export default {
        data () {
            return {
                moment: '',
                commonList1: [
                    {key: '1', value: '离校'},
                ],
                commonList2: [
                    {key: '1', value: '到达'}
                ],
                items: [],
                allItems: [],
                selectorOptions: [
                    {key: '-1', value: '全部'}
                ],
                currentClass: '-1'
            }
        },
        watch: {
            currentClass(val){
                this.filterClassByID(val);
            }
        },
        computed: {},
        methods: {
            filterClassByID(value){
                if (value == -1) {
                    this.items = this.allItems;
                }
                else {
                    let Items = [];
                    this.allItems.forEach(function (item) {
                        if (item.classid == value) {
                            Items.push(item);
                        }
                    });
                    this.items = Items;
                }
            },
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '学生考勤',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 0
                });
                this.moment = this.$route.params.type;
                this.getAccessclass(this.moment);
                this.getmyclasslist();
            },
            swichClass(){
                console.log('切换班级')
            },
            clickOntheEnter(){
                let model = [];
                let that = this;
                //1进入机构，2离开学校，3全部签到。'-1'取消签到。
                this.items.forEach(function (item) {
                    let signintype = '';
                    if (item.key1.length > 0 && item.key2.length > 0) {
                        signintype = '3'
                    }
                    else if (item.key1.length > 0) {
                        signintype = '2'
                    }
                    else if (item.key2.length > 0) {
                        signintype = '1'
                    }
                    else {
                        signintype = '-1';
                    }
                    let Obj = {
                        studentid: item.id,
                        moment: that.moment,
                        signintype: signintype
                    };
                    model.push(Obj);
                });
                let Data = {
                    data: JSON.stringify(model)
                }
                this.batchstudentsignin(Data);
            },
            //签到
            batchstudentsignin(model){
                let that = this;
                this.$vux.loading.show({
                    text: '正在保存...'
                });
                Service.batchstudentsignin(model).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.$vux.loading.hide();
                        that.$vux.toast.show({
                            text: '保存成功'
                        })
                    }
                    console.log(response);
                });
            },
            getmyclasslist(){
                var items = [];
                var that = this;
                myclassService.getmyclasslist().then(function (response) {
                    if (response.data && response.data.data) {
                        let array = response.data.data;
                        let allItem = {key: '-1', value: '全部'};
                        items.push(allItem);
                        array.forEach(function (item) {
                            let Obj = {
                                key: item.id,
                                value: item.name
                            }
                            items.push(Obj);
                        });
                        that.selectorOptions = items;
                    }
                });
            },
            getAccessclass(Id){
                var that = this;
                var items = [];
                this.$vux.loading.show({
                    text: '加载中...'
                });
                Service.getstudentlistbymoment(Id).then(function (response) {
                    if (response.data && response.data.data) {
                        let array = response.data.data;
                        array.forEach(function (item) {
                            item['key1'] = [];
                            item['key2'] = [];
                            items.push(item);
                        });
                        that.$vux.loading.hide();
                        that.GetSignListbyClassid();
                    }
                    that.allItems = items;
                    that.filterClassByID(that.currentClass);
                });
            },
            //获取签到列表
            GetSignListbyClassid(){
                let Today = moment(new Date()).format('YYYY-MM-DD');
                let model = {
                    date: Today,
                    moment: this.moment
                }
                var that = this;
                Service.getsignlistbyclassid(model).then(function (response) {
                    if (response.data && response.data.data) {
                        let array = response.data.data;
                        array.forEach(function (item1) {
                            that.items.forEach(function (item2) {
                                if (item2.id == item1.studentid) {
                                    let into = item1.intotheorganization ? String(item1.intotheorganization) : '';
                                    let lev = item1.leavetheschool ? String(item1.leavetheschool) : ''
                                    if (lev.length > 0 && into.length > 0) {
                                        item2['key1'] = ['1'];
                                        item2['key2'] = ['1'];
                                    }
                                    else if (lev.length > 0) {
                                        item2['key1'] = ['1'];
                                    }
                                    else if (into.length > 0) {
                                        item2['key2'] = ['1'];
                                    }
                                    else {
                                        item2['key1'] = [];
                                        item2['key2'] = [];
                                    }
                                }
                            });
                        });
                    }
                });
            }
        },
        components: {
            Checklist,
            Group,
            Cell,
            Toast,
            XButton,
            Flexbox,
            FlexboxItem,
            Selector
        }
    }

</script>
