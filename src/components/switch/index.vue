<template>
    <div class="wuli-switch" 
    :class="[
    checked ?'wuli-switch__on':'wuli-switch__off',
    text ?'wuli-switch__text':''
    ]" :style="[color ? 'background-color:' + color+';border:1px solid'+color: '' ]"
     @click="click">
        <div class="wuli-switch_word" v-if="text">{{text==1?'on':'开'}}</div>
        <div class="wuli-switch__circle" :class="[text?'wuli-switch__circle2':'']"></div>
        <div class="wuli-switch__bg" :class="[text?'wuli-switch__bg2':'']"><span v-if="text">{{text==1?'off':'关'}}</span></div>
    </div>
</template>

<script>
/**
 * wp-switch
 * @module components/switch
 * @param {string} [color] - 自定义颜色
 * @param {Number} [text] - 显示文字提示；1为英文；2为汉字	
 * @param {boolean} [checked] - 是否开启
 * @example
 * <wp-switch checked text='1' color="red">默认按钮</wp-switch>
 */
export default {
    props:{
     checked:Boolean,
     text:Number,
     color:String
   },
  data() {
    return {};
  },
  methods: {
      click(){
          this.checked=!this.checked
          this.$emit('change',this.checked);
      }
  },
  components: {}
};
</script>

<style>
</style>
