<template lang="pug">
    div#question_answer
      div.container.question.mt-5.pb-3
        h2.question--title よくある質問
        div.question--box
          ul.accordion
              li(v-on:click="clickQuestion" v-for="question in questions" :key="question.id").accordion--item
                div.accordion--item__label
                  | {{ question.text }}
                  span.accordion--plus
                div.accordion--content__wrap
                  div.accordion--content
                    p.accordion-content__text
                      | {{ question.answer }}
</template>

<script>
import Vue from "vue";
import { TextConsts } from "../consts"

export default {
  data() {
    return {
      questions: TextConsts.QUESTION_ARRAY
    };
  },
  methods: {
      clickQuestion (event) {
        const targetElement = event.target;
        const clickElement = event.target.parentNode;
        const contentElement = clickElement.lastChild;
        const contentElementChild = contentElement.lastChild;
        const targetStyle = window.getComputedStyle(targetElement)
        const clickStyle = window.getComputedStyle(clickElement)
        const contentStyle = window.getComputedStyle(contentElement)
        const contentChildStyle = window.getComputedStyle(contentElementChild)
        const contentHeight = contentChildStyle.getPropertyValue("height");
        if(clickElement.classList.contains('is-active') === true) {
          clickElement.classList.toggle('is-active');
          contentElement.style.height = "0px";
        } else {
          clickElement.classList.toggle('is-active');
          contentElement.style.height = contentHeight;
        }
      }
  }
};
</script>

<style lang="scss" scoped>
.question {
  &--title {
    padding: 40px 30px;
    text-align: center;
    border-bottom: 2px solid #0563a6;
  }
  &--box {
    padding: 30px 20px;
    margin: 30px 20px;
    border: 2px solid rgb(114, 183, 230);
    overflow: hidden;
  }
  @media (max-width: 812px) {
  border-radius: 0px;
  }
  background-color: #dbedf6;
  border-radius: 20px;
}

.accordion {
  &--item {
    //アコーディオンを開いている時
    &.is-active {
      padding-bottom: 20px;
      .accordion--content__wrap {
        visibility: visible;
        height: fit-content;
        opacity: 1;
        .accordion--content {
          height: fit-content;
        }
      }
      .accordion--plus {
        &::before {
          transform: rotate(0)!important;
        }
      }
    }
    &__label {
      @media (min-width: 812px) {
        padding: 30px 60px 30px 80px;
        font-size: 1.3rem;
        &::before {
          content: "Q.";
          color: #0563a6;
          font-size: 1.5rem;
          position: absolute;
          pointer-events: none;
          left: 30px;
          top:  25px;
      }
      }
      @media (max-width: 812px) {
        padding: 10px 30px 15px 40px;
        &::before {
          content: "Q.";
          color: #0563a6;
          font-size: 1.5rem;
          position: absolute;
          pointer-events: none;
          left: 10px;
          top: 0px;
      }
      }
    }
    font-weight: bold;
    cursor: pointer;
    line-height: 2;
    position: relative;
    overflow: hidden;
    border-bottom: 2px solid rgb(114, 183, 230);
  }
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;

  &--content__wrap {
    opacity: 0;
    transition: all 0.4s ease-out;
    height: 0px;
    pointer-events: none;
    @media (max-width: 812px) {
      padding-bottom: 10px;
    }
    @media (min-width: 812px) {
      padding-bottom: 0px;
    }
    visibility: hidden;
  }
  &--content {
    position: relative;
    word-break: break-word;
    line-height: 2;
    font-weight: normal;
      @media (min-width: 812px) {
        padding: 0px 60px 0px 80px;
        font-size: 1.3rem;
        &::before {
          content: "A.";
          color: #d31c0f;
          font-size: 1.5rem;
          position: absolute;
          pointer-events: none;
          left: 30px;
          top: -3px;
      }
      }
      @media (max-width: 812px) {
        padding: 0px 30px 0px 40px;
        &::before {
          content: "A.";
          color: #d31c0f;
          font-size: 1.5rem;
          position: absolute;
          pointer-events: none;
          left: 10px;
          top: -10px;
      }
      }
  }
}
.accordion--plus {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  display: block;
  align-items: center;
  pointer-events: none;
  @media (min-width: 768px) {
    top: 38px;
  }
  @media (max-width: 768px) {
    top: 12px;
    right: 5px;
  }
  &::before, &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #0563a6;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transition: transform 0.4s;
  }
  &::before {
    transform: rotate(90deg);
  }
}
</style>