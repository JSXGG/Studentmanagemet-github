<template>
    <div style="background: white">
        <cell v-for="item in items" :title="item.info | formatName" v-if="item.info">
            {{item.moment | moment}}
            <div slots="child" style="display: flex;font-size: 12px;color: #26c6da">
                <div style="padding-left: 10px">离开学校：{{item.leavetheschool | dateformat}}</div>
                <div style="padding-left: 10px">进入机构：{{item.intotheorganization | dateformat}}</div>
            </div>
        </cell>
    </div>
</template>
<style>
</style>
<script>
    import Service from 'service/user'
    import {Group, Cell, XButton} from 'vux'
    import 'filter/sdFilter'
    export default{
        data(){
            return {
                items: []
            }
        },
        methods: {
            reloadData: function () {
                let title = this.$route.params.date + '考勤';
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: title,  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 0
                });
                this.getsignlistbydate(this.$route.params.date);
            },
            getsignlistbydate(date){
                let model = {
                    date: date
                }
                var that = this;
                if (this.items.length == 0) {
                    this.$vux.loading.show({
                        text: '加载中...'
                    });
                }
                Service.getsignlistbydate(model).then(function (response) {
                    if (response.data && response.data.data) {
                        that.$vux.loading.hide();
                        that.items = response.data.data;
                    }
                });
            }
        },
        components: {
            Group, Cell, XButton
        }
    }
</script>
