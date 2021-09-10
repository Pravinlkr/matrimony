<template>
  <div class="mainBox">
      <div class="headerBox">
          <h3>Welcome {{userName}}</h3>
          <div class="resultAddBox">
              <button class="result">See Result</button>
              <AddQuestion />
          </div>
      </div>
      <div class="questionsContainer">
          <div class="headingBox">
              <h5>Your Questions</h5>
          </div>
          <div class="questionBox">
              <div class="question">
                  <p>This is my question...</p>
              </div>
              <div class="modificationBox">
                  <button class="edit">Edit</button>
                  <button class="remove">Remove</button>
              </div>
          </div>
          <div class="questionBox">
              <div class="question">
                  <p>This is another question...</p>
              </div>
              <div class="modificationBox">
                  <button class="edit">Edit</button>
                  <button class="remove">Remove</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { auth } from '@/firebase.js'
import AddQuestion from './AddQuestion.vue';
export default {
  components: { AddQuestion },
    name:'Gconsole',
    setup(){
        let userEmail = auth.currentUser.email;
        let userName = userEmail.split('@')[0]

        return{
            userName
        }
    }
}
</script>

<style>
.mainBox{
    width:80%;
    margin:1% auto;
}
.headerBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.headerBox h3{
    color:#4f4f4f;
}
button.result{
    height:35px;
    background-color: white;
    border:1px solid #ccc;
    padding:5px 15px;
    margin-right: 10px;
    border-radius: 5px;
}
button.addQuestion{
    background-color: #e0b246;
    height: 35px;
    border:none;
    outline:none;
    padding:5px 15px;
    border-radius: 5px;
}
button.edit{
    background-color: white;
    height: 35px;
    border:1px solid #e0b246;
    color:#e0b246;
    outline:none;
    padding:5px 25px;
    border-radius: 5px;
    margin-right: 10px;
}
button.remove{
    background-color: white;
    height: 35px;
    border:1px solid #e63232;
    color:#e63232;
    outline:none;
    padding:5px 15px;
    border-radius: 5px;
}
.resultAddBox{
    margin-top: 1%;
}
.questionBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border:1px solid #f7f7f7;
    border-radius: 10px;
    padding:10px;
    margin-bottom: 2%;
}
.modificationBox{
    margin-top: 7px;
}
</style>