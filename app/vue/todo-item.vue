<template lang="pug">
    div#vue-route6
        h2 todoリスト
        | {{ inputItem }}
        ul
            li(v-for="item in groceryList" :key="item.id")
                | {{ item }}
        button(@click="groceryList.push({ id: groceryList.length + 1, text: '追加されたアイテム'})") タスク追加
        button(@click="groceryList.pop()") タスク削除
        button(@click="serchItem(/野菜/)") Foo探す
</template>

<script>
import Vue from "vue";

const listItem = Vue.extend({
    props: ['todo'],
    templete: `
        <li>
            <button>Finish button</button>
        </li>
    `
})

Vue.component('list-item', listItem)

export default {
  data() {
    return {
      inputItem: "",
      groceryList: [
        { id: 1, text: "野菜" },
        { id: 2, text: "チーズ" },
        { id: 3, text: "何か他の食べたいもの" }
      ]
    };
  },
  methods: {
      serchItem (value) {
          this.inputItem = this.groceryList.filter( item => {
              return item.text.match(value)
          })
      }
  }
};
</script>

<style lang="stylus"></style>