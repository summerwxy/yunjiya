<template>
    <div class="stickynav">
        <div>
            <div class="wrapper-stickynav">
                <div class="container-fluid background-grey-lightest">
                    <div class="container-stickynav background-grey-lightest">
                        <div class="container">
                            <div class="background-grey-lightest">
                                <div class="container-stickynav-parent">
                                    <ul id="mainpar-stickynav-anchor-list" class="nav text-black">
                                        <li v-for="(value, key, index) in items" role="presentation">
                                            <a :href="'#' + key" class="btn-stickynav">{{value}}</a>
                                        </li>
                                        <li class="pull-right container-cta" role="presentation">
                                            <div></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ystickynav',
  props: ['items'],
  mounted () {
    this.$nextTick(() => {
      window.initStickyNav()
    })
  }
}
</script>

<style scoped>

</style>
