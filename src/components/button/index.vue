<template>
    <button 
        class="wuli-btn"
        :class="[
            type ? 'wuli-btn__' + type : '',
            size ? 'wuli-btn__' + size : '',
            styles ? styles : '',
            {
                'is-loading': loading, 
                'is-disabled': disabled,
                'is-round': round,
                'is-circle': circle
            }
        ]" 
        :plain="plain" 
        :disabled="disabled" 
        :loading="loading" 
        :open-type="openType"
        :app-parameter="appParameter"
        :lang="lang"
        :session-from="sessionFrom"
        :send-message-title="sendMessageTitle" 
        :send-message-path="sendMessagePath" 
        :send-message-img="sendMessageImg" 
        :show-message-card="showMessageCard"
        @click="click"
        @getuserinfo="getuserinfo" 
        @contact="contact" 
        @getphonenumber="getphonenumber" 
        @error="error">
        <slot></slot>
    </button>
</template>

<script>
/**
 * wp-button
 * @module components/button
 * @desc 单元格
 * @param {string} [type] - 类型
 * @param {string} [size] - 尺寸
 * @param {Boolean} [plain] - 是否朴素按钮	
 * @param {boolean} [disabled] - 是否禁用状态
 * @param {boolean} [styles] - 自定义样式
 * @param {boolean} [loading] - 是否加载中状态
 * @param {boolean} [round] - 是否圆角按钮
 * @param {boolean} [circle] - 是否圆形按钮
 * @example
 * <wp-button type="normal" size="large">默认按钮</wp-button>
 */
export default {
    props: {
        type: {
            type: String,
            default: 'normal'
        },
        size: {
            type: String,
            default: 'normal'
        },
        plain: Boolean,
        disabled: Boolean,
        styles: String,
        loading: Boolean,
        round: Boolean,
        circle: Boolean,
        openType: String,
        appParameter: String,
        lang: {
            type: String,
            default: 'zh_CN'
        },
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    computed: {
        buttonClass() {
            let buttonClass = `${this.styles}`
            return buttonClass
        }
    },
    methods: {
        click(e) {
            if (!this.loading && !this.disabled) {
                this.$emit('click', e)
            }
        },
        getuserinfo(e) {
            this.$emit('getuserinfo', e)
        },
        contact(e) {
            this.$emit('contact', e)
        },
        getphonenumber(e) {
            this.$emit('getphonenumber', e)
        },
        error(e) {
            this.$emit('error', e)
        }
    }
}
</script>
