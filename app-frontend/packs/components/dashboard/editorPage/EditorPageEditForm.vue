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
                @update:model-value="inputTextWrite"
                placeholder="New banner"
            />
            <p
                class="tt-text tt-editor-form__message"
                v-if="isInputTextInvalid"
            >
                This field is invalid.
            </p>
        </div>

        <span class="tt-editor-form__line"/>

        <h3 class="tt-text tt-editor-form__title">
            Header text
        </h3>

        <div class="tt-editor-form__box-input">
            <Wysiwyg
                class="tt-editor-form__wysiwyg"
                @update:modelValueWysiwygLength="inputLengthWysiwygWrite"
                @update:model-value-wysiwyg="inputWysiwygWrite"
            />
            <p
                class="tt-text tt-editor-form__message"
                v-if="isInputWysiwygInvalid"
            >
                This field is invalid.
            </p>
        </div>

        <span class="tt-editor-form__line"/>

        <h3 class="tt-text tt-editor-form__title">
            Banner background color
        </h3>

        <Input
            class="tt-editor-form__color-input"
            :modelValue="inputColor"
            @update:model-value="inputColorWrite"
            type="color"
        />

        <span class="tt-editor-form__line"/>

        <div class="tt-editor-form__wrapper-product">
            <div
                class="tt-editor-form__content-product"
                v-if="titleProduct"
            >
                <h4 class="tt-editor-form__title-product">
                    Product:
                </h4>
                <p class="tt-editor-form__text-product">
                    {{titleProduct}}
                </p>
                <img
                    class="tt-editor-form__img-product"
                    :src="imgProduct"
                    alt="Product-photo"
                >
            </div>
        </div>

        <Button
            class="tt-button tt-page__button tt-page__button--third"
            type="submit"
        >
            Save
        </Button>

        <Button
            class="tt-button tt-page__button"
            @click="resourcePicker"
            type="button">
            <p v-if="titleProduct">
                Change product
            </p>
            <p v-else>
                Add product
            </p>
        </Button>

    </form>

</template>

<script>

import { mapState, mapActions } from 'vuex';
import Input from '../../baseComponents/Input';
import Button from '../../baseComponents/Button';
import Wysiwyg from '../../baseComponents/Wysiwyg';
import useVuelidate from '@vuelidate/core';
import { maxLength, required } from '@vuelidate/validators';
import { MAX_LENGTH_TITLE, MAX_LENGTH_WYSIWYG, MIN_LENGTH_WYSIWYG } from '../../../constants';
import { ResourcePicker } from '@shopify/app-bridge/actions';
import app from '../../../shared/shopifyApp';


export default {
    name: 'EditorPageEditForm',
    components: {
        Wysiwyg,
        Button,
        Input
    },
    setup: () => ({ v$: useVuelidate() }),
    validations() {
        return {
            inputText: { required, maxlength: maxLength(MAX_LENGTH_TITLE) }
        };
    },
    methods: {
        resourcePicker() {
            const productPicker = ResourcePicker.create(app, {
                resourceType: ResourcePicker.ResourceType.Product,
                options: {
                    selectMultiple: true,
                    showHidden: false,
                    showVariants: false
                }
            });

            productPicker.dispatch(ResourcePicker.Action.OPEN);
            productPicker.subscribe(ResourcePicker.Action.SELECT, ({ selection }) => {
                this.productWrite(selection[0]);
            });
        },
        ...mapActions({
            createBanner: 'createBanner',
            changeBanner: 'changeBanner',
            clearFields: 'clearFields',
            productWrite: 'productWrite',
            inputTextWrite: 'inputTextWrite',
            inputColorWrite: 'inputColorWrite',
            inputWysiwygWrite: 'inputWysiwygWrite',
            inputLengthWysiwygWrite: 'inputLengthWysiwygWrite',
        }),
        formSubmit() {
            this.v$.inputText.$dirty = true;
            if (!this.isInputInvalid) return;
            if (this.idBanner) {
                    this.changeBanner();
                    this.v$.inputText.$dirty = false;
                } else {
                    this.createBanner();
                    this.v$.inputText.$dirty = false;
                }
        }
    },
    computed: {
        ...mapState({
            inputText: state => state.inputText,
            inputColor: state => state.inputColor,
            inputWysiwyg: state => state.inputWysiwyg,
            inputLengthWysiwyg: state => state.inputLengthWysiwyg,
            idBanner: state => state.idBanner,
            titleProduct: state => state.titleProduct,
            imgProduct: state => state.imgProduct
        }),
        isInputInvalid() {
             return !this.v$.inputText.$invalid && (this.inputLengthWysiwyg >= MIN_LENGTH_WYSIWYG) && (this.inputLengthWysiwyg < MAX_LENGTH_WYSIWYG);
        },
        isInputTextInvalid() {
            return this.v$.inputText.$dirty && this.v$.inputText.$invalid;
        },
        isInputWysiwygInvalid() {
            return this.v$.inputText.$dirty && ((this.inputLengthWysiwyg < 2) || (this.inputLengthWysiwyg >= 20));
        }
    },
    beforeUnmount() {
        this.clearFields();
    }
};
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

    .tt-editor-form__line {
        margin-top: 5px;
        width: 100%;
        border-bottom: 1px solid var(--color-grey);
    }

    .tt-editor-form__wrapper-product {
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .tt-editor-form__content-product {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .tt-editor-form__title-product {
        font-size: inherit;
        margin-right: 10px;
    }

    .tt-editor-form__text-product {
        width: 80px;
        margin-right: 40px;
        font-size: inherit;
    }

    .tt-editor-form__img-product {
        display: flex;
        width: 50px;
        height: 50px;
        object-fit: contain;
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
