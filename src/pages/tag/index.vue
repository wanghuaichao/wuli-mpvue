<template>
    <div class="container">
        <div>基础用法</div>
        <wp-tag>标签一</wp-tag>
        <wp-tag type="success">标签二</wp-tag>
        <wp-tag type="info">标签三</wp-tag>
        <wp-tag type="warning">标签四</wp-tag>
        <wp-tag type="danger">标签五</wp-tag>
    </div>
</template>

<script>
import wpTag from '@/components/tag'
export default {
  data() {
    return {};
  },
  onShow() {},
  methods: {},
  components: {
      wpTag
  }
};
</script>
