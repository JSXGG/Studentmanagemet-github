<template>
    <div class="sdfoot">
        <tabbar class="mt-tabbar" v-model="selected">
            <tabbar-item style="text-decoration:none" value="0" @on-item-click="clickontheItemOne">
                <img slot="icon" :src="tab_icon1">
                <div style="margin-top: -10px" slot="label">主页</div>
            </tabbar-item>
            <tabbar-item style="text-decoration:none;" value="1" @on-item-click="clickontheItemTwo">
                <img slot="icon" :src="tab_icon2">
                <div slot="label" style="margin-top: -10px">设置</div>
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

    .mt-tabbar .tabbar__label {
        margin-top: 0px;
    }

    .sdfoot .tabbar-icon {
        color: red;
        background-color: rebeccapurple;
    }
</style>
<script>
    import {Tabbar, TabbarItem} from 'vux'
    export default {
        data () {
            return {
                selected: 0,
                tab_icon1: require('../../assets/home_select.png'),
                tab_icon2: require('../../assets/setting_unselect.png')
            }
        },
        methods: {
            clickontheItemOne(){
                this.tab_icon1 = require('../../assets/home_select.png');
                this.tab_icon2 = require('../../assets/setting_unselect.png');
                this.$router.push({name: 'Home'});
            },
            clickontheItemTwo(){
                this.tab_icon1 = require('../../assets/home_unselect.png');
                this.tab_icon2 = require('../../assets/setting_select.png');
                this.$router.push({name: 'Setupthe'});
            }
        },
        components: {
            Tabbar,
            TabbarItem
        },
    }
</script>
