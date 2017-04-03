<template>
    <div>
        <group>
            <cell class="cellId" style="height: 40px" v-for="(item,index) in items" :value="item.value"
                  :title="item.name" @click.native="onClick(index)"
                  is-link>
                <img slot="icon" width="44" style="display:block;margin-right:15px;" :src="item.icon">
                </cell>
        </group>
        <div style="margin: 20px 10px 20px 10px">
            <x-button type="primary" @click.native="clickOntheAdd">添加教师</x-button>
        </div>

    </div>
</template>
<style>

</style>
<script>
    import {Cell, Group,XHeader,XButton} from 'vux'

    export default{
        data(){
            return{
                items: [
                    {name: '张老师', icon:require('../../assets/Headteachers.png'), value: '数学老师'},
                    {name: '黄老师', icon:require('../../assets/Headteachers.png'), value: '语文老师'},
                ],
            }
        },
        components: {
            Group,
            Cell,XHeader,XButton
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF',
                    {
                        isBack: true,   //是否显示返回
                        title: '教师管理',  //显示标题内容
                        isHeader: true,  //是否显示头部标题
                        isFooter: false,
                        tabBarIndex: 2
                    });


            },
            onClick(a)
            {
                console.log(a);

            },
            clickOntheAdd()
            {
                console.log('点击了添加教师');
                this.$router.push({name: 'Addteacher'});


            }
        }

    }
</script>
