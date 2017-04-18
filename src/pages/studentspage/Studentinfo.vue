<template>
    <div class="studentinfo">
        <div class="header">
            <div style="display: flex;" class="title">
                <div>姓名：</div>
                <div style="margin-left: 10px">{{baseinfo.name}}</div>
            </div>
            <div style="display: flex;" class="title">
                <div>性别：</div>
                <div style="margin-left: 10px">{{baseinfo.gender}}</div>
            </div>
            <div style="display: flex;" class="title">
                <div>生日：</div>
                <div style="margin-left: 10px">{{baseinfo.birthday}}</div>
            </div>
            <div style="display: flex;" class="title">
                <div>班级：</div>
                <div style="margin-left: 10px">{{baseinfo.class}}</div>
            </div>
            <div style="display: flex;" class="title">
                <div>兴趣爱好：</div>
                <div style="margin-left: 10px">{{baseinfo.hobby}}</div>
            </div>
        </div>
        <div class="pagebody">
            <div class="block" v-for="item in items">
                <div class="formteach">
                    {{item.btime}}到{{item.etime}} 第{{item.week}}周<br>{{item.teach}}的短评
                </div>
                <h4 class="title">本周总结 （学习&生活）</h4>
                <p style="padding: 10px">
                    {{item.thisWeekSummary}}
                </p>
                <h4 class="title">下周计划</h4>
                <p style="padding: 10px">
                    {{item.nextWeekSummary}}

                </p>
                <h4 class="title">问题反思与 改进方案</h4>
                <p style="padding: 10px">
                    {{item.nextWeekPlan}}
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
    import {XButton, Flexbox, FlexboxItem, Divider} from 'vux'
    export default {
        data () {
            return {
                baseinfo: {},
                items: [
                    {
                        btime: '2017-01-03',
                        etime: '2017-01-08',
                        week: '3',
                        teach: '李老师',
                        thisWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekPlan: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。'
                    },
                    {
                        btime: '2017-01-03',
                        etime: '2017-01-08',
                        week: '3',
                        teach: '刘老师',
                        thisWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekPlan: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。'
                    },
                    {
                        btime: '2017-01-03',
                        etime: '2017-01-08',
                        week: '3',
                        teach: '黄老师',
                        thisWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekSummary: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。',
                        nextWeekPlan: '持之以恒，迎难而上的勇气，不断改进学习方法，加强知识的记忆，多练多问，' +
                        '我相信你一定会取得更好的成绩。为人谨慎，心性坦荡。沉稳深刻、思维严密。全神贯注，' +
                        '书写工工整整。努力探索，你一定能取得更大的成功。'
                    }
                ]
            }
        },
        methods: {
            reloadData: function () {
                var title = this.$route.params.id;
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: title,
                    isHeader: true,
                    isFooter: false,
                });
                this.studentid = this.$route.params.studentid ? this.$route.params.studentid : '';
                this.classid = this.$route.params.classid ? this.$route.params.classid : '';
                this.getStudentInfo();
            },
            getStudentInfo(){
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
            },
            clickOntheAddBtn(){
                this.$router.push({name: 'Commentontheinput', params: {id: '1', name: this.$route.params.id}});
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
