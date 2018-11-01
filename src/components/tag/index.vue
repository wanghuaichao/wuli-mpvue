<template>
    <span class="wuli-tag"
        >
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        size: String,
        type: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean
  },
  data() {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {

        }
}
</script>
