<template>
  <div class="registerBox">
      <h3>Create Account</h3>
      <div v-if="error" class="error">{{error}}</div>
      <input type="email" v-model="email" placeholder="Enter Email"><br>
      <input type="password" v-model="password" placeholder="Enter Password"><br>
      <input type="password" v-model="cpassword" placeholder="Confirm Password"><br>
      <input type="text" v-model="role" placeholder="Enter Role (admin or guest)"><br>
      <button @click="CreateAccount()">Signup</button><br>
      <button @click="googleSignIn()">Signup With Google</button><br>
      <a href="/login">Have account? Login</a>
  </div>
</template>

<script>
// import firebase from "firebase/app";
import "firebase/auth";
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name:'Register',
    setup(){
        const email = ref('')
        const password = ref('')
        const cpassword = ref('')
        const role = ref('')
        const error = ref('')
        const router = useRouter()
        const store = useStore()

        async function googleSignIn(){
        await store.dispatch('loginWithGoogle',{role:'guest',action:'register'})
        router.push('/')
        }

        function CreateAccount(){
          if(email.value){
              if(password.value){
                  if(cpassword.value){
                      if(role.value){
                      if(password.value == cpassword.value){
                          store.dispatch('signUpWithEmail',{email:email.value, password:password.value, role:role.value})
                          router.push('/')
                      }else{
                          error.value = 'Password did not Match, Try Again'
                      }
                      }else{
                          error.value = 'Please Enter Role As admin or guest'
                      }
                  }else{
                      error.value = 'Please Confirm Password'
                  }
              }else{
                  error.value = 'Password is Required'
              }
          }else{
              error.value = 'Email is Required';
          }
      }
        return{
            email,
            password,
            cpassword,
            role,
            error,
            googleSignIn,
            CreateAccount
        }
    }
    // data(){
    //     return{
    //         email: '',
    //         password: '',
    //         cpassword:'',
    //         error:''
    //     }
    // },
    // methods:{
    //     async googleSignIn(){
    //     const provider = new firebase.auth.GoogleAuthProvider()
    //     firebase.auth().signInWithPopup(provider)
    //     .then(result => {
    //         console.log('result', result)
    //         this.$router.push('/')
    //     })
    //     .catch(error => this.error=error.message)

    //     },
    //   async CreateAccount(){
    //       if(this.email){
    //           if(this.password){
    //               if(this.cpassword){
    //                   if(this.password == this.cpassword){
    //                       try{
    //                         const user  = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    //                         console.log(user);
    //                         this.$router.push("/");
    //                     }
    //                     catch(error){
    //                         this.error = error.message;
    //                     }
    //                   }else{
    //                       this.error = 'Password did not Match, Try Again'
    //                   }
    //               }else{
    //                   this.error = 'Please Confirm Password'
    //               }
    //           }else{
    //               this.error = 'Password is Required'
    //           }
    //       }else{
    //           this.error = 'Email is Required';
    //       }
    //   }
    // }
}
</script>

<style scoped>
.registerBox{
    width:25%;
    margin:7% auto;
    border:1px solid #ccc;
    border-radius: 10px;
    padding-bottom: 30px;
}
.error{
  color:red;
  font-size: 12px;
  text-align: center;
}
.registerBox h3{
    margin-left: 4%;
}
.registerBox input{
    width:90%;
    margin:2% 4%;
    height: 35px;
    border:1px solid #ccc;
    outline: none;
    border-radius: 5px;
}
.registerBox button{
    margin:3% 4%;
    height: 36px;
    border:none;
    border-radius: 5px;
    background-color: #e0b246;
    padding:5px 15px;
}
.registerBox a{
    text-decoration: none;
    color:#e63232;
    margin-left: 4%;
    font-size: 12px;
}
@media (max-width:500px) {
    .registerBox{
        width:80%;
        margin:20% auto;
    }
}
</style>