<template>
    <div class="Auth_container">
        <div class="form">
            <h3>Log in</h3>
            <form action="" @submit.prevent="logIn">
                <div class="userName">
                    <label for="">User name</label>
                    <input type="text" placeholder="Type your user name" v-model="login.email">
                </div>
                <div class="password">
                    <label for="">Password</label>
                    <input type="password" placeholder="Type your Password" v-model="login.password">
                    <router-link to="/Registration" class="Registration"> Sign Up </router-link>
                </div>
                <button class="submit">Log in</button>
            </form>
            <div class="alert alert-danger mt-2" role="alert" v-if="ErrorCheck == true">
                <p> {{logInErrors}} </p>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import store from '../../store';
export default {
    name: 'LogIn',
    data(){
        return{
            login: {
                email : '',
                password : ''
            },
            ErrorCheck: false,
            logInErrors: ''
        }
    },
    methods: {

        logIn(){
            axios.post(store.state.domain + '/login', this.login)
            .then(res => {
                if(res.status == 200 || res.status == 201){
                    console.log(res)
                    localStorage.setItem('token', res.data.authorisation.token)
                    this.$router.push('/Home')
                }
            })
            .catch(err => {
                this.ErrorCheck = true;
                console.log(err.response.data.message)
                this.logInErrors = err.response.data.message
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.Auth_container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form{
    box-shadow: 0 0 10px #DDD;
    margin: auto;
    width: 400px;
    padding: 20px;
    border-radius: 20px;
    margin-top: 200px;
    h3{
        font-size: 30px;
        font-weight: 600;
        color: rgb(28, 27, 27);
        text-align: center;
        margin-bottom: 30px;
    }
    form{
        .userName,
        .password{
            margin-bottom: 20px;
            label{
                font-size: 18px;
                font-weight: 600;
                color: #5b5454;
                display: block;
            }
            input{
                display: block;
                border: 0;
                border-bottom: 1px solid #17171745;
                padding: 10px;
                width: 100%;
            }
        }
        .Registration{
            color: #1a448e;
            font-size: 16px;
            margin-top: 10px;
            display: block;
            &:hover{
                font-weight: 600;
            }
        }
        .submit{
            display: block;
            border-radius: 30px;
            text-align: center;
            padding: 10px;
            color: #FFF;
            background-color: #007d97;
            width: 100%;
            border: 0;
            font-size: 20px;
            font-weight: 500;
            transition: .3s ease-in-out;
            margin-top: 50px;
        }
    }
}
</style>