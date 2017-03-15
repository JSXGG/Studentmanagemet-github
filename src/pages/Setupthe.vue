<template>
    <div>
        <group >
            <cell  style="height: 40px" v-for="item in items":title=item.name  @click.native="onClick(item.name)" is-link>
                <img slot="icon" width="25" style="display:block;margin-right:5px;" :src=item.icon>
            </cell>
        </group>
        <h1 style="text-align: center"></h1>
    </div>


</template>



<style>

</style>
<script>
    import { Cell, Group } from 'vux'

    export default {
        data () {
            return {
                items: [
                    {name: '个人信息', icon:require('../assets/Personalinformation.png')},
                    {name: '密码重置', icon:require('../assets/PasswordReset.png')},
                    {name: '退出登录', icon:require('../assets/Logout.png')},
                ],
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm =>{
                vm.reloadData();
            });
        },
        methods:{
            reloadData:function (){
                this.$store.commit('COMM_CONF',{
                    isBack: false,   //是否显示返回
                    title: '设置',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true
                });
            }
        },
            components: {
                Group,
                Cell
            },
            methods: {
                onClick (name)
                {
                    console.log(name)

                }
            }
    }
</script>
