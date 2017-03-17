<template>
    <div class="commentontheinput">
        <group title="本周工作总结">
            <x-textarea :max="500" :height="200" placeholder="请填写详本周工作总结" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="下周计划">
            <x-textarea :max="500" :height="200" placeholder="请填写下周计划" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="问题反思与改进方案">
            <x-textarea :max="500" :height="200" placeholder="请填写问题反思与改进方案" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <div style="margin: 10px">
            <x-button type="primary" @click.native="clickOntheSave">保存</x-button>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">

</style>
<script>
    import { XTextarea, Group, XButton } from 'vux'
    export default {
        data () {
            return {
                items: []
            }
        },
        mountes(){
            this.reloadData();
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: '添加点评',
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
            }
        },
        components: {
            XTextarea,
            Group,
            XButton
        }
    }
</script>
