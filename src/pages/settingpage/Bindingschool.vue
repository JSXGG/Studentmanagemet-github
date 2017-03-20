<template>
    <div>
        <group>
            <x-input style="height: 40px" placeholder="请输入联系人姓名" title="联系人姓名"></x-input>
            <x-input style="height: 40px" placeholder="请输入联系人电话" title="联系人电话"></x-input>
            <popup-picker :title="title" :data="list1" v-model="value1">
            </popup-picker>
            <x-address :title="title2" v-model="value2" raw-value :list="addressData"
                       value-text-align="left"></x-address>
            <x-textarea placeholder="请填写详细地址"></x-textarea>
        </group>

        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button class="btn" @click.native="submit" type="primary">提交审核</x-button>
        </div>

    </div>
</template>
<style>

</style>
<script>
    import {
        PopupPicker,
        Group,
        Cell,
        Picker,
        XButton,
        Divider,
        XInput,
        XAddress,
        XTextarea,
        ChinaAddressData
    } from 'vux'

    export default{
        data(){
            return {
                list1: [['广东中山大学', '广东暨南大学', '广东理工大学', '广州风萧萧培训机构',]],
                title: "所属学校",
                title2: "学校地址",
                value1: ['广州风萧萧培训机构'],
                addressData: ChinaAddressData,
                value2: ['广东省', '广州市', '天河区']
            }

        },
        components: {
            PopupPicker,
            Group,
            Picker,
            XButton,
            Divider,
            Cell, XInput, XAddress, XTextarea
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '绑定学校',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });
            }, submit()
            {
                console.log('提交成功')
                this.$router.push({name: 'msg'});

            }


        }
    }
</script>
