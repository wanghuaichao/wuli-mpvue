<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">Progress</div>
        <div class="doc-description">Progress 进度条</div>
        <div class="wuli-panel__title">基本进度条（环形）</div>
        <div class="wuli-panel" style="display:flex;">
            <div class="cont">
                <wp-progress unit="200" :percent="percent" canvasId="progress" strokeType="round">
                    <span slot="text">{{percent * 100}}%</span>
                </wp-progress>
            </div>
            <div class="cont">
                <wp-progress unit="200" :percent="percents" canvasId="progresss" strokeType="round" strokeColor="#ff0000" strokeWidth='1'>
                    <span slot="progresss">{{percents * 100}}%</span>
                </wp-progress>
            </div>
            <div class="cont">
                <wp-progress unit="200" :percent="percent3" canvasId="progress3" strokeType="round" strokeColor="#66FF66" strokeWidth='1'>
                    <span slot="progress3">{{percent3 * 100}}%</span>
                </wp-progress>
            </div>
        </div>
    </div>
</template>

<script>
import wpProgress from "@/components/progress";
export default {
  data() {
    return {
      percent: 0.2,
      percents:0.9,
      percent3:1
    };
  },
  methods: {},
  components: {
    wpProgress
  }
};
</script>

<style>
.wuli-panel {
  padding: 10px;
}
.cont{
    width:100px;
    height:100px;
}
</style>
