<template>
  <div>
    <v-header></v-header>
    <div class="tab">
        <div class="tab-item">
          <!-- use router-link component for navigation. -->
          <!-- specify the link by passing the 'to prop. -->
          <!-- '<router-link' will be rendered as an '<a>' tag by default. -->
          <!-- <router-link to="/goods">商品</router-link> -->
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
    </div>
    <!-- 路由外链 -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <!-- <router-view name="ratings"></router-view>
    <router-view name="seller"></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/v-header.vue'
const ERR_OK = 0
export default {
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('/api/seller/').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: auto
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)
</style>
