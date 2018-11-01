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
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
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
        }
    }
}
</script>
