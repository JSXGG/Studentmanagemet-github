<template>
    <div class="sdfoot">
        <tabbar class="mt-tabbar">
            <tabbar-item :selected="item.selected" v-for="(item,index) in items"
                         @on-item-click="clickOntheTabbarindex(index)">
                <img v-if="item.selected == false" slot="icon" :src="item.iconUnSelect">
                <img v-if="item.selected == true" slot="icon" :src="item.iconSelect">
                <div slot="label">{{item.label}}</div>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .sdfoot .mt-tabbar {
        position: fixed;
        height: 55px;
        bottom: 0px;
        left: 0px;
        width: 100%
    }
</style>
<script>
    import {Tabbar, TabbarItem} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {
                        iconUnSelect: require('../../assets/home_unselect.png'),
                        iconSelect: require('../../assets/home_select.png'),
                        label: '主页',
                        selected: false
                    },
                    {
                        iconUnSelect: require('../../assets/manage_unselect.png'),
                        iconSelect: require('../../assets/manage_select.png'),
                        label: '学生管理',
                        selected: false
                    },
                    {
                        iconUnSelect: require('../../assets/setting_unselect.png'),
                        iconSelect: require('../../assets/setting_select.png'),
                        label: '设置',
                        selected: false
                    }
                ]
            }
        },
        watch: {
            tabBarIndex(){
            }
        },
        //计算属性.
        computed: {
            tabBarIndex: function () {
                let val = this.$store.getters.commConf.tabBarIndex;
                for (let index in this.items) {
                    let Obj = this.items[index];
                    if (index == val) {
                        Obj.selected = true;
                    }
                    else {
                        Obj.selected = false;
                    }
                }
                return this.$store.getters.commConf.tabBarIndex;
            }
        }
        ,
        methods: {
            clickOntheTabbarindex(index)
            {
                switch (index) {
                    case 0: {
                        this.$router.push({name: 'Home'});
                    }
                        break;
                    case 1: {

                        this.$router.push({name: 'Manage'});
                    }
                        break;
                    case 2: {
                        this.$router.push({name: 'Setupthe'});
                    }
                        break;
                }
            }
        },
        components: {
            Tabbar,
            TabbarItem
        }
        ,
    }
</script>
