export default {
    methods:{
        reloadData(){}
    },
    beforeRouteEnter (to, from, next) {
        next(vm =>{
            vm.reloadData();
        });
    }
}
