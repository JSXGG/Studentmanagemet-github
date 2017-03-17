<template>
    <div class="commentontheinput">
        <group title="选择时间段">
            <datetime v-model="startDate" @on-change="change" title="开始日期"></datetime>
            <datetime v-model="endDate" @on-change="change" title="结束日期"></datetime>
            <x-input title="第几周" type="tel" v-model="week"></x-input>
        </group>
        <group title="本周工作总结">
            <x-textarea :max="1000" placeholder="请填写详本周工作总结" @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="下周计划">
            <x-textarea :max="500" placeholder="请填写下周计划" @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="问题反思与改进方案">
            <x-textarea :max="500" placeholder="请填写问题反思与改进方案" @on-focus="onEvent('focus')"
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
    import {XTextarea, Group, XButton, Datetime,Picker,XInput} from 'vux'
    export default {
        data () {
            return {
                startDate:'',
                endDate:'',
                week:'',
                items: []
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
            },
            clickOntheSave() {
                this.$vux.loading.show({
                    text: '保存中...'
                });
                setTimeout(()=> {
                    this.$vux.loading.hide();
                    this.$vux.toast.show({
                        text: '保存成功'
                    })
                    setTimeout(()=> {
                        this.$vux.toast.hide();
                    }, 1000)
                }, 1000)
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
