<template>
    <div>
        <group>
            <cell v-for="item in items" :title="item.name" @click.native="onClick(item)" is-link
                  value="123123"></cell>
        </group>
        <div align="center" style="margin-top: 10px">
            <router-link :to="{name:'Manage'}">
                <x-button mini type="primary">添加学生</x-button>
            </router-link>
        </div>
    </div>
</template>
<style>
</style>
<script>
    import {XButton, Group, Cell} from 'vux'
    export default{
        data(){
            return {
                items: [
                    {
                        name: '学生'
                    }
                ]
            }
        },
        methods:{
            onClick(){

            }
        },
        components: {
            XButton,
            Group,
            Cell
        }
    }
</script>
