<template>
    <button 
        :class="buttonClass" 
        :type="type" 
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
        plain: Boolean,
        disabled: Boolean,
        btnClass: String,
        loading: Boolean,
        openType: String,
        appParameter: String,
        lang: String,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
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
