<template>
  <div>
    <detail-banner 
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="bannerImgs"
    ></detail-banner>
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
import axios from 'axios'
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
      sightName: '',
      bannerImg: '',
      bannerImgs: [],
      categoryList: [],
      list:[
        {
          title:'成人票',
          children:[
            {
              title:'成人三馆联票',
              children:[
                {
                  title:'成人三馆联票-某一连锁店'
                }
              ]
            },
            {
              title:'成人五馆联票'
            }
          ]
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
  methods:{
    getDetailInfo(){
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res){
      res = res.data;
      if(res.ret && res.data){
        console.log(res);
        const data = res.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.bannerImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted () {
    this.getDetailInfo();
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
