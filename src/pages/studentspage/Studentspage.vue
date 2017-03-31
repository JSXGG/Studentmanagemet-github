<template>
    <div class="studentspage">
        <group>
            <cell v-for="item in items" :title="item.name"></cell>
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
    import {XButton, Cell, Group,Popup} from 'vux'
    import Service from 'service/student'
    export default {
        data () {
            return {
                showPopup:false,
                name: '',
                classId: '',
                items: []
            }
        },
        mountes(){
            this.reloadData();
        },
        methods: {
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
            clickOntheItem(item){
                this.$router.push({name: 'Studentinfo', params: {id: item.name}});
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
                                icon: require('../../assets/Student.png')
                            };
                            items.push(Obj);
                        })
                    }
                    that.items = items;
                });
            },
            clickOntheAdd(){
                this.$router.push({name: 'Addstudent', params: {id: this.classId}});
                /*
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
                }, 1000)*/
            }
        },
        components: {
            Cell,
            Group,
            XButton,
        }
    }
</script>
