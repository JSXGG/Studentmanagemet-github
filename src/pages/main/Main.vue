<template>
    <div>
        <h4 style="padding: 10px;text-align: center">尊敬的 <span
                style="color: #00bcd4;font-size: 1.2em">{{nickname}}</span> 老师欢迎来到萧萧学生管理</h4>
        <card style="padding: 10px">
            <div slot="header" style="padding-bottom: 10px">
                管理您的学生
            </div>
            <div slot="content">
                <p style="color:#999;font-size:12px;"> 在这里您可以添加你的学生，或者将已有学生加入您管理的学生列表，您可以对学生进行学业管理，签到，学生报告，学生总结等。</p>
            </div>
            <div slot="footer">
                <div align="right" style="margin-top: 10px">
                    <router-link :to="{name:'Manage'}">
                        <x-button mini type="primary">进入学生列表</x-button>
                    </router-link>
                </div>
            </div>
        </card>

        <card style="padding: 10px">
            <div slot="header" style="padding-bottom: 10px">
                学生考勤
            </div>
            <div slot="content">
                <p style="color:#999;font-size:12px;"> 看看您管理的学生是否已经到达学校，进入机构。</p>
            </div>
            <div slot="footer">
                <div align="right" style="margin-top: 10px">
                    <router-link :to="{name:'Home'}">
                        <x-button mini type="primary">进入学生考勤</x-button>
                    </router-link>
                </div>
            </div>
        </card>

        <card style="padding: 10px">
            <div slot="header" style="padding-bottom: 10px">
                工作报告
            </div>
            <div slot="content">
                <p style="color:#999;font-size:12px;"> 您可以在这里添加您的工作总结，工作报告，添加完成您的主管老师能立刻看到哦。</p>
            </div>
            <div slot="footer">
                <div align="right" style="margin-top: 10px">
                    <router-link :to="{name:'WorkconclusionList'}">
                        <x-button mini type="primary">查看工作报告</x-button>
                    </router-link>
                </div>
            </div>
        </card>

    </div>
</template>
<style>
</style>
<script>
    import {Card, XButton} from 'vux'
    import Service from 'service/user'
    import loginSrc from 'service/login'
    import sessionstorge from 'service/sdSessionStorge'
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    export default{
        data(){
            return {
                userInfo: sessionstorge.getUserInfo() ? sessionstorge.getUserInfo() : ''
            }
        },
        computed: {
            nickname(){
                return this.userInfo.nickname ? this.userInfo.nickname : ''
            },
            headimgurl(){
                return this.userInfo.headimgurl ? this.userInfo.headimgurl : require('../../assets/Headteachers.png')
            },
            address(){
                return this.userInfo.province ? this.userInfo.province : '' + this.userInfo.city ? this.userInfo.city : ''
            }
        },
        methods: {
            reloadData: function () {
                let code = this.$route.query.code;
                if (!code || (code && code.length == 0)) {
                    code = getQueryString('code');
                }
                if (code && code.length > 0) {
                    if (this.userInfo && this.userInfo.nickname) {
                        return;
                    }
                    this.weixinLogin(code);
                }
            },
            weixinLogin(code){
                let model = {
                    code: code,
                    type: 'weixin'
                };
                loginSrc.Login(model).then(() => {
                    this.userInfo = sessionstorge.getUserInfo();
                });
            }
        },
        components: {
            Card,
            XButton
        }
    }
</script>
