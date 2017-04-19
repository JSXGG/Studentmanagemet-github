<template>
    <div class="commentontheinput">
        <group title="选择时间段">
            <datetime v-model="model.btime" @on-change="change" title="开始日期"></datetime>
            <datetime v-model="model.etime" @on-change="change" title="结束日期"></datetime>
            <x-input title="第几周" type="tel" v-model="model.week"></x-input>
        </group>
        <group title="本周工作总结">
            <x-textarea v-model="model.weekworksummary" :max="1000" placeholder="请填写详本周工作总结"
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="下周计划">
            <x-textarea v-model="model.nextworkplan" :max="500" placeholder="请填写下周计划" @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="问题反思与改进方案">
            <x-textarea v-model="model.problemsreflect" :max="500" placeholder="请填写问题反思与改进方案"
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
    import Service from 'service/student'

    export default {
        data () {
            return {
                startDate: '',
                endDate: '',
                week: '',
                recordid: '',
                items: [],
                model: {
                    btime: '',
                    etime: '',
                    week: '',
                    semester: '',
                    weekworksummary: '',
                    nextworkplan: '',
                    problemsreflect: '',
                    studentid: ''
                }
            }
        },
        methods: {
            reloadData: function () {
                var title = this.$route.params.name;
                console.log();
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: title,
                    isHeader: true,
                    isFooter: false,
                });
                this.model.studentid = this.$route.params.studentid;
                this.recordid = this.$route.params.recordid;
                if (this.recordid) {
                    this.getcommentbyrecordid(this.recordid);
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
                Service.addstudentcomment(this.model).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.$vux.loading.hide();
                        that.$vux.toast.show({
                            text: '保存成功'
                        })
                    }
                });
            },
            getcommentbyrecordid(recordid){
                var that = this;
                Service.getcommentbyrecordid(recordid).then(function (response) {
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
