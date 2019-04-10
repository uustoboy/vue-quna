<template>
  <div >
      <div class="title">
          周末去哪
      </div>
      <ul>
          <li class="item border-bottom" v-for="item of list" :key="item.id">
              <div class="item-img-wrapper">
                  <img :src="item.imgUrl" class="item-img"/>
              </div>
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
  @import '~styles/varibles'
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    text-indent 2em
    margin-top .2rem
    background #eee
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 36.51%
  .item-img
    width 100%
  .item-info
    padding .1rem
  .item-title
    font-size .32rem
    line-height .54rem
    ellipsis()
  .item-desc
    font-size .28rem
    line-height .4rem
    color #ccc
    ellipsis()
</style>
