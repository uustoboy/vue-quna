<template>
  <div class="list">
      <div class="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >
        {{item}}
      </div>
  </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props:{
    cities: Object
  },
  components: {
  },
  data (){
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  update () {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    letters(){
      const letters = [];
      for(let i in this.cities){
        letters.push(i);
      }
      return letters;
    }
  },
  methods:{
    handleLetterClick(e){
      this.$emit('change',e.target.innerText);
    },
    handleTouchStart () {
      this.touchStatus = true;
    },
    handleTouchMove (e) {
      if(this.touchStatus){
        if( this.timer ){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY)/20);
          if( index >=0 && index < this.letters.length ){
            this.$emit('change',this.letters[index]);
          }
        }, 16);

      }
    },
    handleTouchEnd () {
      this.touchStatus = false;
    },

  }
}
</script>
<style lang="stylus" scoped>
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  .item
    line-height .4rem
    color $bgColor
    text-align center
</style>
