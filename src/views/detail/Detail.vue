<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  props:{
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list:[
        {
          title:'成人票'
        },

        {
          title:'学生票'
        },
        {
          title:'儿童票'
        },
        {
          title:'特惠票'
        }
      ]
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
.content
  height 1000px
</style>
