<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" @click.stop="decreaseCart($event)" v-show="food.count>0">
        <!--内层动画-->
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart($event)"></div>
  </div>
</template>

<script>
  /* eslint-disable comma-spacing,comma-spacing,padded-blocks */

  import Vue from 'vue'
  /* eslint-disable no-trailing-spaces,key-spacing,space-before-function-paren,space-before-blocks,keyword-spacing */

  export default{
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      addCart(event){
        if(!event._constructed){
          return
        }

        if(!this.food.count){
          Vue.set(this.food,'count', 1)

        }else{
          this.food.count++
        }
      },
      decreaseCart(){
        if(!event._constructed){
          return
        }
          this.food.count--
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease //外层动画原始状态
      display: inline-block
      padding: 6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner //内层动画原始状态
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active //vue动画过渡属性
        transition: all 0.4s linear
      &.move-enter, &.move-leave-active //vue动画过渡属性
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
