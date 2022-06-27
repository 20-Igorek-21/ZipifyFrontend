<template>

    <button class="tt-button" :type="typeButton" @click="clickUiButton">
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: 'UiButton',
    methods: {
        clickUiButton() {
            this.$emit('click');
        }
    },
    props: {
        typeButton:String,
    }
}
</script>
