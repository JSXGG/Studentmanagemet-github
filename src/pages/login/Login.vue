<template>
    <div>
        <group title="账号">
            <x-input name="username" placeholder="请输入账号"></x-input>
        </group>
        <group title="密码">
            <x-input name="mobile" placeholder="请输入密码" keyboard="number"
                     type="password"></x-input>
        </group>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button class="btn" @click.native="clickOntheLogin" type="primary">登录</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {XInput, Group, XButton, Cell} from 'vux'
    import Service from 'service/login'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '登录',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                });
            },
            clickOntheLogin(){
                this.$vux.loading.show({
                    text: '登录中'
                });
                var that = this;
                Service.Login({}).then(function (response) {
                    if (response == '1') {
                        that.$router.push({name: 'Home'});
                    }
                })
            }
        },
        components: {
            XInput,
            Group,
            XButton,
            Cell
        }
    }
</script>
