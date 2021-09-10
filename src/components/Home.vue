<template>
  <div class="homePage">
    <div class="imgSection">
      <img src="../assets/mainimg.jpg" alt="Couple Image">
    </div>
    <div class="contentSection">
      <h1>Welcome <b>{{userName}}</b></h1>
      <p>Love is the bond that connects us all but finding a life partner can be incredibly difficult. 
        But that's what people say: it'll take time but not now. Your partern is just few questions away.</p>
      <button @click="goToConsole()">Go To Console</button>
    </div>
      
  </div>
</template>

<script>
// import { usersCollection } from '@/firebase.js'
// import { ref } from 'vue';
// import firebase from 'firebase/app'
// import { useStore } from 'vuex'
import { auth } from '@/firebase.js'
import { useRouter } from 'vue-router'
export default {
    name:'Home',
    setup(){
      // const store = useStore()
      const router = useRouter()
      let userEmail = auth.currentUser.email;
      let userName = userEmail.split('@')[0]

      // store.dispatch('addQuestion')
      function goToConsole(){
          router.push('/gconsole')
      }
      return{
        userName,
        goToConsole
      }
    }
}
</script>

<style scoped>
  .homePage{
    display:flex;
    flex-wrap: wrap;
    max-height: 70vh;
    width:80%;
    margin:5% auto;
  }
  .imgSection{
    width:40%;
  }
  .imgSection img{
    width:80%;
    margin:1% auto;
  }
  .contentSection{
    width:40%;
    margin:3% 10%;
  }
  .contentSection h1{
    color:#4f4f4f;
  }
  .contentSection p{
    color:#707070;
    line-height: 1.5;
  }
  .contentSection button{
    background-color: #e0b246;
    height: 35px;
    border:none;
    outline:none;
    padding:5px 15px;
    border-radius: 5px;
  }
</style>