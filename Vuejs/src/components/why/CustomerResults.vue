<template>
    <div class="customer-results">
        customer-results
        <MyCallToAction></MyCallToAction>

        <div class="clearfix"></div>
    </div>
</template>

<script>
import MyCallToAction from '../commons/MyCallToAction'
export default {
  name: 'customer-results',
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
