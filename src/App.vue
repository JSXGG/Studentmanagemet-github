<template>
    <div>
        <mt-header fixed title="学生管理手册">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="app-container">
            <home></home>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .app-container{
        margin-top: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
<script>
    import home from './pages/home.vue';
    export default {
        data () {
            return {}
        },
        components: {
            home
        }
    }
</script>


