<template>

    <div
        class="tt-confirm"
        @click.stop="this.$emit('confirm')"
    >

        <div
            class="tt-confirm__content"
            @click.stop
        >
            <slot/>
        </div>

    </div>

</template>

<script>

export default {
    name: "Confirm"
}

</script>

<style scoped>

    .tt-confirm {
        position: fixed;
        display: flex;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99999;
    }

    .tt-confirm__content {
        height: 170px;
        width: 285px;
        margin: auto;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        background-color: #FFF;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
    }

</style>
