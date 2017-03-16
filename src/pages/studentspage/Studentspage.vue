<template>
    <div class="studentspage">
        <flexbox class="flexbox" v-for="item in items">
            <flexbox-item class="flexboxitem" v-for="c_item in item">
                <div class="title">{{c_item.number}}</div>
                <img style="width: 50%;height: 11vw;" :src="c_item.icon"><img>
                <div class="name">{{c_item.name}}</div>
            </flexbox-item>
        </flexbox>
        <div style="margin: 10px">
            <x-button type="primary" @click.native="clickOntheAdd">添加</x-button>
        </div>
    </div>
</template>
<style>
    .studentspage {
        margin: 5px;
    }

    .studentspage .flexbox {
        text-align: center;
        margin-top: 5px;
    }

    .studentspage .flexbox .flexboxitem {
        width: 100%;
        height: 20vw;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 1px #d6d6d6;
    }

    .studentspage .flexbox .flexboxitem .title {
        width: 97%;
        height: 4vw;
        color: #999999;
        line-height: 4vw;
        text-align: right;
        margin-right: 5px;
        font-size: 0.6rem;
    }

    .studentspage .flexbox .flexboxitem .name {
        width: 100%;
        height: 2vw;
        color: #0BB20C;
        line-height: 2vw;
        text-align: center;
        margin-right: 5px;
        font-size: 0.8rem;
    }
</style>
<script>
    import {XButton, Flexbox, FlexboxItem, Divider} from 'vux'
    export default {
        data () {
            return {
                items: []
            }
        },
        mountes(){
            this.reloadData();
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: '一年级一班',
                    isHeader: true,
                    isFooter: false,
                });
                this.reloadView();
            },
            reloadView(){
                let obj = [
                    {name: '黄子华', number: '122', icon: require('../../assets/Class.png')},
                    {name: '成易迅', number: '13', icon: require('../../assets/Class.png')},
                    {name: '隍换强', number: '14', icon: require('../../assets/Class.png')},
                    {name: '林芝士', number: '14', icon: require('../../assets/Class.png')}];
                this.items = [obj, obj, obj, obj, obj, obj, obj, obj, obj];
            },
            clickOntheAdd(){
                this.$vux.loading.show({
                    text: 'Loading'
                });
                setTimeout(()=> {
                    this.$vux.loading.hide();
                    this.$vux.toast.show({
                        text: '添加成功'
                    })
                    setTimeout(()=> {
                        this.$vux.toast.hide();
                    }, 1000)
                }, 1000)

            }
        },
        components: {
            Flexbox,
            FlexboxItem,
            Divider,
            XButton
        }
    }
</script>
