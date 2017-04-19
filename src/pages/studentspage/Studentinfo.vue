<template>
    <div class="studentinfo">
        <div v-if="items.length == 0" style="text-align: center;color: #00bcd4;margin-top: 100px">请添加点评</div>
        <div class="pagebody">
            <div class="block" v-for="item in items" @click="clicOntheblock(item)">
                <div class="formteach">
                    {{item.btime}}到{{item.etime}} 第{{item.week}}周<br>{{item.teachername}}的短评
                </div>
                <h4 class="title">本周总结 （学习&生活）</h4>
                <p style="padding: 10px">
                    {{item.weekworksummary}}
                </p>
                <h4 class="title">下周计划</h4>
                <p style="padding: 10px">
                    {{item.nextworkplan}}

                </p>
                <h4 class="title">问题反思与 改进方案</h4>
                <p style="padding: 10px">
                    {{item.problemsreflect}}
                </p>
            </div>
        </div>
        <div class="addbtn">
            <x-button style="filter:alpha(opacity=50)" type="primary" @click.native="clickOntheAddBtn">添加点评</x-button>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import '../../theme.less';

    .studentinfo .header {
        margin: 10px;
        background-color: white;
        height: 180px;
        border-radius: 5px;
        box-shadow: 0 1px 1px #d6d6d6;
        padding: 10px;
    }

    .studentinfo .header .title {
        left: 10px;
        height: 36px;
        line-height: 36px;
        font-size: 1rem;
    }

    .studentinfo .pagebody {
        margin-bottom: 80px;
    }

    .studentinfo .block {
        margin: 20px 10px 10px 10px;
        font-size: 0.9rem;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 1px 1px #d6d6d6;
        overflow: hidden;
    }

    .studentinfo .block .formteach {
        height: 50px;
        color: white;
        padding: 10px;
        background-color: @theme-color;
        font-size: 1rem;
    }

    .studentinfo .block .title {
        margin-left: 5px;
        font-size: 0.9rem;
        color: @stress-color;
    }

    .studentinfo .addbtn {
        position: fixed;
        opacity: 0.5;
        width: 35%;
        bottom: 10px;
        right: 10px;
    }
</style>
<script>
    import Service from 'service/student'
    import sessionstorge from 'service/sdSessionStorge'
    import {XButton, Flexbox, FlexboxItem, Divider} from 'vux'
    export default {
        data () {
            return {
                baseinfo: {},
                nicname: '',
                userInfo: sessionstorge.getUserInfo(),
                items: []
            }
        },
        methods: {
            reloadData: function () {
                this.studentid = this.$route.params.studentid ? this.$route.params.studentid : '';
                this.classid = this.$route.params.classid ? this.$route.params.classid : '';
                this.setHeaderViewTitle('');
                this.getStudentInfo();
                this.getcommentbystudentid();
            },
            //点击修改点评。
            clicOntheblock(item){
                if (item.teacherid == this.userInfo.id) {
                    this.$router.push({
                        name: 'Commentontheinput',
                        params: {
                            classid: this.classid,
                            studentid: this.studentid,
                            name: this.nicname,
                            recordid:item.id}
                    });
                }
            },
            setHeaderViewTitle(title){
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: title,
                    isHeader: true,
                    isFooter: false,
                });
            },
            getStudentInfo(){
                var that = this;
                Service.getstudentinfo(this.studentid).then(function (response) {
                    if (response.data && response.data.data) {
                        let responseData = response.data.data;
                        that.reloadbaseInfo(responseData);
                    }
                });
            },
            /*刷新基本信息*/
            reloadbaseInfo(data){
                this.baseinfo = data;
                if (this.baseinfo && this.baseinfo.firstname) {
                    this.nicname = this.baseinfo.firstname + this.baseinfo.lastname;
                    this.setHeaderViewTitle(this.nicname);
                }
            },
            /*获取评论列表*/
            getcommentbystudentid(){
                var that = this;
                Service.getcommentbystudentid(this.studentid).then(function (response) {
                    if (response.data && response.data.data) {
                        that.items = response.data.data;
                    }
                });
            },
            clickOntheAddBtn(){
                this.$router.push({
                    name: 'Commentontheinput',
                    params: {classid: this.classid, studentid: this.studentid, name: this.nicname,recordid:'0'}
                });
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
