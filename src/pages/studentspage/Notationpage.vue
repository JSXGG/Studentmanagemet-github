<template>
    <div>
        <div v-if="items.length == 0" style="text-align: center;color: #00bcd4;margin-top: 100px">当前没有批注</div>
        <group v-for="item in items" :title="item.info | formatNameNotationpage">
            <x-textarea :readonly="isreadonly(item)" v-model="item.content" :max="500" placeholder="请填写批注"
                        @on-focus="onEvent('focus')"
                        @on-blur="onEvent('blur')"></x-textarea>
        </group>
        <div style="margin: 10px 10px 50px 10px">
            <x-button type="primary" @click.native="clickOntheSave" v-if="iseditable">保存</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {XTextarea, Group, XButton, Datetime, Picker, XInput} from 'vux'
    import Service from 'service/user'
    import 'filter/sdFilter'
    import sessionstorge from 'service/sdSessionStorge'
    export default{
        data(){
            return {
                items: [],
                userInfo: sessionstorge.getUserInfo(),
                teachInfo: {}//老师的详细信息。
            }
        },
        computed: {
            iseditable(){
                if (this.teachInfo && this.teachInfo.permission == '2') {
                    return true;
                }
                return false;
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: '批注',
                    isHeader: true,
                    isFooter: false,
                });
                this.id = this.$route.params.id ? this.$route.params.id : '';
                this.getnotationbyrecordid();
                this.gettecherinfobyid();
            },
            getnotationbyrecordid(){
                var that = this;
                this.$vux.loading.show({
                    text: '加载中...'
                });
                Service.getnotationbyrecordid(this.id).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.$vux.loading.hide();
                        let data = response.data.data;
                        that.items = data;
                        that.initdefaultItems();
                    }
                });
            },
            initdefaultItems(){
                if (this.items.length == 0 && this.iseditable) {
                    this.items = [{
                        teacherid: this.userInfo.id,
                        recordid: this.id,
                        content: ''
                    }];
                }
            },
            gettecherinfobyid(){
                let model = {
                    teacherid: this.userInfo.id
                }
                var that = this;
                Service.gettecherinfobyid(model).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.teachInfo = response.data.data;
                        that.initdefaultItems();
                    }
                });
            },
            isreadonly(item){
                if (item.teacherid == this.userInfo.id) {
                    return false;
                }
                return true
            },
            clickOntheSave() {
                this.$vux.loading.show({
                    text: '保存中...'
                });
                var that = this;
                var currentItem = {};
                this.items.forEach(function (item) {
                    if (item.teacherid == that.userInfo.id) {
                        currentItem = item;
                    }
                });
                let model = {
                    recordid: currentItem.recordid,
                    content: currentItem.content
                };
                Service.addanotation(model).then(function (response) {
                    if (response.data && response.data.result == '1') {
                        that.$vux.loading.hide();
                        that.$vux.toast.show({
                            text: '保存成功'
                        })
                    }
                });
            }
        },
        components: {XTextarea, Group, XButton, Datetime, Picker, XInput}
    }
</script>
