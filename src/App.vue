<template>
  <div id="appBox">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
       <div class="tab-item"><router-link to="/goods">商品</router-link></div>
       <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
       <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars,key-spacing,no-trailing-spaces,space-before-function-paren,space-before-function-paren,arrow-spacing,keyword-spacing,keyword-spacing,space-infix-ops,space-before-blocks,padded-blocks */

  import header from './components/header/header.vue'
  export default{
    components:{
      'v-header':header
  },
// eslint-disable-next-line space-before-blocks
    data(){
      return {
          seller:{}
      }
    },
    created(){
      this.$http.get('/api/seller').then((res)=>{
          let sellData = res.body
          if(sellData.errno===0){
//            console.log(sellData.data)
            this.seller = sellData.data
          }

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "common/style/mixin.styl"

   #appBox
     .tab
       display: flex
       width:100%
       height: 40px
       line-height:40px
       border-1px(rgba(7,17,27,0.1))
       .tab-item
          flex:1
          text-align:center
          &>a
            display:block
            text-decoration:none
            font-size:20px
            color:rgb(77,85,93)
            &.active
              color:rgb(240,20,20)

</style>
