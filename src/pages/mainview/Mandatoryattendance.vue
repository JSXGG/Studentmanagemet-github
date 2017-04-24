<template>
    <div>
        <group style="background: white" v-for="(item,index) in items" is-link>
            <p style="height: 40px;line-height: 40px;margin-left: 10px">{{item.firstname+item.lastname}}</p>
            <Checklist v-model="item.value" :options="commonList" @on-change="ChecklistChange(item)"></Checklist>
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
    import moment from 'moment';
    import {
        Checklist,
        Group,
        Cell,
        Toast,
        XButton
    } from 'vux'
    export default {
        data () {
            return {
                moment: '',
                commonList: [
                    {key: '1', value: '离开学校'},
                    {key: '2', value: '进入进入机构'}
                ],
                items: []
            }
        },
        computed: {},
        methods: {
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
            },
            clickOntheEnter(){
                this.items.forEach(function (item) {
                    console.log('item====', item.value)
                });
                console.log('12312312==1==123123');
            },
            ChecklistChange(item){
                console.log('item==========', this.items);
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
                            item['value'] = ['1'];
                            items.push(item);
                        });
                        that.$vux.loading.hide();
                        that.GetSignListbyClassid();
                    }
                    that.items = items;
                });
            },
            //获取签到列表
            GetSignListbyClassid(){
                let Today = moment(new Date()).format('YYYY-MM-DD');
                let model = {
                    date: Today,
                    moment: this.moment
                }
                Service.getsignlistbyclassid(model).then(function (response) {
                    if (response.data && response.data.data) {
                        console.log('response========================', response);
                    }
                });
            }
        },
        components: {
            Checklist,
            Group,
            Cell,
            Toast,
            XButton
        }
    }

</script>
