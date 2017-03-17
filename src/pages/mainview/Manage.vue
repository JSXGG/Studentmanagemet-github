<template>
    <div class="manage">
        <group title="超优教育">
            <cell v-for="item in items" :title="item.name" :inline-desc="item.desc" style="" @click.native="onClick(item.name)"
                  is-link>
                <img slot="icon" width="40px" height="40px" style="display:block;margin-right:15px;" :src=item.icon>
            </cell>

        </group>
    </div>
</template>
<style>
    .manage{
        padding-bottom: 60px;
    }
</style>
<script>
    import {Cell, Group} from 'vux'
    export default {
        data () {
            return {
                items: [
                    {name: '一年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '二年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '三年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')},
                    {name: '四年级一班', desc: '这个是一个美好的班级', icon: require('../../assets/Class.png')}
                ]
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '学生管理',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex:1
                });
            },
            onClick(name){
                this.$router.push({name: 'Studentspage',params: { id: '1'}});
            }
        },
        components: {
            Cell,
            Group
        }
    }
</script>
