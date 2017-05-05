<template>
    <div class="studentspage">
        <group>
            <cell v-for="item in items" :title="item.name" @click.native="onClick(item)" is-link
                  :value="item.moment | moment"></cell>
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
    import Service from 'service/student'
    import 'filter/sdFilter'
    export default {
        data () {
            return {
                menusOptions: [
                    {label: '点评', type: 'primary', value: '0'},
                    {label: '编辑', type: 'primary', value: '1'},
                    {label: '删除', type: 'warn', value: '2'}
                ],
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
                this.currentItem = item;
                this.sheetModel = true;
            },
            clickMenu(val) {
                if (val == '0') {
                    this.$router.push({
                        name: 'Studentinfo',
                        params: {classid: this.classId, studentid: this.currentItem.id}
                    });
                }
                else if (val == '1') {
                    this.$router.push({
                        name: 'Addstudentinfo',
                        params: {classid: this.classId, studentid: this.currentItem.id}
                    });
                }
                else if (val == '2') {
                    this.delstudent();
                }
                else {
                    return;
                }
            },
            onHide () {
                console.log('on hide')
            },
            onShow () {
                console.log('on show')
            },
            delstudent: function () {
                this.show = true;
                var that = this;
                let model = {
                    classid: this.classId,
                    studentid: this.currentItem.id
                }
                this.$vux.alert.show({
                    title: '请注意',
                    content: '删除之后学生之后资料无法恢复，是否确定？',
                    onHide () {
                        that.$vux.loading.show({
                            text: '正在删除'
                        });
                        Service.delstudent(model).then(function (response) {
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
                var items = [];
                var that = this;

                if (this.items.length == 0) {
                    this.$vux.loading.show({
                        text: '加载中...'
                    });
                }
                Service.getstudentlist(this.classId).then(function (response) {
                    if (response.data && response.data.data) {
                        response.data.data.forEach(function (item) {
                            let Obj = {
                                name: item.firstname + item.lastname,
                                number: '12',
                                icon: require('../../assets/Student.png'),
                                moment: item.moment,
                                id: item.id
                            };
                            items.push(Obj);
                        })
                        that.$vux.loading.hide();
                    }
                    that.items = items;
                });
            },
            clickOntheAdd(){
                this.$router.push({name: 'Addtheworksummary', params: {recordid:'0'}});
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
