<template>
    <div>
        <group v-for="item in items" :title="item.title">
            <x-input v-model="item.value" style="height: 30px" :placeholder="item.placeholder"
                     :type="item.type"></x-input>
        </group>
        <div style="margin-left: 10px;margin-right:10px;margin-top: 20px;">
            <x-button class="btn" @click.native="clickOntheEnter" type="primary">确定</x-button>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {
        Group,
        Cell,
        XButton,
        XInput
    } from 'vux'
    import Service from 'service/student'
    export default{
        data(){
            return {
                items: [
                    {
                        type: 'text',
                        title: '姓',
                        placeholder: '请输入学生姓',
                        value: '',
                        key: 'firstname'
                    },
                    {
                        type: 'text',
                        title: '名',
                        placeholder: '请输入学生名',
                        value: '',
                        key: 'lastname'
                    },
                    {
                        type: 'text',
                        title: '家庭地址',
                        placeholder: '请输入学生家庭地址',
                        value: '',
                        key: 'address'
                    },
                    {
                        type: 'text',
                        title: '父亲名字',
                        placeholder: '请输入父亲名字',
                        value: '',
                        key: 'father'
                    },
                    {
                        type: 'number',
                        title: '父亲电话',
                        placeholder: '请输入父亲电话',
                        value: '',
                        key: 'fatherphone'
                    },
                    {
                        type: 'text',
                        title: '母亲名字',
                        placeholder: '请输入母亲名字',
                        value: '',
                        key: 'mother'
                    },
                    {
                        type: 'number',
                        title: '母亲电话',
                        placeholder: '请输入母亲电话',
                        value: '',
                        key: 'motherphone'
                    }
                ]
            }
        },
        components: {
            Group,
            XButton,
            Cell,
            XInput
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,   //是否显示返回
                    title: '添加学生',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: false,
                });
            },
            clickOntheEnter(){
                let firstname = this.items[0].value;
                let lastname = this.items[1].value;
                if (firstname.length == 0) {
                    this.$vux.toast.show({
                        type: 'warn',
                        text: '请输入学生姓氏'
                    });
                }
                else if (lastname.length == 0) {
                    this.$vux.toast.show({
                        type: 'warn',
                        text: '请输入学生名字'
                    })
                }
                else {
                    let Model = {};
                    this.items.forEach(function (item) {
                        Model[item.key] = item.value;
                    });
                    let classid = this.$route.params.id;
                    Model['classid'] = classid;
                    this.$vux.loading.show({
                        text: '正在添加...'
                    });
                    let that = this;
                    Service.addstudent(Model).then(function (response) {
                        if (response.data && response.data.result == '1') {
                            that.$vux.loading.hide();
                            that.$vux.toast.show({
                                text: '添加成功'
                            })
                        }
                    })
                }
            }
        }
    }
</script>
