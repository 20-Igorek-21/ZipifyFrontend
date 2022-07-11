<template>

    <section
        class="tt-preview"
        :style="{ backgroundColor: inputColor }"
    >
        <p v-html="this.innerWysiwyg"/>

    </section>

</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'EditorPagePreviewBanner',
    computed: {
        ...mapState({
            inputColor: state => state.inputColor,
            innerWysiwyg: state => state.inputWysiwyg
        })
    }
};

</script>

<style scoped>

    .tt-preview {
        height: 50px;
        width: 300px;
        margin: 0 10px 30px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-grey);
        border-radius: 8px;
    }

</style>
