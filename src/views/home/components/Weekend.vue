<template>
  <div >
      <div class="title">
          周末去哪
      </div>
      <ul>
          <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  components: {

  },
  data () {
    return {
        recommendList : [
            {
                id : '001',
                imgUrl : 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
                title : '北京赏花好地方',
                desc : '乱花渐欲迷人眼，京城赏花大搜索'
            },
            {
                id : '002',
                imgUrl : 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                title : '京城周末撒欢',
                desc : '在帝都过周末，不仅仅是城中游！'
            },
            {
                id : '003',
                imgUrl : 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
                title : '京城溜娃必去',
                desc : '德智体美劳全面发展的亲子日，这些地方该去看看…'
            }
        ]
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
