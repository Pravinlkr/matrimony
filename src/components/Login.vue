<template>
  <div class="loginBox">
      <h3>Login</h3>
      <div v-if="error" class="error">{{error}}</div>
      <input type="email" v-model="email" placeholder="Enter Email"><br>
      <input type="password" v-model="password" placeholder="Enter Password"><br>
      <button @click="login()">Login</button><br>
      <button @click="googleSignIn()">Sign In With Google</button><br>
      <a href="/register">Create A New Account</a>
  </div>
</template>

<script>
import { ref } from 'vue'
// import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from 'vue-router'
// import { usersCollection } from '@/main.js'
import { useStore } from 'vuex'
export default {
    name:'Login',
    setup(){
        const email = ref('')
        const password = ref('')
        const error = ref('')
        const router = useRouter()
        const store = useStore()

        async function googleSignIn(){
            await store.dispatch('loginWithGoogle',{role:'guest',action:'login'})
            router.push('/')
        }

        async function login(){
            if(email.value){
                if(password.value){
                    try{
                        await store.dispatch('loginWithEmail',{email:email.value, password:password.value})
                        router.push('/')
                    }
                    catch(err){
                        error.value = err.message
                    }
                }else{
                    error.value = 'Password is Required'
                }
            }else{
                error.value = 'Email is Required'
            }
        }
        return{
            email,
            password,
            error,
            login,
            googleSignIn
        }
    }
}
</script>

<style scoped>
.loginBox{
    width:25%;
    margin:7% auto;
    border:1px solid #ccc;
    border-radius: 10px;
    padding-bottom: 30px;
}
.loginBox h3{
    margin-left: 4%;
}
.error{
  color:red;
  font-size: 12px;
  text-align: center;
}
.loginBox input{
    width:90%;
    margin:2% 4%;
    height: 35px;
    border:1px solid #ccc;
    outline: none;
    border-radius: 5px;
}
.loginBox button{
    margin:3% 4%;
    height: 36px;
    border:none;
    border-radius: 5px;
    background-color: #e0b246;
    padding:5px 15px;
}
.loginBox a{
    text-decoration: none;
    color:#e63232;
    margin-left: 4%;
    font-size: 12px;
}
@media (max-width:500px) {
    .loginBox{
        width:80%;
        margin:20% auto;
    }
}
</style>