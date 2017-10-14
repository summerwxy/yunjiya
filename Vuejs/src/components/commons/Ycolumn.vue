<template>
    <div class="column">
        <div :class="['container-fluid', bgclass]">
            <div :class="['container', bgclass]">
                <div :class="['clearfix', 'row', bgclass, yclass]" :style="'background-image: url(' + (bgimg ? bgimg : '') + ');background-repeat: no-repeat; background-size: cover; background-position: center center;'">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ycolumn',
  props: ['bgclass', 'bgimg', 'yclass']
}
</script>

<style scoped>

</style>
