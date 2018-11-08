<template>
    <div class="wuli-switch" :class="[
    checked ?'wuli-switch__on':'wuli-switch__off',
    text ?'wuli-switch__text':''
    ]" @click="click">
        <div class="wuli-switch_word" v-if="text">{{text==1?'on':'开'}}</div>
        <div class="wuli-switch__circle" :class="[text?'wuli-switch__circle2':'']"></div>
        <div class="wuli-switch__bg" :class="[text?'wuli-switch__bg2':'']"><span v-if="text">{{text==1?'off':'关'}}</span></div>
    </div>
</template>

<script>
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
