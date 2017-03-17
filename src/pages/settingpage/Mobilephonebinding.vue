<template>
    <div class="passwordchange">
        <group>
            <x-input   placeholder="请输入手机号码" title="手机号码" v-model="value1"></x-input>

        </group>

        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button  class="btn" @click.native="Code" type="primary">下一步</x-button>

        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../theme.less';
    .passwordchange .btn {
        background-color: @theme-color
    }
</style>
<script>
    import {XInput, Group, XButton} from 'vux'

    export default{
        data(){
            return {
                msg: 'hello vue',
                value1: '',
                value2: '',
                value3: ''
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '绑定手机',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });
            },
            Code()
            {
                this.$router.push({name: 'Phoneverification'});
                console.log('1211')

            }
        },
        components: {
            XInput,
            Group,
            XButton
        },

    }
</script>
