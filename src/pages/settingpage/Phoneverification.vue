<template>
    <div>
        <div>
            <divider>短信验证已发送,请填写验证码</divider>
        </div>

        <group>
            <x-input readonly="readonly" style="height: 40px;color: #666666 "  title="手机号码" v-model="value2"></x-input>
            <x-input style="height: 40px"  placeholder="请输入验证码" title=" 验证码" v-model="value1"></x-input>
        </group>

        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button  class="btn" @click.native="submit" type="primary">提交</x-button>
        </div>

    </div>
</template>
<style>

</style>
<script>

    import {Cell, Group,XInput,Divider,XButton} from 'vux'

    export default{
        data(){
            return {
                msg: 'hello vue',
                value1:'',
                value2:'13660641950',
                Phonetitle:'验证码'
            }
        },
        methods: {
            reloadData: function ()
            {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '验证手机',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });
            }
        },components: {
            Group,
            Cell,
            XInput,
            Divider,
            XButton
        }
    }
</script>
