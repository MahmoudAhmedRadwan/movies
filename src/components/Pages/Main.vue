<template>
    <div class="page_container">
        <SideMenu />
        <MobileSideMenu />
        <div class="content">
            <NavBar />
            <router-view></router-view>
        </div>
    </div>    
</template>
<script>
import SideMenu from '../Global/SideMenu.vue';
import MobileSideMenu from '../Global/MobileSideMenu.vue';
import NavBar from '../Global/NavBar.vue';
export default {
    name: 'Main',
    components: {
        SideMenu, NavBar, MobileSideMenu
    },
    data(){
        return{
            auth: ''
        }
    },
    mounted(){
        this.userCheck();
    },
    beforeMount(){
        this.userCheck();
    },
    updated() {
        this.userCheck();
    },
    methods: {

        // Auth Check
        userCheck(){
            if( localStorage.getItem('token') && localStorage.getItem('token') !== '' ){
                this.auth = true;
            } else {
                this.$router.push('/LogIn');
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.page_container{
    display: flex;
    .content{
        width: calc(100% - 280px);
        @media(max-width: 992px) {
            width: 100%;
        }
    }
}
</style>