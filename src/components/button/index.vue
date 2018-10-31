<template>
    <button 
        class="wuli-btn"
        :class="[buttonClass, typeClass, {sizeClass, loadClass, disabledClass}]" 
        :plain="plain" 
        :disabled="disabled" 
        :loading="loading" 
        @click="click">
        <slot></slot>
    </button>
</template>

<script>
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
        plain: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        styles: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            let buttonClass = `${this.styles}`
            return buttonClass
        },
        typeClass() {
            let typeClass = `wuli-btn__${this.type}`
            return typeClass
        },
        sizeClass() {
            let sizeClass = `wuli-btn__${this.size}`
            return sizeClass
        },
        loadClass() {
            return this.loading ? `wuli-btn__${this.loading}` : ''
        },
        disabledClass() {
            return this.disabled ? `wuli-btn__${this.disabled}` : ''
        },
    },
    methods: {
        click(e) {
            if (!this.loading && !this.disabled) {
                this.$emit('click', e)
            }
        }
    }
}
</script>
