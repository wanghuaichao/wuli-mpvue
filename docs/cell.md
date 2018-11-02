# Cell
单元格

> `<wp-cell />` 通用单元格组件。

?> `<wp-cell />` 使用实例

``` vue
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
```

?> `<wp-cell />` 参数说明

### title
* 类型： String
* 默认值： 无
* 说明：标题

### icon
* 类型：String
* 默认值：iconfont
* 说明：名称前是否带 `icon` 图标，主要用于 [Iconfont](http://www.iconfont.cn) 的使用，所以只接收当前项目中的icon字体类名

### label
* 类型：String
* 默认值：无
* 说明：备注信息

### isLink
* 类型：Boolean
* 默认值：false
* 说明：是否可点击跳转

### value
* 类型：string
* 默认值：无
* 说明：名称前是否带 loading 图标

