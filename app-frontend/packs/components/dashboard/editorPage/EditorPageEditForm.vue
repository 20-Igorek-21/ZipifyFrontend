<template>

    <form
        class="tt-editor-form"
        @submit="formSubmit"
    >

        <p class="tt-text tt-editor-form__text">
            Format your Banner for your site Customize everything from background color, to icons, to position, to margin width.
        </p>

        <h3 class="tt-text tt-editor-form__title">
            Name your banner
        </h3>

        <Input
            class="tt-editor-form__input-text"
            :modelValue="inputText"
            @update:model-value="setInputText"
            :type="'text'"
            placeholder="New banner"
        />

        <h3 class="tt-text tt-editor-form__title">
            Header text
        </h3>

        <Wysiwyg class="tt-editor-form__wysiwyg"
                 @update:model-value-wysiwyg="setInputWysiwyg"/>

        <h3 class="tt-text tt-editor-form__title">
            Banner background color
        </h3>

        <Input
            class="tt-editor-form__input-color"
            :modelValue="inputColor"
            @update:model-value="setInputColor"
            :type="'color'"
        />

        <h3 class="tt-text tt-editor-form__title">
            Banner background color
        </h3>

        <Button
            class="tt-button tt-page__button tt-page__button--third"
            :type="'submit'"
        >
            Save
        </Button>

    </form>

</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex';
import Input from "../../baseComponents/Input";
import Button from "../../baseComponents/Button";
import Wysiwyg from "../../baseComponents/Wysiwyg";

export default {
    name: "EditorPageEditForm",
    components: {
        Wysiwyg,
        Button,
        Input
    },
    methods: {
        ...mapMutations({
            setInputText: 'banners/setInputText',
            setInputColor: 'banners/setInputColor',
            setInputWysiwyg: "banners/setInputWysiwyg"
        }),
        ...mapActions({
            createBanner: 'banners/createBanner',
        }),
        formSubmit() {
            this.createBanner();
        }
    },
    computed: {
        ...mapState({
            inputText: state => state.banners.inputText,
            inputColor: state => state.banners.inputColor,
            inputWysiwyg: state => state.banners.inputWysiwyg
        })
    },
    mounted() {
        this.$store.commit('banners/setInputColor', '#FFFFFF')
    }
}
</script>

<style scoped>

    .tt-editor-form {
        height: 700px;
        width: 405px;
        margin: 30px;
        padding: 40px 30px 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        background-color: #FFF;
        box-shadow: 0 4px 8px rgb(0 0 0 / 15%), 0 8px 16px rgb(0 0 0 / 15%);
    }

    .tt-editor-form__input-text {
        padding-left: 12px;
        border: 1px solid var(--color-grey);
    }

    .tt-editor-form__input-color {
        border: none;
    }

    .tt-editor-form__text {
        font-size: 16px;
        color: var(--color-grey);
    }

    .tt-editor-form__title {
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: inherit;
        border: 1px solid var(--color-grey);
        border-radius: 20px;
    }

    .tt-page__button--third {
        width: 108px;
        position: fixed;
        bottom: 50px;
        right: 50px;
    }

    .tt-editor-form__wysiwyg {
        height: 80px;
    }

    .tt-editor-form__input-color:hover {
        cursor: pointer;
    }

</style>
