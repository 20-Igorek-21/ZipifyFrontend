<template>

    <section
        class="tt-preview"
        :style="{ backgroundColor: inputColor }"
    >
        <p v-html="this.innerWysiwyg"></p>

    </section>

</template>

<script>

import {mapState} from "vuex";

export default {
    name: "EditorPagePreviewBanner",
    computed: {
        ...mapState({
            inputColor: state => state.banners.inputColor,
            innerWysiwyg: state => state.banners.inputWysiwyg
        })
    },
}

</script>

<style scoped>

    .tt-preview {
        height: 50px;
        width: 300px;
        margin-right: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-red);
        border-radius: 8px;
    }

</style>
