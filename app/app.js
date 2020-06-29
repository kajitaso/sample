import Vue from 'vue'
import TodoItem from './vue/todo-item.vue'

var route = new Vue({
  el: '#vue-route',
  data: {
    message: 'こんにちは Vue! VueCliが既存reactと競合する問題が解決しない。'
  }
})

var route2 = new Vue({
  el: '#vue-route2',
  data: {
    message: 'あなたはこのページを' + new Date().toLocaleString() + "に読み込んだ"
  }
})

var route3 = new Vue({
  el: '#vue-route3',
  data: {
    seen: true
  }  
})

var route4 = new Vue({
  el: '#vue-route4',
  data: {
    todos: [
      { text: 'VueXはまだ考えていない' },
      { text: '単一コンポーネント実装がしたい' },
      { text: 'とりあえず基礎文法を覚える' }
    ]
  }
})

var route5 = new Vue({
  el: '#vue-route5',
  data: {
    message: 'ちわっす Vue.js'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var route6 = new Vue({
  el: '#vue-route6',
  components: { 
    'todo-item': TodoItem 
  },
  template: '<todo-item/>'
})
