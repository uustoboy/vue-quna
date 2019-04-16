<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation',
  components: {
  },
  data (){
    return {
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>
<style lang="stylus" scoped>
.v-enter,.v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity 0.5s
</style>
