import firebase from "firebase/app";
import "firebase/auth";
import { auth, createUser } from '@/firebase.js'

const state = {
    userDetail :[],
    error:'',
    message:''
}
const getters = {

}

const mutations = {
    SIGNUP(state,payload){
        state.userDetail = payload
    },
    LOGIN(state){
        state.message = 'Login Successfull'
    },
    LOGIN_WITH_GOOGLE(state){
        state.message = 'Login wiht google successful'
    }
}

const actions = {
    async loginWithEmail({state, commit},payload){
        try{
            await auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then(function(){
                commit('LOGIN')
            })
        }
        catch(err){
            state.error = err.message
        }
    },
    async loginWithGoogle({state, commit},payload){
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result)
            if(payload.action == 'register'){
                payload.email = auth.currentUser.email
                payload.uid = auth.currentUser.uid
                console.log(payload)
                createUser(payload)
            }
            
            commit('LOGIN_WITH_GOOGLE')
        })
        .catch(err => state.error=err.message)
    },
    
    async signUpWithEmail({state, commit},payload){
        try{
           
            await auth.createUserWithEmailAndPassword(payload.email, payload.password)
            .then(function () {
                console.log('inside action called')
                const user = auth.currentUser.uid
                payload.uid = user
                auth.currentUser.updateProfile({
                    displayName: payload.email,
                })
            })
            createUser(payload)
            commit('SIGNUP', payload)
            return true
        }
        catch(err){
            console.log('error'+err)
            state.error = err.message;
        }
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}