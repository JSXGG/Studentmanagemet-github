<template>
    <div>
        <group>
            <x-input type="password" placeholder="请输入旧的密码" title="旧 密 码" v-model="value1"></x-input>
            <x-input type="password" placeholder="请输入新的密码" title="新 密 码" v-model="value2"></x-input>
            <x-input type="password" placeholder="请再次输入新的密码" title="确认新密码" v-model="value3"></x-input>
        </group>

        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button type="primary"style="background-color: #f06292" >确定修改</x-button>

        </div>
    </div>
</template>
<style>

</style>
<script>
    import { XInput,Group,XButton } from 'vux'

    export default{
        data(){
            return{
                msg:'hello vue',
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
                        title: '密码修改',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });
            }
        },
        components: {
            XInput,
            Group,
            XButton
        }
    }
</script>
