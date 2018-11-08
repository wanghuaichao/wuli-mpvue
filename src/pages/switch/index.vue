<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">Switch</div>
        <div class="doc-description">Switch 开关</div>
        <div class="wuli-panel__title">小程序组件</div>
        <div class="wuli-panel">
            <switch checked @change="switch1Change" />
            <switch checked color="#409EFF" />
            <switch checked color="#f56c6c" />
            <switch checked color="#e6a23c" />
            <switch @change="switch2Change" />
        </div>
        <div class="wuli-panel__title">wuli ui的switch组件</div>
        <div class="wuli-panel">
            <wp-switch checked />
        </div>
    </div>
</template>

<script>
import wpSwitch from "@/components/switch"

export default {
    data() {
        return {

        }
    },
    methods: {
        switch1Change(e) {
            console.log("switch1 发生 change 事件，携带值为", e.mp.detail.value)
        },
        switch2Change(e) {
            console.log("switch2 发生 change 事件，携带值为", e.mp.detail.value)
        }
    },
    components: {
        wpSwitch
    }
}
</script>

<style>
.wuli-panel {
    padding: 10px;
}
</style>
