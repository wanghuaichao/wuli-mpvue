<template>
    <button 
        :class="buttonClass" 
        :type="type" 
        :plain="plain" 
        :disabled="disabled" 
        :loading="loading" 
        :open-type="openType" 
        :app-parameter="appParameter" 
        :hover-start-time="hoverStartTime" 
        :hover-stay-time="hoverStayTime" 
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
export default {
    props: {
        type: {
            type: String,
            default: 'default'
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
        btnClass: {
            type: String,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        openType: {
            type: String,
            default: ''
        },
        appParameter: {
            type: String,
            default: ''
        },
        hoverStartTime: {
            type: Number,
            default: 20
        },
        hoverStayTime: {
            type: Number,
            default: 70
        },
        lang: {
            type: String,
            default: 'en'
        },
        sessionFrom: {
            type: String,
            default: ''
        },
        sendMessageTitle: {
            type: String,
            default: ''
        },
        sendMessagePath: {
            type: String,
            default: ''
        },
        sendMessageImg: {
            type: String,
            default: ''
        },
        showMessageCard: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            let buttonClass = `wuli-btn wuli-btn__${this.size} ${this.btnClass}`
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
