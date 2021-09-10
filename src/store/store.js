import { createStore } from 'vuex'
import user from './modules/user.module'
import question from './modules/question.module'
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules:{
        user,
        question
    }
  })