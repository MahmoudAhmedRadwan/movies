<template>
    <div class="navBar flex_space_between">
        <div class="user_img flex_space_between">
            <div class="menuClick">
                <b-icon icon="text-left" aria-hidden="true" class="toggleIcone" @click="Menu"></b-icon>
            </div>
            <div class="userImg">
                <img src="../../assets/images/userAvatar.jpg" alt="">
            </div>
            <h4 class="user_name"> radwan </h4>
        </div>
        <div class="nav_actions flex_space_between">
            <div class="icone_container">
                <img src="../../assets/images/search.png" alt="">
            </div>
            <div class="icone_container">
                <img src="../../assets/images/bell.png" alt="">
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'NavBar',
    data(){
        return{
            showMenuCheck: false
        }
    },
    methods: {
        Menu(){
            this.showMenuCheck = true;
            this.$root.$emit('showMenu', true);
        },
    }
}
</script>
<style lang="scss" scoped>
.navBar{
    box-shadow: 0px 2px 8px #00000022;
    margin: 30px;
    border-radius: 8px;
    padding: 7px 15px;
    .menuClick{
        display: none;
        @media(max-width: 992px) {
            display: block;
        }
        .toggleIcone{
            font-size: 30px;

        }
    }
    .userImg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .user_name{
        font-size: 14px;
        color: #2C2C2C;
        font-weight: 600;
    }
    .nav_actions{
        .icone_container{
            margin-right: 15px;
            cursor: pointer;
        }
    }
}
</style>