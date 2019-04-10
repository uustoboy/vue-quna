<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  components: {

  },
  data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id : '0001',
          imgUrl : 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e5104d77fbfdb522bd4fe4f0451e517f.jpg_750x200_7d44f64b.jpg'
        },
        {
          id : '0002',
          imgUrl : 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
        }]
      }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background #fff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 26.26%
    background #eee
    .swiper-img
      width 100%
    
</style>
