<template>
    <div>
        <msg title="审核提交成功" description="请耐心等候审核,审核结果将下发到预留的手机号码!感谢您对我们的支持"  icon="waiting"></msg>
        <div style="margin-top: 30px">
            <divider>想了解更多信息,欢迎关注我们的公众号</divider>
            <br>
            <div>
                <img :src="icon" style="width: 60%;margin-left: 20%;margin-top: 15px;">
            </div>
        </div>
    </div>

</template>
<style>

</style>
<script>
    import {Msg, Divider, XButton, Qrcode} from 'vux'

    export default{
        components: {
            Msg,
            Divider,
            XButton, Qrcode
        },
        data(){
            return{
                icon: require('../../assets/Qrcode.jpg')
            }

        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '提交成功',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });
            }
        }
    }
</script>
