<script>
export default {
    created () {
        // 调用API从本地缓存中获取数据
        // const logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
        console.log('app created and cache logs by setStorageSync')
    }
}
</script>

<style lang="less">
* {box-sizing: border-box;}
view,button,image,text{box-sizing: border-box;}
.wuliFonts {display: inline-block;}
// 全局样式
@import '~@/assets/less/common/format.less';
@import '~@/assets/fonts/iconfont.css';
@import '~@/assets/less/packages.less';
</style>
