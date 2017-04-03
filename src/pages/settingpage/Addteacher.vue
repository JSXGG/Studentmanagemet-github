<template>
    <div >
        <group>
            <x-input v-model="wqq" style="height: 30px" placeholder="请输入老师的姓" title="   姓:"></x-input>
            <x-input v-model="wqq" style="height: 30px" placeholder="请输入老师的名" title="   名:"></x-input>
            <x-input v-model="wqq" style="height: 30px" placeholder="请输入老师的联系电话" title="联系电话:"></x-input>

            <popup-picker  :title="title1"  :data="list1"  v-model="value1" placeholder="请选择一个系" ></popup-picker>
            <popup-picker  :title="title2" :data="list2"  v-model="value2" placeholder="请选择一个科目" ></popup-picker>

        </group>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button class="btn" @click.native="submit" type="primary">保存</x-button>
        </div>
    </div>

</template>
<style>

</style>
<script>
    import {
        Group,
        Cell,
        Picker,
        XButton,
        XInput,PopupPicker
    } from 'vux'


    export default
    {

        data()
        {
            return {
                list1: [['管理系', '经贸系', '旅游系', '计算机系']],
                list2: [['数学老师', '语文老师', '英语老师', '音乐老师']],

                title1: "所属系部:",
                title2: "科    目:",

                value1: [],
                value2: [],


            }
        },
        components: {
        Group,
        Cell,
        Picker,
        XButton,
        XInput,PopupPicker
    },
        methods: {
        reloadData: function ()
        {
            this.$store.commit('COMM_CONF',
                {
                    isBack: true,   //是否显示返回
                    title: '添加教师',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 2
                });


        },submit()
            {
                console.log('点击了保存');
            }
    }
    }
</script>
