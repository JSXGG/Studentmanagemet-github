<template>
    <div class="setupthe">
        <group>
            <cell :inline-desc="nickname" :value="address" style="height:60px">
                <img class="img" slot="icon" style="display:block;float:right" :src="headimgurl">
            </cell>

            <cell class="cellId" v-for="(item,index) in items" :value="item.value"
                  :title="item.name">
                <img slot="icon" width="25" style="display:block;margin-right:15px;" :src="item.icon">
            </cell>
            <cell @click.native="clickOntheConclusion" title="工作总结" is-link>
                <img slot="icon" width="25" style="display:block;margin-right:15px;" src="../../assets/report.png">
            </cell>
        </group>
        <h1 style="text-align: center"></h1>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../less/theme.less';

    .setupthe {
        margin-bottom: 55px;
    }

    .setupthe .img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }
</style>

<script>
    import {Cell, Group} from 'vux'
    import Service from 'service/user'
    import sessionstorge from 'service/sdSessionStorge'
    export default {
        data () {
            return {
                items: [
                    {name: '绑定学校', icon: require('../../assets/Binding.png'), value: ''},
                ],
                userInfo: sessionstorge.getUserInfo()
            }
        },
        computed: {
            nickname(){
                return this.userInfo.nickname ? this.userInfo.nickname : ''
            },
            headimgurl(){
                return this.userInfo.headimgurl ? this.userInfo.headimgurl : require('../../assets/Headteachers.png')
            },
            address(){
                return this.userInfo.province ? this.userInfo.province : '' + this.userInfo.city ? this.userInfo.city : ''
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
                        that.items[0].value = response.data.data.name;
                    }
                    else {
                        that.items[0].value = '未绑定'
                    }
                });
            },
            //工作总结
            clickOntheConclusion(){
                console.log('12312');
                this.$router.push({name: 'WorkconclusionList'});
            }
        },
        components: {
            Group,
            Cell
        }
    }
</script>
