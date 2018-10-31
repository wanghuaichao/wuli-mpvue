<template>
    <div class="container">
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            showPopup: false,
            showLeftPopup: false,
            showRightPopup: false,
            showTopPopup: false,
            showBottomPopup: false
        }
    },
    onShow() {
       
    },
    methods: {
        togglePopup() {
            this.showPopup = !this.showPopup
        },
        toggleLeftPopup() {
            this.showLeftPopup = !this.showLeftPopup
        },
        toggleRightPopup() {
            this.showRightPopup = !this.showRightPopup
        },
        toggleBottomPopup() {
            this.showBottomPopup = !this.showBottomPopup
        },
        toggleTopPopup() {
            this.showTopPopup = !this.showTopPopup
        }
    },
}
</script>
