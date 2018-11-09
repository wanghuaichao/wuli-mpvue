<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">Badge</div>
        <div class="doc-description">Badge 徽章</div>
        <div class="wuli-panel__title">基本徽章</div>
        <div class="wuli-panel">
            <div class="box"><wp-badge>8</wp-badge></div>
            <div class="box"><wp-badge>80</wp-badge></div>
            <div class="box"><wp-badge>100+</wp-badge></div>
        </div>
        <div class="wuli-panel__title">不同颜色徽章</div>
        <div class="wuli-panel">
            <div class="box"><wp-badge type="primary">8</wp-badge></div>
            <div class="box"><wp-badge type="danger">80</wp-badge></div>
            <div class="box"><wp-badge type="success">100+</wp-badge></div>
            <div class="box"><wp-badge type="warning">1000+</wp-badge></div>
        </div>
        <div class="wuli-panel__title">自定义颜色徽章</div>
        <div class="wuli-panel">
            <div class="box"><wp-badge color="#ff0000">66</wp-badge></div>
            <div class="box"><wp-badge color="#ff3333">new</wp-badge></div>
            <div class="box"><wp-badge color="rgba(255,0,0,.5)">hot</wp-badge></div>
        </div>
    </div>
</template>

<script>
import wpBadge from "@/components/badge";
export default {
  data() {
    return {
        
    };
  },
  methods: {
    
  },
  components: {
      wpBadge
  }
};
</script>

<style>
.wuli-panel {
  padding: 10px;
}
.box{
    display: inline-block;
    position: relative;
    width:48px;
    height:48px;
    margin-right:25px;
    border-radius: 8px;
    background-color: #eee;
}
</style>
