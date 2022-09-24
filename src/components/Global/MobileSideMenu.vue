<template>
<div class="side_menu_container" @click="CloseMenu" :class=" showMenuData == true ? 'side_menu_show supplierMenu' : 'side_menu supplierMenu' ">
        <div class="sideMenu" >
            <div class="logo">
                <img src="../../assets/images/365logo.png" alt="">
            </div>
            <div class="links_section">
                <ul>
                    <li>
                        <router-link to=""> 
                            <div class="img_container"><img src="../../assets/images/home.png" alt=""></div>
                            الرئيسية  
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="links_section">
                <h4>المستخدمين</h4>
                <ul>
                    <li>
                        <router-link to=""> 
                        <div class="img_container"> <img src="../../assets/images/mail.png" alt=""></div>
                            تذاكر الدعم  
                        </router-link> 
                    </li>
                </ul>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'SideMenu',
    data(){
        return{
            sideMenu: false,
            showMenuData: false
        }
    },
    mounted(){
        this.$root.$on('showMenu', (menuState) => {
            this.showMenuData = menuState
        })
    },
    methods: {
        CloseMenu(){
            this.showMenuData = false;
        }
    },
}
</script>
<style lang="scss" scoped>
.side_menu_container{
    width: 180px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -200px;
    transition: .3s ease-in-out;
    z-index: 3;
}
.side_menu_show{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transition: .3s ease-in-out;
    z-index: 3;
    overflow-x: scroll;
    height: 100vh;
}
.side_menu{
    width: 180px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -334px;
    transition: .3s ease-in-out;
    z-index: 3;
}
.sideMenu{
    background-color: #283046;
    width: 280px;
    height: 100%;
    padding: 20px;
    box-shadow: 0px 2px 10px #0000002B;
    .logo{
        margin-bottom: 20px;
    }
    .links_section{
        margin-bottom: 30px;
        h4{
            font-size: 14px;
            font-weight: 500;
            color: #999999;
            margin-bottom: 5px;
        }
        ul{
            li{
                margin-bottom: 10px;
                a{
                    display: flex;
                    align-items: center;
                    color: #FFF;
                    font-size: 15px;
                    font-weight: 500;
                    .img_container{
                        margin-left: 10px;
                        width: 30px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>