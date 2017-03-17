<template>
    <div class="home">
        <div class="groupcontent" v-for="item in items">
            <div style="font-size: 0.8rem;display: flex">
                <flexbox style="background-color: #e1e1e1;height: 25px;color: gray">
                    <flexbox-item>
                        <div style="padding-left: 10px">{{item.title}}</div>
                    </flexbox-item>
                    <flexbox-item>
                        <div style="text-align: right; padding-right: 5px">{{item.time}}</div>
                    </flexbox-item>
                </flexbox>
            </div>
            <div style="font-size: 0.9rem;margin-top: 10px;padding: 10px">{{item.content}}</div>
        </div>
    </div>
</template>

<style>
    .home{
        padding-bottom: 55px;
    }
    .home .groupcontent {
        margin-top: 10px;
        margin: 10px;
        overflow: hidden;
        background-color: white;
        min-height: 120px;
        border-radius: 10px;
        box-shadow: 0 1px 1px #d6d6d6;
    }
</style>
<script>
    import {Flexbox, Group, FlexboxItem} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {title: '生日提醒', content: '今天是小明同学的生日，快快给他祝福吧。',time:"34分钟前"},
                    {title: '公告', content: '今天需要大家写作业，写报告，计划周五去旅游。',time:"1个小时前"},
                    {title: '生日提醒', content: '今天是花花的生日。',time:"2017-01-01"},
                    {title: '菜单', content: '周五菜单是红烧肉。',time:"2016-10-10"},
                    {title: '生日提醒', content: '今天是花花的生日。',time:"2017-01-01"},
                ]
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '主页',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 0
                });
            },
            onClick(name){
                console.log(name);
            }
        },
        components: {
            Flexbox,
            Group,
            FlexboxItem
        }
    }
</script>
