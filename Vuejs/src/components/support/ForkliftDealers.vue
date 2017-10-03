<template>
    <div class="forklift-dealers">
        forklift-dealers
        <MyCallToAction></MyCallToAction>

        <div class="clearfix"></div>
    </div>
</template>

<script>
import MyCallToAction from '../commons/MyCallToAction'
export default {
  name: 'forklift-dealers',
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
