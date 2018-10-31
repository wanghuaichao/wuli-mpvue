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
            this.setData({
                showPopup: !this.data.showPopup
            });
        },

        toggleLeftPopup() {
            this.setData({
                showLeftPopup: !this.data.showLeftPopup
            });
        },

        toggleRightPopup() {
            this.setData({
                showRightPopup: !this.data.showRightPopup
            });
        },

        toggleBottomPopup() {
            this.setData({
                showBottomPopup: !this.data.showBottomPopup
            });
        },

        toggleTopPopup() {
            this.setData({
                showTopPopup: !this.data.showTopPopup
            });
        }
    },
}
</script>
