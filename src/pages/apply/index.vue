<template>
  <div class="container">
      <button @click="showToast">弹出层</button>
      <i class="iconfont icon-wenjian"></i>
      <mptoast />
  </div>
</template>

<script>
import mptoast from 'mptoast'

export default {
    data() {
        return {
            id: 0
        }
    },
    onShow() {
        const { id } = this.$root.$mp.query
        this.id = id
    },
    onUnload() {
        wx.hideNavigationBarLoading()
    },
    methods: {
        showToast () {
            this.$mptoast('我是提示信息', 'error', 2000)
        },
    },
    components: {
        mptoast
    },
};
</script>
