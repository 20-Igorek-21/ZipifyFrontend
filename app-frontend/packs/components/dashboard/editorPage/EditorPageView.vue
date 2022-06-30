<template>

    <div
        class="tt-editor-page"
    >
        <EditorPageEditForm/>

        <EditorPagePreviewBanner/>

    </div>

</template>

<script>

import EditorPageEditForm from "./EditorPageEditForm";
import EditorPagePreviewBanner from "./EditorPagePreviewBanner";
export default {
    name: "EditorPageView",
    components: {EditorPagePreviewBanner, EditorPageEditForm},
}
</script>

<style>

    .tt-editor-page {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

</style>
