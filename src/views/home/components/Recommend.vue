<template>
  <div >
      <div class="title">
          热销推荐
      </div>
      <ul>
          <router-link
            tag="li"
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
            :to="'/detail/'+item.id"
          >
              <img :src="item.imgUrl" class="item-img"/>
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </router-link>

      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    list: Array
  },
  components: {

  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
  //1rem = html font-size = 50px;
  //86/100;
  .title
    line-height .8rem
    text-indent 2em
    margin-top .2rem
    background #eee
  .item
    display flex
    height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
  .item-title
    font-size .32rem
    line-height .54rem
    ellipsis()
  .item-desc
    font-size .28rem
    line-height .4rem
    color #ccc
    ellipsis()
  .item-button
    background #ff9300
    padding 0 .1rem
    bborder-radius .06rem
    margin-top .16rem
    line-height .44rem
    color #fff
</style>
