<template>
    <div class="wuli-badge__count" :class="[type?'wuli-badge__'+type:'']" :style="[color ? 'background-color:' + color : '' ]">
         <slot></slot>
    </div>
</template>

<script>
/**
 * wp-badge
 * @module components/badge
 * @param {String} [color] - 自定义颜色
 * @param {String} [type] - 可选颜色，默认有四种
 * @example
 * <wp-badge type="success" color="red">默认按钮</wp-badge>
 */
export default {
    props:{
        type:String,
        color:String
    },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
