<template>
    <div class="container">
        <div class="doc__title wuli-hairline__bottom">BUTTON</div>
        <div class="doc-description">按钮</div>
        <div class="wuli-panel__title">普通按钮</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <button class="wuli-btn">默认按钮</button>
                <button class="wuli-btn wuli-btn__primary">主要按钮</button>
                <button class="wuli-btn wuli-btn__success">主要按钮</button>
                <button class="wuli-btn wuli-btn__info">信息按钮</button>
                <button class="wuli-btn wuli-btn__danger">危险按钮</button>
                <button class="wuli-btn wuli-btn__warn">警告按钮</button>
            </div>
        </div>

        <div class="wuli-panel__title">大号按钮，没有边框线及圆角</div>
        <div class="wuli-panel">
            <button class="wuli-btn wuli-btn__large wuli-btn__primary">确认付款</button>
            <button class="wuli-btn wuli-btn__large wuli-btn__warn">立即购买</button>
            <button class="wuli-btn wuli-btn__large wuli-btn__danger">立即购买</button>
        </div>

        <div class="wuli-panel__title">小号按钮</div>
        <div class="wuli-panel" style="padding: 15px;">
            <button class="wuli-btn wuli-btn__small">取消订单</button>
            <button class="wuli-btn wuli-btn__small wuli-btn__primary">确认付款</button>
        </div>

        <div class="wuli-panel__title">迷你按钮</div>
        <div class="wuli-panel" style="padding: 15px;">
            <button class="wuli-btn wuli-btn__mini wuli-btn__primary">取消订单</button>
            <button class="wuli-btn wuli-btn__mini wuli-btn__info">确认付款</button>
            <button class="wuli-btn wuli-btn__mini wuli-btn__warn">确认付款</button>
            <button class="wuli-btn wuli-btn__mini wuli-btn__danger">确认付款</button>
        </div>

        <div class="wuli-panel__title">Loading</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <button class="wuli-btn wuli-btn__loading">取消订单</button>
                <button class="wuli-btn wuli-btn__loading wuli-btn__primary">确认付款</button>
                <button class="wuli-btn wuli-btn__loading wuli-btn__danger">确认付款</button>
                <button class="wuli-btn wuli-btn__loading wuli-btn__warn">确认付款</button>
            </div>
        </div>

        <div class="wuli-panel__title">Disabled</div>
        <div class="wuli-panel">
            <div class="wuli-btns">
                <button class="wuli-btn wuli-btn__disabled" disabled>取消订单</button>
                <button class="wuli-btn wuli-btn__disabled wuli-btn__primary" disabled>确认付款</button>
                <button class="wuli-btn wuli-btn__disabled wuli-btn__danger" disabled>确认付款</button>
                <button class="wuli-btn wuli-btn__disabled wuli-btn__warn" disabled>确认付款</button>
            </div>
        </div>
        
        <wp-button type="default" size="large">默认按钮</wp-button>
        <wp-button type="primary" size="large">主要按钮</wp-button>
        <wp-button type="warn" size="large">警告按钮</wp-button>
        <wp-button type="defualt" size="normal" plain>默认按钮</wp-button>
        <wp-button type="primary" size="normal" plain>主要按钮</wp-button>
        <wp-button type="warn" size="normal" plain>警告按钮</wp-button>
    </div>
</template>

<script>
import wpButton from '@/components/button'

export default {
    data() {
        return {
            
        }
    },
    onShow() {
       
    },
    methods: {
       
    },
    components: {
        wpButton
    }
}
</script>
