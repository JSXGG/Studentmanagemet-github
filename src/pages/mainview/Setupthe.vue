<template>
    <div class="setupthe">
        <group>
            <cell  :inline-desc="userName" style="height:60px">
                <img class="img" slot="icon"  style="display:block;float:right" :src="HeadImage">
            </cell>

            <cell class="cellId" style="height: 40px" v-for="(item,index) in items":value="item.value"  :title="item.name"  @click.native="onClick(index)"
                  is-link >
                <img slot="icon" width="25" style="display:block;margin-right:15px;" :src="item.icon">

            </cell>
        </group>
        <h1 style="text-align: center"></h1>
    </div>


</template>


<style lang="less" rel="stylesheet/less">
    @import '../../theme.less';
    .setupthe{
        margin-bottom: 55px;
    }
    .setupthe .img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        margin-right:15px;
        border:1px solid @Bordercolor-color
    }
    .cellId
    {

    }

</style>


<script>
    import {Cell, Group} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: '绑定手机', icon: require('../../assets/phone_no.png'),value:'未绑定'},
                    {name: '绑定学校', icon: require('../../assets/school.png'),value:'未绑定'},
                    {name: '所在地区', icon: require('../../assets/region.png'),value:'广东广州'},
                ],
                HeadImage: require('../../assets/HeadImage.png'),
                userName:'weng'
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '设置',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex:2
                });
            },
            onClick (index)
            {
//                console.log(name)
//                if (name==='密码重置')
//                {
//                    console.log(11)
//                    this.$router.push({name: 'Passwordchange'});
//
//                }
                switch(index)
                {
                    case 0:
                    {
                        console.log(index)
                    this.$router.push({name: 'Mobilephonebinding'});

                    }
                        break;
                    case 1:
                    {
                        console.log(index)
                        this.$router.push({name: 'Bindingschool'});

                    }
                        break;
                    case 2:
                    {
                        console.log(index)

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
