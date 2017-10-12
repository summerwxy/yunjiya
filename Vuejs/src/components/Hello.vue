<template>
  <MyCarousel/>
</template>

<script>
import MyCarousel from './commons/MyCarousel'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MyCarousel
  }
}
</script>

<style scoped>

</style>
