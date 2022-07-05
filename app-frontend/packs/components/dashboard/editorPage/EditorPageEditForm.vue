<template>

    <form
        class="tt-editor-form"
        @submit.prevent="formSubmit"
    >

        <p class="tt-text tt-editor-form__text">
            Format your Banner for your site Customize everything from background color, to icons, to position, to
            margin width.
        </p>

        <h3 class="tt-text tt-editor-form__title">
            Name your banner
        </h3>

        <div class="tt-editor-form__box-input">
            <Input
                class="tt-editor-form__text-input"
                :modelValue="inputText"
                @update:model-value="setInputText"
                :type="'text'"
                placeholder="New banner"
            />
            <p
                class="tt-text tt-editor-form__message"
                v-if="this.v$.inputText.$dirty && this.v$.inputText.$invalid"
            >
                This field is invalid.
            </p>
        </div>


        <h3 class="tt-text tt-editor-form__title">
            Header text
        </h3>

        <div class="tt-editor-form__box-input">
            <Wysiwyg
                class="tt-editor-form__wysiwyg"
                :inputWysiwyg="inputWysiwyg"
                @update:modelValueWysiwygLength="setInputLengthWysiwyg"
                @update:model-value-wysiwyg="setInputWysiwyg"
            />
            <p
                class="tt-text tt-editor-form__message"
                v-if="this.v$.inputText.$dirty && ((this.inputLengthWysiwyg < 2) || (this.inputLengthWysiwyg >= 20))"
            >
                This field is invalid.
            </p>
        </div>

        <h3 class="tt-text tt-editor-form__title">
            Banner background color
        </h3>

        <Input
            class="tt-editor-form__color-input"
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

import {mapMutations, mapState, mapActions} from 'vuex';
import Input from "../../baseComponents/Input";
import Button from "../../baseComponents/Button";
import Wysiwyg from "../../baseComponents/Wysiwyg";
import useVuelidate from "@vuelidate/core";
import {maxLength, required} from "@vuelidate/validators";
import {MAX_LENGTH_TITLE, MAX_LENGTH_WYSIWYG, MIN_LENGTH_WYSIWYG} from "../../../constants";
import {ResourcePicker} from "@shopify/app-bridge/actions";
import app from "../../../shared/shopifyApp";

export default {
    name: "EditorPageEditForm",
    components: {
        Wysiwyg,
        Button,
        Input
    },
    setup: () => ({v$: useVuelidate()}),
    validations() {
        return {
            inputText: {required, maxlength: maxLength(MAX_LENGTH_TITLE)},
        }
    },
    methods: {
        resourcePicker() {
            const productPicker = ResourcePicker.create(app, {
                resourceType: ResourcePicker.ResourceType.Product,
                options: {
                    selectMultiple: true,
                    showHidden: false,
                },
            });
            productPicker.dispatch(ResourcePicker.Action.OPEN)
        },
        ...mapMutations({
            setInputText: 'banners/setInputText',
            setInputColor: 'banners/setInputColor',
            setInputWysiwyg: "banners/setInputWysiwyg",
            setInputLengthWysiwyg: "banners/setInputLengthWysiwyg",
        }),
        ...mapActions({
            createBanner: 'banners/createBanner',
            changeBanner: 'banners/changeBanner',
        }),
        formSubmit() {
            this.$store.commit('banners/setLoader', true);
            this.v$.inputText.$dirty = true;
            if (!this.v$.inputText.$invalid && (this.inputLengthWysiwyg >= MIN_LENGTH_WYSIWYG) && (this.inputLengthWysiwyg < MAX_LENGTH_WYSIWYG)) {
                if (this.idBannerChange) {
                    this.changeBanner();
                } else {
                    this.createBanner();
                }
            }
        },
    },
    computed: {
        ...mapState({
            inputText: state => state.banners.inputText,
            inputColor: state => state.banners.inputColor,
            inputWysiwyg: state => state.banners.inputWysiwyg,
            inputLengthWysiwyg: state => state.banners.inputLengthWysiwyg,
            idBannerChange: state => state.banners.idBannerChange,
            dataBanner: state => state.banners.dataBanner
        })
    },
    mounted() {
        this.$store.commit('banners/setInputColor', '#FFFFFF');
        if (this.idBannerChange) {
            this.$store.commit('banners/setInputText', this.dataBanner.title);
            this.$store.commit('banners/setInputColor', this.dataBanner.style.color);
            this.$store.commit('banners/setInputWysiwyg', this.dataBanner.content);
        }
    },
    beforeUnmount() {
        this.$store.commit('banners/setIdBannerChange', null);
        this.$store.commit('banners/setInputText', '');
        this.$store.commit('banners/setInputWysiwyg', '');
    }
}
</script>

<style scoped>

    .tt-editor-form {
        height: 700px;
        width: 350px;
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

    .tt-editor-form__box-input {
        width: 100%;
        position: relative;
    }

    .tt-editor-form__text-input {
        padding-left: 12px;
        border: 1px solid var(--color-grey);
    }

    .tt-editor-form__color-input {
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
        position: absolute;
        bottom: 50px;
        right: 50px;
    }

    .tt-editor-form__wysiwyg {
        height: 80px;
    }

    .tt-editor-form__message {
        margin-top: 2px;
        position: absolute;
        color: var(--color-red);
        font-size: 12px;
    }

    .tt-editor-form__color-input:hover {
        cursor: pointer;
    }

    @media (max-width: 750px) {

        .tt-page__button--third {
            top: 15px;
            right: 10px;
            background-color: var(--color-red);
            color: var(--color-white);
            border: 2px solid var(--color-white);
        }

        .tt-page__button--third:hover {
            background-color: var(--color-white);
            color: var(--color-red);
        }
    }

</style>
