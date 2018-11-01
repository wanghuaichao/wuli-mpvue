<template>
    <div class="container">
        <div class="doc-title wuli-hairline__bottom">CELL</div>
        <div class="doc-description">单元格</div>
        <div class="wuli-panel">
            <wp-cell title="单行列表" ></wp-cell>
        </div>
        <view class="wuli-panel">
            <wp-cell title="单行列表" value="详细信息"></wp-cell>
        </view>
        <view class="wuli-panel">
            <wp-cell title="单行列表" label="附加描述" value="详细信息"></wp-cell>
        </view>
        <view class="wuli-panel">
            <wp-cell title="单行列表" is-link icon="icon-108"></wp-cell>
            <wp-cell title="单行列表" is-link value="详细信息"></wp-cell>
        </view>
        <mptoast />
    </div>
</template>

<script>
import mptoast from 'mptoast'
import wpCell from '@/components/cell'

export default {
    data() {
        return {
            
        }
    },
    onShow() {
       
    },
    methods: {
        tap() {
            this.$mptoast('点击了当前单元格')
        }
    },
    components: {
        wpCell,
        mptoast
    }
}
</script>
