<template>
  <div class="home">
    <home-header/>
    <home-swiper :list="swiperList"/>
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const resData = res.data;
      if(resData.ret && resData.data){
        const data = resData.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted () {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if( this.lastCity !== this.city ){
      this.getHomeInfo();
      this.lastCity = this.city;
    }

  }
}
</script>
