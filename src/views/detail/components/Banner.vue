<template>
    <div>
        <div class="banner" @click="handelBannerClick">
            <img class=“banner-img” src="https://img1.qunarzz.com/sight/p0/1411/7b/2c92f18baec679ff917831e01a282eb0.water.jpg_600x330_e74010bd.jpg" />
            <div class="banner-info">
                <div class="banner-tittle">京娘湖(AAAA景区)</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe651;</span>11</div>
            </div>

        </div>
        <common-gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props:{
  },
  components: {
      CommonGallary
  },
  data () {
    return {
        imgs: [
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/fusion/20193/44e690c7180af8513836f612fee1728e.jpg',
            'http://img1.qunarzz.com/piao/fusion/1801/b9/b0242cb48f736202.jpg'
        ],
        showGallary: false
    }
  },
  methods:{
      handelBannerClick () {
          this.showGallary = true;
      },
      handleGallaryClose () {
          this.showGallary = false;
      }
  },
  mounted () {
  },
  computed: {

  }
}
</script>
<style lang="stylus" scoped>
  //1rem = html font-size = 50px;
  //86/100;
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
.banner-img
  width 100%
.banner-info
  display flex;
  position absolute
  left 0
  right 0
  bottom 0
  line-height .6rem
  color #fff
  background linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8))
.banner-tittle
  flex 1
  font-size .32rem
  padding 0 .2rem
.banner-number
  margin-top .2rem
  padding 0 .14rem
  line-height .32rem
  height .32rem
  border-radius  .2rem
  background rgba(0,0,0,.8)
  font-size .24rem
  .banner-icon
    font-size 0.32rem

</style>
