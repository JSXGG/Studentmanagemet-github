<template>
    <div>
        <group>
            <x-input v-model="infoData.contact" style="height: 40px" placeholder="请输入联系人姓名" title="联系人姓名"></x-input>
            <x-input v-model="infoData.tel" style="height: 40px" placeholder="请输入联系人电话" title="联系人电话"></x-input>
            <x-input v-model="infoData.name" style="height: 40px" placeholder="请输入学校全称" title="所属 学校"></x-input>
            <x-address :title="title2" v-model="addressValue" placeholder="请选择学校地址" raw-value :list="addressData"
                       value-text-align="left"></x-address>
            <x-textarea v-model="infoData.detailedaddress" placeholder="请填写详细地址"></x-textarea>
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
    import Service from 'service/user'
    export default{
        data(){
            return {
                list1: [['广东中山大学', '广东暨南大学', '广东理工大学', '广州风萧萧培训机构']],
                title: "所属学校",
                title2: "学校地址",
                addressData: ChinaAddressData,
                infoData: {},
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
        //计算属性。
        computed: {
            //获取地区的值。类似这样的格式 440000|440100|440118
            addressValue(){
                if(this.infoData.address){
                    let code = this.infoData.address.split('|');
                    if(code.length>0){
                        return code;
                    }
                }
                else {
                    return ['广东省','广州市','天河区'];
                }
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '绑定学校',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 2
                });
                this.getschoolinfo();
            },
            getschoolinfo() {
                var that = this;
                Service.getschoolinfo({}).then(function (response) {
                    if (response.data && response.data.data) {
                        let info = response.data.data;
                        that.infoData = info;
                    }
                })
            },
            submit(){
                console.log(this.addressValue);
                let that = this;
                Service.gettecherinfobyid({teacherid: '1'}).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.getschoolinfo();
                    }
                });

//                this.$router.push({name: 'msg'});
            }
        }
    }
</script>
