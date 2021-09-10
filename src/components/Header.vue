<template>
  <div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
    <a href="/">Firebase App</a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <!-- <router-link to="/register" v-if="!isLoggedIn">Signup</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <router-link to= @click="signOut()" v-if="isLoggedIn">Signup</router-link> -->
    <a href="/register" v-if="!isLoggedIn">Signup</a> 
     <a href="/login" v-if="!isLoggedIn">Login</a>
    <a @click="signOut()" v-if="isLoggedIn">Sign Out</a>
  </div>
</div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router'

export default {
    name:'Header',
    setup(){
      const isLoggedIn = ref(false)
      const router = useRouter()

      function signOut(){
        try{
          const data = firebase.auth().signOut();
          console.log(data);
          isLoggedIn.value = false
          router.push('/login')
        }
        catch(error){
          console.log(error)
        }
      }

      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          isLoggedIn.value = true
        }
        else{
          isLoggedIn.value = false
        }
      })

      return{
        isLoggedIn,
        signOut
      }
    }
    // data(){
    //   return{
    //     isLoggedIn: false
    //   }
    // },
    // created(){
    //   firebase.auth().onAuthStateChanged(user=>{
    //     if(user){
    //       this.isLoggedIn = true
    //     }
    //     else{
    //       this.isLoggedIn = false
    //     }
    //   })
    // },
    // methods:{
    //   async signOut(){
    //     try{
    //       const data = firebase.auth().signOut();
    //       console.log(data);
    //       this.isLoggedIn = false
    //       this.$router.push('/login')
    //     }
    //     catch(error){
    //       console.log(error)
    //     }
    //   }
    // }
}
</script>

<style scoped>

.nav {
  height: 50px;
  width: 100%;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.nav-title a{
    text-decoration: none;
    color:#e63232;
}
.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #e63232;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #e63232;
  cursor: pointer;
}

.nav > .nav-links > a:hover {
  background-color: white;
  cursor: pointer;
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 40px;
    height: 15px;
    padding: 15px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: #fff;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 7px;
    border-top: 2px solid #ccc;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>