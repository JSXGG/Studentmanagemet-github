<template>
    <div>
        <group>
            <x-input v-model="info.contact" style="height: 40px" placeholder="请输入联系人姓名" title="联系人姓名"></x-input>
            <x-input v-model="info.tel" style="height: 40px" placeholder="请输入联系人电话" title="联系人电话"></x-input>
            <x-input v-model="info.name" style="height: 40px" placeholder="请输入学校全称" title="所属 学校"></x-input>
            <x-address :title="title2" placeholder="请选择学校地址" v-model="info.address" raw-value :list="addressData"
                       value-text-align="left"
            >
            </x-address>
            <x-textarea v-model="info.detailedaddress" placeholder="请填写详细地址"></x-textarea>
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
                list1: [['广东中山大学', '广东暨南大学', '广东理工大学', '广州风萧萧培训机构',]],
                title: "所属学校",
                title2: "学校地址",
                addressData: ChinaAddressData,
                value2: ['广东省', '广州市', '天河区'],

                info: {
                    contact: '',
                    tel: '',
                    name: '',
                    address: [],
                    detailedaddress: '',
                }
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
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '绑定学校',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                    tabBarIndex: 2
                });
                this.getschoolinfo();
            },
            getschoolinfo:function () {
                let that = this;

                Service.getschoolinfo({}).then(function (response) {
                    if (response.data && response.data.data) {

                        that.info = response.data.data;
                        that.info.contact = response.data.data.contact;
                        that.info.tel = response.data.data.tel;
                        that.info.name = response.data.data.name;
                        that.info.detailedaddress = response.data.data.detailedaddress;
                        that.info.contact = response.data.data.contact;
                        var array=response.data.data.address;
                        var address=array.split(" ");
                        that.info.address=address;
                        console.log(that.info.address);


                    }
                })
            },
            submit(){


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
