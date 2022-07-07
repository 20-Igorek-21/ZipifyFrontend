<template>

    <div
        class="tt-editor-page"
        v-if="isLoader"
    >

        <EditorPageEditForm/>

        <EditorPagePreviewBanner/>

        <router-link
            class="tt-link tt-editor-page__link"
            to="/"
        >
            Back
        </router-link>

    </div>

    <LoaderPage v-else/>

</template>

<script>

import EditorPageEditForm from "./EditorPageEditForm";
import EditorPagePreviewBanner from "./EditorPagePreviewBanner";
import {mapState} from "vuex";
import LoaderPage from "../../baseComponents/LoaderPage";

export default {
    name: "EditorPageView",
    components: {
        EditorPagePreviewBanner,
        EditorPageEditForm,
        LoaderPage
    },
    computed: {
        ...mapState ({
            isLoader: state => state.banners.isLoader,
        })
    },
}

</script>

<style>

    .tt-editor-page {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .tt-editor-page__link {
        height: 40px;
        width: 108px;
        position: absolute;
        bottom: 50px;
        right: 210px;
        border-radius: 4px;
        background-color: var(--color-white);
        color: var(--color-red);
        border: 2px solid var(--color-red);
    }

    .tt-editor-page__link:hover {
        background-color: var(--color-red);
        color: var(--color-white);
    }

    @media (max-width: 750px) {

        .tt-editor-page__link {
            top: 15px;
            right: 130px;
            background-color: var(--color-red);
            color: var(--color-white);
            border: 2px solid var(--color-white);
        }

        .tt-editor-page__link:hover {
            background-color: var(--color-white);
            color: var(--color-red);
        }
    }

</style>
