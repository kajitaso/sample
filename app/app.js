import Vue from 'vue'
import TodoItem from './vue/todo-item.vue'
import QuestionAnswer from './vue/question-answer.vue'

var question = new Vue({
  el: '#question-answer',
  components: { 
    'question-answer': QuestionAnswer 
  },
  template: '<question-answer/>'
})