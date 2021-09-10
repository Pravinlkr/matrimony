import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "./store/store"
import { auth } from '@/firebase.js'

let app;
 auth.onAuthStateChanged(() => {
   if(!app){
    app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount('#app')
   }
    
});

