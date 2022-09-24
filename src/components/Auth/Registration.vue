<template>
    <div class="Auth_container">
        <div class="form">
            <h3>Sign Up</h3>
            <form action="" @submit.prevent="signUp">
                <div class="userName">
                    <label for="">User name</label>
                    <input type="text" placeholder="Type your user name" v-model="signUpData.name">
                </div>
                <div class="userName">
                    <label for="">Email</label>
                    <input type="email" placeholder="Type your Email" v-model="signUpData.email">
                </div>
                <div class="password">
                    <label for="">Password</label>
                    <input type="password" placeholder="Type your Password" v-model="signUpData.password">
                    <router-link to="/" class="Registration"> Log In </router-link>
                </div>
                <button class="submit">Sign Up</button>
                <div class="alert alert-danger mt-2" role="alert" v-if="ErrorCheck == true">
                    <p> {{logInErrors}} </p>
                </div>
                <div class="alert alert-success mt-2" role="alert" v-if="successCheck == true">
                    <p> successfully registered  <router-link to="/"> Press here to log in </router-link> </p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import store from '../../store';
export default {
    name: 'Registration',
    data(){
        return{
            signUpData: {
                name: '',
                email : '',
                password : ''
            },
            ErrorCheck: false,
            signUpErrors: '',
            successCheck: false,
        }
    },
    methods: {
        signUp(){
            axios.post(store.state.domain + '/register', this.signUpData)
            .then(res => {
                if(res.status == 200 || res.status == 201){
                    this.successCheck = true;
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