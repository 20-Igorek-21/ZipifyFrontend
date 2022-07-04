<template>

    <input
        class="tt-input"
        :type="type"
        :value="modelValue"
        @input="updateInput"
    >

</template>

<script>
export default {
    name: "Input",
    props: {
        modelValue: [String, Number],
        type: String,
        required: false
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

    .tt-input {
        height: 35px;
        width: 100%;
        font-size: inherit;
        border-radius: 4px;
    }

    .tt-input:hover,
    .tt-input:focus {
        box-shadow: 0 0 10px var(--color-grey);
    }

</style>
