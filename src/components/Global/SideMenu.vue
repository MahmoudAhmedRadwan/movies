<template>
    <div class="sideMenu">
        <div class="logo">
            <h3>movies</h3>
        </div>
        <div class="links_section">
            <ul>
                <li :class="hoverType == 'Home' ? 'activeLink' : ''">
                    <router-link to="/Home"> 
                        <div class="img_container"><img src="../../assets/images/home.png" alt=""></div>
                        Home  
                    </router-link>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script>
export default {
    name: 'SideMenu',
    data(){
        return{
            hoverType: ''
        }
    },
    mounted(){
        
    },
    methods: {
       
    }
}
</script>
<style lang="scss" scoped>
.sideMenu{
    background-color: #283046;
    width: 280px;
    height: 100%;
    padding: 20px;
    box-shadow: 0px 2px 10px #0000002B;
    @media(max-width: 992px) {
        display: none;
    }
    .logo{
        margin-bottom: 20px;
        h3{
            font-size: 30px;
            font-weight: 600;
            color: #FFF;
        }
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
                margin-bottom: 20px;
                transition: .3s ease-in-out;
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
                &:hover{
                transform: scale(1.1);
            }
            }
            
        }
    }
}
</style>