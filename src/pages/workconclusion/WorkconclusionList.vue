<template>
    <div class="studentspage">
        <group>
            <cell v-for="item in items" :title="getTitleByItem(item)" is-link>
                <div slots="after-title">
                    <x-button mini type="warn" @click.native="onClick(item)">编辑</x-button>

                    <x-button mini type="primary" @click.native="delreocrd(item)">删除</x-button>
                </div>
            </cell>
        </group>
        <div style="margin: 20px 10px 20px 10px">
            <x-button type="primary" @click.native="clickOntheAdd">添加</x-button>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../theme.less';

    .studentspage {
        margin: 0px;
    }

    .studentspage .flexbox {
        text-align: center;
        margin-top: 5px;
    }

    .studentspage .flexbox .flexboxitem {
        width: 100%;
        height: 30vw;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 1px #d6d6d6;
    }

    .studentspage .flexbox .flexboxitem .img {
        width: 50%;
        height: 15vw;
    }

    .studentspage .flexbox .flexboxitem .title {
        width: 97%;
        height: 5vw;
        color: @stress-color;
        line-height: 5vw;
        text-align: right;
        margin-right: 5px;
        font-size: 0.6rem;
    }

    .studentspage .flexbox .flexboxitem .name {
        width: 100%;
        height: 10vw;
        line-height: 10vw;
        color: @text-color;
        text-align: center;
        margin-right: 5px;
        font-size: 0.8rem;
    }
</style>
<script>
    import {XButton, Cell, Group, Popup, Actionsheet} from 'vux'
    import vue from 'vue'
    import Service from 'service/user'
    import 'filter/sdFilter'
    export default {
        data () {
            return {
                sheetModel: false,
                showPopup: false,
                name: '',
                classId: '',
                show: false,
                items: [],
                currentItem: {},
            }
        },
        mountes(){
            this.reloadData();
        },
        methods: {
            onClick: function (item) {
                this.$router.push({name: 'Addtheworksummary', params: {recordid: item.recordid}});
            },
            delreocrd(item){
                var that = this;
                this.$vux.alert.show({
                    title: '请注意',
                    content: '删除之后记录无法恢复',
                    onHide () {
                        that.$vux.loading.show({
                            text: '正在删除'
                        });
                        Service.delworkreportbyid(item.recordid).then(function (response) {
                            if (response.data && response.data.result == 1) {
                                that.$vux.loading.hide();
                                that.$vux.toast.show({
                                    text: '删除成功'
                                })
                                that.reloadView();
                            }
                        });
                    }
                })
                setTimeout(() => {
                    this.$vux.alert.hide()
                }, 3000)
            },
            onHide () {
                console.log('on hide')
            },
            onShow () {
                console.log('on show')
            },
            reloadData: function () {
                this.name = this.$route.params.name;
                this.classId = this.$route.params.id;
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: '我的工作总结',
                    isHeader: true,
                    isFooter: false,
                });
                this.reloadView();
            },
            reloadView(){
                var that = this;
                if (this.items.length == 0) {
                    this.$vux.loading.show({
                        text: '加载中...'
                    });
                }
                Service.getworkreportlist(this.classId).then(function (response) {
                    if (response.data && response.data.data) {
                        that.items = response.data.data;
                        that.$vux.loading.hide();
                    }
                });
            },
            clickOntheAdd(){
                this.$router.push({name: 'Addtheworksummary', params: {recordid: '0'}});
            },
            getTitleByItem(item){
                let title = item.btime + '～' + item.etime + '工作总结';
                return title;
            }
        },
        components: {
            Cell,
            Group,
            XButton,
            Actionsheet
        }
    }
</script>
