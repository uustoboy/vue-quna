<template>
  <div class="list">
      <div class="item">A</div>
  </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  components: {
  },
  data (){
    return {
    }
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
