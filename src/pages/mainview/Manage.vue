<template>
    <div class="manage">
        <group>
            <cell v-for="item in items" :title="item.name" :inline-desc="item.desc" style=""
                  @click.native="onClick(item)"
                  is-link>
                <img slot="icon" width="40px" height="40px" style="display:block;margin-right:15px;" :src=item.icon>
            </cell>

        </group>
    </div>
</template>
<style>
    .manage {
        padding-bottom: 60px;
    }
</style>
<script>
    import {Cell, Group} from 'vux'
    import Service from 'service/myclass'
    export default {
        data () {
            return {
                items: []
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: false,   //是否显示返回
                    title: '学生管理',  //显示标题内容
                    isHeader: true,  //是否显示头部标题
                    isFooter: true,
                    tabBarIndex: 1
                });
                this.getmyclasslist();
            },
            getmyclasslist(){
                let Items = [];
                var that = this;
                if(this.items.length == 0){
                    this.$vux.loading.show({
                        text: '加载中...'
                    });
                }
                Service.getmyclasslist().then(function (response) {
                    if (response.data && response.data.data) {
                        that.$vux.loading.hide();
                        response.data.data.forEach(function (item) {
                            let Obj = {
                                name:item.name,
                                desc:item.content,
                                icon: require('../../assets/Class.png'),
                                id:item.id
                            }
                            Items.push(Obj);
                        });
                    }
                    that.items = Items;
                });
            },
            onClick(item){
                this.$router.push({name: 'Studentspage', params: {id: item.id,name:item.name}});
            }
        },
        components: {
            Cell,
            Group
        }
    }
</script>
