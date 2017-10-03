<template>
    <div class="why">
        why
        <MyCallToAction></MyCallToAction>

        <div class="clearfix"></div>
    </div>
</template>

<script>
import MyCallToAction from '../commons/MyCallToAction'
export default {
  name: 'why',
  components: {
    MyCallToAction
  },
  data () {
    return {
      dummy: 'DUMMY'
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<style scoped>

</style>
