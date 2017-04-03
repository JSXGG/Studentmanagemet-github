<template>
    <div class="setupthe">
        <group>
            <cell :inline-desc="userName" :value="address" style="height:60px">
                <img class="img" slot="icon" style="display:block;float:right" :src="HeadImage">
            </cell>

            <cell class="cellId" style="height: 40px" v-for="(item,index) in items" :value="item.value"
                  :title="item.name" @click.native="onClick(index)"
                  is-link>
                <img slot="icon" width="25" style="display:block;margin-right:15px;" :src="item.icon">

            </cell>
        </group>
        <h1 style="text-align: center"></h1>

    </div>


</template>


<style lang="less" rel="stylesheet/less">
    @import '../../theme.less';

    .setupthe {
        margin-bottom: 55px;
    }

    .setupthe .img {
        width: 50px;
        height: 50px;
        /*<!--border-radius: 30px;-->*/
        margin-right: 15px;
        /*<!--border: 2px solid @theme-color-->*/
    }

    .cellId {

    }

</style>

<script>
    import {Cell, Group} from 'vux'
    import Service from 'service/user'
    export default {
        data () {
            return {
                items: [
                    {name: '绑定学校', icon:require('../../assets/Binding.png'), value: ''},
                    {name: '教师管理', icon:require('../../assets/Teachersmanagement.png'), value: ''},
                ],
                HeadImage: require('../../assets/Headteachers.png'),
                userName: 'weng',
                address: '广东广州'
            }
        },

        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '设置',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 2
                });
                var that = this;
                Service.getschoolinfo({}).then(function (response) {
                    if (response.data && response.data.data) {
                        that.items[0].value = '已绑定'

                    }
                    else {
                        that.items[0].value = '未绑定'
                    }
                });
            },
            onClick (index)
            {

                switch (index) {
                    case 0: {

                        if (this.items[0].value=='已绑定')
                        {
                            this.$router.push({name: 'msg',params:{state:'已绑定',Bindingschool:'广州风萧萧'}});

                        }else
                        {
                            this.$router.push({name: 'Bindingschool'});

                        }

                    }
                        break;
                    case 1: {

                        this.$router.push({name:'TeachersManagement'});

                    }
                        break;
                    default:
                }
            }
        },
         components: {
            Group,
            Cell
        }
    }
</script>
