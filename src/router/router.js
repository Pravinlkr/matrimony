import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Gconsole from '../components/admin/console.vue'
// import firebase from "firebase/app";
// import "firebase/auth";
import { auth } from '@/firebase.js'



const routes = [

  { 'path': '/', name: Home, component: Home, meta:{requiresAuth: true} },
  { 'path': '/login', name: Login, component: Login,},
  { 'path': "/register", name:Register, component: Register,},
  { 'path': "/:catchAll(.*)", component: Home, },
  //path for admin section
  { 'path':'/gconsole', name:Gconsole, component:Gconsole, meta:{requiresAuth: true}}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:routes
  });
  export default router;
  

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some((record)=> record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser;
  console.log('xyz')
  if(requiresAuth && !isAuthenticated ){
    next('/login')
  }
  else if(isAuthenticated && to.fullPath == '/login'){
      next('/')
    }
    else if(isAuthenticated && to.fullPath == '/register'){
      next('/')
    }
    else{
      next()
    }
  
})

