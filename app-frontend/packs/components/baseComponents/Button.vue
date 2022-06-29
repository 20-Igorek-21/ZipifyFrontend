<template>

    <button
        class="tt-button"
        :type="type"
        @click="onClick">
            <slot/>
    </button>

</template>

<script>
export default {
    name: 'Button',
    methods: {
        onClick() {
            this.$emit('onClick');
        }
    },
    props: {
        type: {
            type: String,
            required: true
        }
    }
}
</script>
