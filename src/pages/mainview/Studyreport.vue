<template>
    <div style="padding-bottom: 30px">
        <group title="爱美乐习惯">
            <Cell :title="item.title" v-for="item in loveItems">
                <slot name="child">
                    <selector  :name="item.title" :options="selectorOptions" v-model="item.value"></selector>
                </slot>
            </Cell>

        </group>

        <group title="备注">
            <x-textarea v-model="remark" :max="500" placeholder="请填写备注"
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <group title="课堂反馈">
            <cell title="课堂表现" is-link></cell>
        </group>
        <group title="上课内容">
            <x-textarea placeholder="请填写上课内容"></x-textarea>
        </group>
        <group title="教学要点">
            <x-textarea placeholder="请填写教学要点"></x-textarea>
        </group>
        <group title="掌握程度">
            <x-textarea placeholder="请填写掌握程度"></x-textarea>
        </group>
        <group title="作业点评">
            <x-textarea placeholder="请填写作业点评"></x-textarea>
        </group>
        <group title="解决方案">
            <x-textarea placeholder="请填写解决方案"></x-textarea>
        </group>
        <group title="家长建议">
            <x-textarea placeholder="请填写家长建议"></x-textarea>
        </group>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;margin-bottom: 10px">
            <x-button @click.native="clickOntheEnter" type="primary">保存</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {Group, Cell, XButton, XTextarea, XInput, Selector, Flexbox, FlexboxItem} from 'vux'
    export default{
        data(){
            return {
                loveItems: [
                    {title: '离校自觉找老师报到，见面招呼不能少', value: 1},
                    {title: '文明列队，友爱谦让，靠右慢行不打闹', value: 2},
                    {title: '进门有序，礼貌问好', value: 3},
                    {title: '讲究卫生，爱惜物品', value: 3},
                    {title: '安静用餐，珍惜粮食，餐具分类要做好', value: 3},
                    {title: '午睡安静，养好精神', value: 3},
                    {title: '床铺叠好，有序不乱', value: 3},
                    {title: '依序取食营养水果点心', value: 3},
                    {title: '列队回校，快乐学习', value: 3}
                ],
                selectorOptions: [
                    {key: '1', value: '优秀'},
                    {key: '2', value: '良好'},
                    {key: '3', value: '一般'}
                ],
                remark: null
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '学习报告',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 0
                });
            },
            clickOntheEnter(){
                console.log('123123123');
            }
        },
        components: {Group, Cell, XButton, XTextarea, XInput, Selector, Flexbox, FlexboxItem}
    }
</script>
