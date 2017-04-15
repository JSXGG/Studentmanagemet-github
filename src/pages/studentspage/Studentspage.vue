<template>
    <div class="studentspage">
        <group>
            <cell v-for="item in items" :title="item.name" @click.native="onClick(item)" is-link
                  :value="item.moment | moment"></cell>
        </group>
        <div style="margin: 20px 10px 20px 10px">
            <x-button type="primary" @click.native="clickOntheAdd">添加学生</x-button>
        </div>
        <actionsheet v-model="sheetModel" :menus="menusOptions" @on-click-menu="clickMenu"
                     show-cancel>
        </actionsheet>
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
                    '编辑资料',
                    '添加点评'
                ],
                sheetModel: false,
                showPopup: false,
                name: '',
                classId: '',
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
                        name: 'Addstudentinfo',
                        params: {id: this.classId, studentid: this.currentItem.id}
                    });
                }
                else if (val == '1') {
                    this.$router.push({
                        name: 'Studentinfo'
                    });
                }
                else {
                    return;
                }
            },
            reloadData: function () {
                this.name = this.$route.params.name;
                this.classId = this.$route.params.id;
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: this.name,
                    isHeader: true,
                    isFooter: false,
                });
                this.reloadView();
            },
            reloadView(){
                var items = [];
                var that = this;
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
                    }
                    that.items = items;
                });
            },
            clickOntheAdd(){
                this.$router.push({name: 'Addstudentinfo', params: {id: this.classId, studentid: '0'}});
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
