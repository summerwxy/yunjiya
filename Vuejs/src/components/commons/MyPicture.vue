<template>
    <picture>
        <!--[if IE 9]><video style="display: none;"><![endif]-->
        <source :srcset="src1(src)" media="(max-width: 450px)">
        <source :srcset="src2(src)" media="(max-width: 768px)">
        <!--[if IE 9]></video><![endif]-->
        <img class="img-responsive " :src="src" :alt="alt" :title="title">
    </picture>
</template>

<script>
export default {
  name: 'picture',
  props: ['src', 'alt', 'title'],
  data () {
    return {
      msg: 'i am my-picture tag'
    }
  },
  methods: {
    suffix: function (fn) {
      var suf = fn.substr(fn.length - 3)
      var result = ''
      if (suf === 'png') {
        result = 'png'
      } else if (suf === 'jpg') {
        result = 'jpg'
      } else if (suf === 'gif') {
        result = 'jpg'
      }
      return result
    },
    src1: function (src) {
      return src.startsWith('/static/') ? src : src + '.transform/mobile-image/img.' + this.suffix(src)
    },
    src2: function (src) {
      return src.startsWith('/static/') ? src : src + '.transform/tablet-image/img.' + this.suffix(src)
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<style scoped>

</style>
