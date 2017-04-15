<template>
    <div>
        <div style="width: 100%;text-align: center;margin-top: 100px">点击微信授权登录</div>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 50%;">
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
                let code = this.$route.query.code;
                if (code && code.length > 0) {
                    this.weixinLogin(code);
                }
            },
            weixinLogin(code){
                var that = this;
                let model = {
                    code: code,
                    type: 'weixin'
                }
                Service.Login(model).then(function (response) {
                    if (response == '1') {
                        that.$router.push({name: 'Home'});
                    }
                })
            },
            /*手动登录*/
            clickOntheLogin(){
                let model = {
                    url: window.location.href
                }
                Service.GetWeiXinLoginUrl(model).then(function (URL) {
                    if (URL) {
                        window.location.href = URL;
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
