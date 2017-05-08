<template>
    <div class="commentontheinput">
        <group title="选择时间段">
            <datetime v-model="model.btime" @on-change="change" title="开始日期"></datetime>
            <datetime v-model="model.etime" @on-change="change" title="结束日期"></datetime>
        </group>
        <group title="工作感悟与自我认知总结 ">
            <x-textarea v-model="model.workfeeling" :max="1000" placeholder="请填写详本周工作总结"
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="自我存在的问题与改进措施">
            <x-textarea v-model="model.problem" :max="500" placeholder="请填写下周计划" @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="下个月的工作或成长计划">
            <x-textarea v-model="model.nextmonthplan" :max="500" placeholder="请填写问题反思与改进方案"
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <div style="margin: 10px 10px 50px 10px">
            <x-button type="primary" @click.native="clickOntheSave">保存</x-button>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
</style>
<script>
    import {XTextarea, Group, XButton, Datetime, Picker, XInput} from 'vux'
    import Service from 'service/user'

    export default {
        data () {
            return {
                recordid: '',
                items: [],
                model: {
                    btime: '',
                    etime: '',
                    workfeeling: '',
                    problem: '',
                    nextmonthplan: '',
                }
            }
        },
        methods: {
            reloadData: function () {
                this.recordid = this.$route.params.recordid;
                var title = ''
                if (this.recordid == 0) {
                    title = '添加工作总结'
                }
                else {
                    title = '编辑总结'
                }
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: title,
                    isHeader: true,
                    isFooter: false,
                });
                if (this.recordid && this.recordid != 0) {
                    this.getworkreportbyid(this.recordid);
                }
            },
            clickOntheSave() {
                this.$vux.loading.show({
                    text: '保存中...'
                });
                var that = this;
                if (this.recordid && this.recordid != 0) {
                    this.model.recordid = this.recordid;
                }
                Service.addtheeditorworkreport(this.model).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.$vux.loading.hide();
                        that.$vux.toast.show({
                            text: '保存成功'
                        })
                    }
                });
            },
            getworkreportbyid(recordid){
                var that = this;
                Service.getworkreportbyid(recordid).then(function (response) {
                    if (response.data && response.data.data) {
                        for (let key in that.model) {
                            that.model[key] = response.data.data[key]
                        }
                    }
                });
            },
            change (val) {
                console.log('change', val)
            }
        },
        components: {
            XTextarea,
            Group,
            XButton,
            Datetime,
            Picker,
            XInput
        }
    }
</script>
