<template>
    <div>

        <msg v-if="Bindingschoolstate==1" title="学校绑定成功" :description="'当前绑定的学校:'+Bindingschool"  icon="success">
        </msg>
        <x-button  v-if="Bindingschoolstate==1" style="width: 90%" @click.native="changeschool">更换学校</x-button>
        <msg v-if="Bindingschoolstate!=1" title="提交审核成功" description="感谢您的支持,请耐心等候审核结果。" icon="waiting"></msg>

        <div style="margin-top: 30px">
            <divider>想了解更多信息,欢迎关注我们的公众号</divider>
            <br>
            <div>
                <img :src="icon" style="width: 60%;margin-left: 20%;margin-top: 0px;margin-bottom: 20px">
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
        computed: {
            Bindingschoolstate(){
                if(this.$route.params.state=='已绑定')
                {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        },
        data(){
            return{
                icon: require('../../assets/Qrcode.jpg'),
                state:this.$route.params.state,
                Bindingschool:this.$route.params.Bindingschool
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '学校绑定',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });



            },changeschool () {

                this.$router.push({name: 'Bindingschool'});

            }
        }
    }
</script>
