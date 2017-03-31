<template>
    <div>
        12312312
        123123

        123123123
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
            reloadData: function () {
                this.$store.commit('COMM_CONF', {
                    isBack: true,
                    title: '添加学生',
                    isHeader: true,
                    isFooter: false,
                });
            }
        }
    }
</script>
